# src\casan-db\gui_products.py
import sys
import platform
from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPalette, QColor
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QVBoxLayout, QWidget, QPushButton, 
    QMessageBox, QLabel
)

from datab import ProductManager, ProductOverview





'''
>>> Creación de interfaz gráfica
'''
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Sistema de Gestión de Productos")
        self.resize(800, 600)
        
        # Widget y Layout principal
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        layout = QVBoxLayout()
        central_widget.setLayout(layout)
        
        # Título
        title_label = QLabel("Sistema de Gestión de Productos")
        title_label.setStyleSheet("""
            QLabel {
                font-size: 24px;
                color: #ffffff;
                padding: 20px;
                font-weight: bold;
            }
        """)
        title_label.setAlignment(Qt.AlignCenter)
        
        # Botones con estilo mejorado
        button_style = """
            QPushButton {
                background-color: #2c3e50;
                color: white;
                border: none;
                padding: 15px;
                margin: 10px 50px;
                border-radius: 5px;
                font-size: 16px;
            }
            QPushButton:hover {
                background-color: #34495e;
            }
            QPushButton:pressed {
                background-color: #2980b9;
            }
        """
        
        self.add_product_button = QPushButton("✚ Crear / Añadir Producto")
        self.add_product_button.setStyleSheet(button_style)
        self.add_product_button.clicked.connect(self.open_add_product_dialog)
        
        self.modify_product_button = QPushButton("✎ Modificar Producto")
        self.modify_product_button.setStyleSheet(button_style)
        self.modify_product_button.clicked.connect(self.open_modify_product_dialog)
        
        self.exit_button = QPushButton("✖ Salir")
        self.exit_button.setStyleSheet(button_style)
        self.exit_button.clicked.connect(self.close_application)
        
        # Añadir widgets al layout
        layout.addWidget(title_label)
        layout.addStretch()
        layout.addWidget(self.add_product_button)
        layout.addWidget(self.modify_product_button)
        layout.addWidget(self.exit_button)
        layout.addStretch()

    def open_add_product_dialog(self):
        self.product_manager = ProductManager(self)
        self.product_manager.exec_()

    def open_modify_product_dialog(self):
        self.product_overview = ProductOverview(self)
        if self.product_overview.exec_():
            self.product_overview.load_products()

    def close_application(self):
        confirm = QMessageBox.question(
            self, "Salir", 
            "¿Estás seguro de que quieres salir?",
            QMessageBox.Yes | QMessageBox.No, 
            QMessageBox.No
        )
        if confirm == QMessageBox.Yes:
            self.close()

def set_dark_theme(app):
    # Configurar paleta de colores oscuros
    palette = QPalette()
    palette.setColor(QPalette.Window, QColor(53, 53, 53))
    palette.setColor(QPalette.WindowText, Qt.white)
    palette.setColor(QPalette.Base, QColor(25, 25, 25))
    palette.setColor(QPalette.AlternateBase, QColor(53, 53, 53))
    palette.setColor(QPalette.ToolTipBase, Qt.white)
    palette.setColor(QPalette.ToolTipText, Qt.white)
    palette.setColor(QPalette.Text, Qt.white)
    palette.setColor(QPalette.Button, QColor(53, 53, 53))
    palette.setColor(QPalette.ButtonText, Qt.white)
    palette.setColor(QPalette.BrightText, Qt.red)
    palette.setColor(QPalette.Link, QColor(42, 130, 218))
    palette.setColor(QPalette.Highlight, QColor(42, 130, 218))
    palette.setColor(QPalette.HighlightedText, Qt.black)
    
    app.setPalette(palette)
    
    # Estilo para QMessageBox
    app.setStyleSheet("""
        QMessageBox {
            background-color: #333333;
        }
        QMessageBox QLabel {
            color: white;
        }
        QMessageBox QPushButton {
            background-color: #2c3e50;
            color: white;
            border: none;
            padding: 5px 15px;
            border-radius: 3px;
        }
        QMessageBox QPushButton:hover {
            background-color: #34495e;
        }
    """)

def main():
    app = QApplication(sys.argv)
    
    if platform.system() == "Windows":
        app.setStyle("Fusion")
    
    set_dark_theme(app)
    
    main_window = MainWindow()
    main_window.show()
    
    sys.exit(app.exec_())

if __name__ == "__main__":
    main()