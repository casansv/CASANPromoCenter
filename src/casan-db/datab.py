import os
import json
import pandas as pd
from PyQt5.QtWidgets import (
    QDialog, QVBoxLayout, QFormLayout, QLineEdit, QTextEdit, QComboBox, 
    QLabel, QPushButton, QMessageBox, QFileDialog, QTableWidget, QTableWidgetItem, QHBoxLayout,
    QGridLayout, QGroupBox
)
from PyQt5.QtCore import Qt
from utils import verificar_existencia_rutas

# Cargar categorías de un archivo JSON
json_r = os.path.join('categorias.json')
with open(json_r, 'r', encoding='utf-8') as f:
    data = json.load(f)

categorias_dropshipping = list(data["categorias"])


class ProductManager(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Gestión de Productos")
        self.resize(400, 600)

        # Layout principal
        self.layout = QVBoxLayout()
        self.setLayout(self.layout)

        # Formulario para añadir productos
        self.form_layout = QFormLayout()
        self.name_input = QLineEdit()
        self.category_combo = QComboBox()
        self.category_combo.addItems(categorias_dropshipping)
        self.price_input = QLineEdit()
        self.description_input = QTextEdit()
        
        # Grupo de características
        features_group = QGroupBox("Características (máximo 5)")
        features_layout = QVBoxLayout()
        self.feature_inputs = []
        for i in range(5):
            feature_input = QLineEdit()
            feature_input.setPlaceholderText(f"Característica {i+1}")
            self.feature_inputs.append(feature_input)
            features_layout.addWidget(feature_input)
        features_group.setLayout(features_layout)

        # Grupo de imágenes
        images_group = QGroupBox("Enlaces de Imágenes (máximo 5)")
        images_layout = QVBoxLayout()
        self.image_inputs = []
        for i in range(5):
            image_input = QLineEdit()
            image_input.setPlaceholderText(f"Enlace de imagen {i+1}")
            self.image_inputs.append(image_input)
            images_layout.addWidget(image_input)
        images_group.setLayout(images_layout)

        self.buy_link_input = QLineEdit()
        self.review_input = QTextEdit()
        self.meta_keywords_input = QLineEdit()

        # Añadir campos al formulario
        self.form_layout.addRow("Nombre del Producto:", self.name_input)
        self.form_layout.addRow("Categoría:", self.category_combo)
        self.form_layout.addRow("Precio:", self.price_input)
        self.form_layout.addRow("Descripción:", self.description_input)
        self.form_layout.addRow(features_group)
        self.form_layout.addRow(images_group)
        self.form_layout.addRow("Enlace de Compra:", self.buy_link_input)
        self.form_layout.addRow("Reseña:", self.review_input)
        self.form_layout.addRow("Meta Keywords (separadas por comas):", self.meta_keywords_input)

        # Botón para guardar el producto
        self.save_button = QPushButton("Guardar Producto")
        self.save_button.clicked.connect(self.save_product)

        # Añadir todo al layout
        self.layout.addLayout(self.form_layout)
        self.layout.addWidget(self.save_button)

    def save_product(self):
        # Obtener valores de los campos
        name = self.name_input.text().strip()
        category = self.category_combo.currentText()
        try:
            price = float(self.price_input.text().strip())
        except ValueError:
            QMessageBox.warning(self, "Error", "Por favor, introduce un precio válido.")
            return
        description = self.description_input.toPlainText().strip()
        
        # Recoger características no vacías
        features = [f.text().strip() for f in self.feature_inputs if f.text().strip()]
        
        # Recoger enlaces de imágenes no vacíos
        images = [i.text().strip() for i in self.image_inputs if i.text().strip()]
        
        buy_link = self.buy_link_input.text().strip()
        review = self.review_input.toPlainText().strip()
        meta_keywords = self.meta_keywords_input.text().strip()

        # Crear o cargar el archivo CSV
        storage_path = verificar_existencia_rutas()
        ruta_csv = os.path.join(storage_path, 'PRODUCTOS.csv')
        archivo_existe = os.path.exists(ruta_csv)

        if archivo_existe:
            df = pd.read_csv(ruta_csv, converters={'FEATURES': eval, 'IMAGES': eval}, encoding='utf-8')
            id_actual = df['ID'].max() + 1 if not df.empty else 1
        else:
            columnas = ['ID', 'NAME', 'CATEGORY', 'PRICE', 'DESCRIPTION', 'FEATURES', 'IMAGES', 'BUY_LINK', 'RESEÑA', 'META_KEYWORDS']
            df = pd.DataFrame(columns=columnas)
            id_actual = 1

        # Crear registro de nuevo producto
        nuevo_producto = pd.DataFrame({
            'ID': [id_actual],
            'NAME': [name],
            'CATEGORY': [category],
            'PRICE': [price],
            'DESCRIPTION': [description],
            'FEATURES': [features],
            'IMAGES': [images],
            'BUY_LINK': [buy_link],
            'RESEÑA': [review],
            'META_KEYWORDS': [meta_keywords]
        })

        # Guardar en el archivo CSV
        df = pd.concat([df, nuevo_producto], ignore_index=True)
        df.to_csv(ruta_csv, index=False, encoding='utf-8')
        QMessageBox.information(self, "Guardado", "Producto guardado correctamente.")

        # Limpiar los campos del formulario
        self.clear_form()

    def clear_form(self):
        """Limpia los campos de entrada del formulario."""
        self.name_input.clear()
        self.price_input.clear()
        self.description_input.clear()
        for feature_input in self.feature_inputs:
            feature_input.clear()
        for image_input in self.image_inputs:
            image_input.clear()
        self.buy_link_input.clear()
        self.review_input.clear()
        self.meta_keywords_input.clear()


class ProductOverview(QDialog):
    """Ventana de vista general de productos, con búsqueda y opciones para modificar o eliminar."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Vista de Productos")
        self.resize(700, 500)

        # Layout principal
        self.layout = QVBoxLayout()
        self.setLayout(self.layout)

        # Barra de búsqueda
        self.search_bar = QLineEdit()
        self.search_bar.setPlaceholderText("Buscar producto por nombre...")
        self.search_bar.textChanged.connect(self.search_products)

        # Tabla de productos
        self.product_table = QTableWidget()
        self.product_table.setColumnCount(4)
        self.product_table.setHorizontalHeaderLabels(["ID", "Nombre", "Categoría", "Precio"])
        self.product_table.setSelectionBehavior(QTableWidget.SelectRows)
        self.product_table.setEditTriggers(QTableWidget.NoEditTriggers)

        # Cargar productos al iniciar
        self.load_products()

        # Botones de acción
        self.modify_button = QPushButton("Modificar Producto")
        self.modify_button.clicked.connect(self.modify_product)
        self.delete_button = QPushButton("Eliminar Producto")
        self.delete_button.clicked.connect(self.delete_product)

        # Layout de botones
        button_layout = QHBoxLayout()
        button_layout.addWidget(self.modify_button)
        button_layout.addWidget(self.delete_button)

        # Añadir widgets al layout principal
        self.layout.addWidget(self.search_bar)
        self.layout.addWidget(self.product_table)
        self.layout.addLayout(button_layout)

    def load_products(self):
        """Carga productos desde el archivo CSV y los muestra en la tabla."""
        ruta_csv = os.path.join(verificar_existencia_rutas(), 'PRODUCTOS.csv')
        if not os.path.exists(ruta_csv):
            QMessageBox.warning(self, "Error", "No se encontró la base de datos de productos.")
            self.close()
            return

        # Leer datos y cargar en la tabla
        self.products_df = pd.read_csv(ruta_csv, converters={'FEATURES': eval, 'IMAGES': eval}, encoding='utf-8')
        self.display_products(self.products_df)

    def display_products(self, df):
        """Muestra los productos en la tabla."""
        self.product_table.setRowCount(len(df))
        for row_idx, (_, row) in enumerate(df.iterrows()):
            self.product_table.setItem(row_idx, 0, QTableWidgetItem(str(row['ID'])))
            self.product_table.setItem(row_idx, 1, QTableWidgetItem(row['NAME']))
            self.product_table.setItem(row_idx, 2, QTableWidgetItem(row['CATEGORY']))
            self.product_table.setItem(row_idx, 3, QTableWidgetItem(f"${row['PRICE']:.2f}"))

    def search_products(self):
        """Filtra productos según el texto ingresado en la barra de búsqueda."""
        search_text = self.search_bar.text().lower()
        filtered_df = self.products_df[self.products_df['NAME'].str.contains(search_text, case=False)]
        self.display_products(filtered_df)

    def modify_product(self):
        """Abre la ventana de modificación para el producto seleccionado."""
        selected_row = self.product_table.currentRow()
        if selected_row == -1:
            QMessageBox.warning(self, "Selecciona un Producto", "Por favor, selecciona un producto para modificar.")
            return

        product_id = int(self.product_table.item(selected_row, 0).text())
        modify_dialog = ModifyProduct(product_id, self)
        if modify_dialog.exec_():
            self.load_products()

    def delete_product(self):
        """Elimina el producto seleccionado de la base de datos."""
        selected_row = self.product_table.currentRow()
        if selected_row == -1:
            QMessageBox.warning(self, "Selecciona un Producto", "Por favor, selecciona un producto para eliminar.")
            return

        product_id = int(self.product_table.item(selected_row, 0).text())
        reply = QMessageBox.question(
            self, "Confirmar Eliminación", f"¿Estás seguro de que deseas eliminar el producto ID {product_id}?",
            QMessageBox.Yes | QMessageBox.No, QMessageBox.No
        )

        if reply == QMessageBox.Yes:
            ruta_csv = os.path.join(verificar_existencia_rutas(), 'PRODUCTOS.csv')
            df = pd.read_csv(ruta_csv, converters={'FEATURES': eval, 'IMAGES': eval}, encoding='utf-8')
            df = df[df['ID'] != product_id]
            df.to_csv(ruta_csv, index=False, encoding='utf-8')
            QMessageBox.information(self, "Eliminado", f"Producto ID {product_id} eliminado correctamente.")
            self.load_products()


class ModifyProduct(QDialog):
    def __init__(self, product_id, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Modificar Producto")
        self.resize(400, 600)
        self.product_id = product_id

        # Layout y formulario
        self.layout = QVBoxLayout()
        self.setLayout(self.layout)
        self.form_layout = QFormLayout()

        # Campos del formulario
        self.name_input = QLineEdit()
        self.category_combo = QComboBox()
        self.category_combo.addItems(categorias_dropshipping)
        self.price_input = QLineEdit()
        self.description_input = QTextEdit()

        # Grupo de características
        features_group = QGroupBox("Características (máximo 5)")
        features_layout = QVBoxLayout()
        self.feature_inputs = []
        for i in range(5):
            feature_input = QLineEdit()
            feature_input.setPlaceholderText(f"Característica {i+1}")
            self.feature_inputs.append(feature_input)
            features_layout.addWidget(feature_input)
        features_group.setLayout(features_layout)

        # Grupo de imágenes
        images_group = QGroupBox("Enlaces de Imágenes (máximo 5)")
        images_layout = QVBoxLayout()
        self.image_inputs = []
        for i in range(5):
            image_input = QLineEdit()
            image_input.setPlaceholderText(f"Enlace de imagen {i+1}")
            self.image_inputs.append(image_input)
            images_layout.addWidget(image_input)
        images_group.setLayout(images_layout)

        self.buy_link_input = QLineEdit()
        self.review_input = QTextEdit()
        self.meta_keywords_input = QLineEdit()

        # Cargar datos del producto
        self.load_product_data()

        # Añadir campos al formulario
        self.form_layout.addRow("Nombre del Producto:", self.name_input)
        self.form_layout.addRow("Categoría:", self.category_combo)
        self.form_layout.addRow("Precio:", self.price_input)
        self.form_layout.addRow("Descripción:", self.description_input)
        self.form_layout.addRow(features_group)
        self.form_layout.addRow(images_group)
        self.form_layout.addRow("Enlace de Compra:", self.buy_link_input)
        self.form_layout.addRow("Reseña:", self.review_input)
        self.form_layout.addRow("Meta Keywords (separadas por comas):", self.meta_keywords_input)

        # Botón para actualizar el producto
        self.update_button = QPushButton("Actualizar Producto")
        self.update_button.clicked.connect(self.update_product)

        # Añadir todo al layout
        self.layout.addLayout(self.form_layout)
        self.layout.addWidget(self.update_button)

    def load_product_data(self):
        """Carga los datos del producto existente en el formulario."""
        ruta_csv = os.path.join(verificar_existencia_rutas(), 'PRODUCTOS.csv')
        if not os.path.exists(ruta_csv):
            QMessageBox.warning(self, "Error", "No se encontró la base de datos.")
            self.close()
            return

        df = pd.read_csv(ruta_csv, converters={'FEATURES': eval, 'IMAGES': eval}, encoding='utf-8')
        producto = df.loc[df['ID'] == self.product_id].iloc[0]

        # Cargar los datos en los campos del formulario
        self.name_input.setText(producto['NAME'])
        self.category_combo.setCurrentText(producto['CATEGORY'])
        self.price_input.setText(str(producto['PRICE']))
        self.description_input.setPlainText(producto['DESCRIPTION'])
        
        # Cargar características e imágenes, limitando a los primeros 5 elementos si hay más
        for i, feature in enumerate(producto['FEATURES'][:5]):
            self.feature_inputs[i].setText(feature)
        for i, image in enumerate(producto['IMAGES'][:5]):
            self.image_inputs[i].setText(image)

        self.buy_link_input.setText(producto['BUY_LINK'])
        self.review_input.setPlainText(producto['RESEÑA'])
        self.meta_keywords_input.setText(producto['META_KEYWORDS'])

    def update_product(self):
        """Actualiza el producto en el archivo CSV con los nuevos valores."""
        # Obtener los nuevos valores del formulario
        name = self.name_input.text().strip()
        category = self.category_combo.currentText()
        try:
            price = float(self.price_input.text().strip())
        except ValueError:
            QMessageBox.warning(self, "Error", "Por favor, introduce un precio válido.")
            return
        description = self.description_input.toPlainText().strip()
        features = [f.text().strip() for f in self.feature_inputs if f.text().strip()]
        images = [i.text().strip() for i in self.image_inputs if i.text().strip()]
        buy_link = self.buy_link_input.text().strip()
        review = self.review_input.toPlainText().strip()
        meta_keywords = self.meta_keywords_input.text().strip()

        # Verificar la existencia del archivo CSV
        ruta_csv = os.path.join(verificar_existencia_rutas(), 'PRODUCTOS.csv')
        if not os.path.exists(ruta_csv):
            QMessageBox.warning(self, "Error", "No se encontró la base de datos de productos.")
            self.close()
            return

        # Cargar el archivo CSV
        df = pd.read_csv(ruta_csv, converters={'FEATURES': eval, 'IMAGES': eval}, encoding='utf-8')

        # Modificar los valores del producto correspondiente
        idx_producto = df[df['ID'] == self.product_id].index[0]
        df.at[idx_producto, 'NAME'] = name
        df.at[idx_producto, 'CATEGORY'] = category
        df.at[idx_producto, 'PRICE'] = price
        df.at[idx_producto, 'DESCRIPTION'] = description
        df.at[idx_producto, 'FEATURES'] = features
        df.at[idx_producto, 'IMAGES'] = images
        df.at[idx_producto, 'BUY_LINK'] = buy_link
        df.at[idx_producto, 'RESEÑA'] = review
        df.at[idx_producto, 'META_KEYWORDS'] = meta_keywords

        # Guardar los cambios en el archivo CSV
        df.to_csv(ruta_csv, index=False, encoding='utf-8')

        # Mostrar mensaje de éxito
        QMessageBox.information(self, "Actualizado", "Producto actualizado correctamente.")

        # Cerrar la ventana de modificación
        self.accept()
