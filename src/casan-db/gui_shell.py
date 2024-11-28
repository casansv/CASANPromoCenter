# src\casan-db\gui_shell.py
import io
import sys
from contextlib import redirect_stdout

from PyQt5.QtGui import QIcon
from PyQt5.QtCore import QThread, pyqtSignal, Qt
from PyQt5.QtWidgets import (QApplication, QMainWindow, QPushButton, 
                           QVBoxLayout, QWidget, QTextEdit, QLabel,
                           QFrame, QHBoxLayout, QSizePolicy)

from mkrouter import reparar_rutas_dist
from mkrouter import preparar_plantillas_categorias, preparar_productos_en_categorias, preparar_productos_para_reportes





'''
>>> Creación de interfaz gráfica
'''
class CustomButton(QPushButton):
    def __init__(self, text, icon_path=None):
        super().__init__(text)
        if icon_path:
            self.setIcon(QIcon(icon_path))
        self.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        self.setMinimumHeight(50)
        self.setCursor(Qt.PointingHandCursor)

class WorkerThread(QThread):
    finished = pyqtSignal()
    output = pyqtSignal(str)

    def __init__(self, function):
        super().__init__()
        self.function = function

    def run(self):
        output_buffer = io.StringIO()
        with redirect_stdout(output_buffer):
            try:
                self.function()
            except Exception as e:
                print(f"Error: {str(e)}")
        self.output.emit(output_buffer.getvalue())
        self.finished.emit()

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Router Manager")
        self.setMinimumSize(800, 600)
        self.setStyleSheet("""
            QMainWindow {
                background-color: #1a1a1a;
            }
            QWidget {
                background-color: #1a1a1a;
                color: #ffffff;
            }
        """)

        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        main_layout = QVBoxLayout(main_widget)
        main_layout.setSpacing(20)
        main_layout.setContentsMargins(20, 20, 20, 20)

        # Header simplificado sin subtítulo
        header = QFrame()
        header_layout = QVBoxLayout(header)
        header.setStyleSheet("""
            QFrame {
                background-color: #252525;
                border-radius: 15px;
                padding: 10px;
            }
        """)
        header.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Maximum)

        title = QLabel("Router Manager")
        title.setStyleSheet("""
            QLabel {
                color: #ffffff;
                font-weight: bold;
                qproperty-alignment: AlignCenter;
            }
        """)
        title.setObjectName("title")  # Establece un nombre para el QLabel para buscarlo luego
        header_layout.addWidget(title)
        main_layout.addWidget(header)

        # Consola
        console_container = QFrame()
        console_container.setStyleSheet("""
            QFrame {
                background-color: #252525;
                border-radius: 15px;
                padding: 15px;
            }
        """)
        console_container.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        console_layout = QVBoxLayout(console_container)

        console_header = QLabel("Consola")
        console_header.setStyleSheet("""
            QLabel {
                color: #ffffff;
                font-weight: bold;
                margin-bottom: 5px;
            }
        """)
        console_layout.addWidget(console_header)

        self.console = QTextEdit()
        self.console.setReadOnly(True)
        self.console.setStyleSheet("""
            QTextEdit {
                background-color: #1a1a1a;
                color: #00ff00;
                font-family: 'Consolas', 'Courier New', monospace;
                padding: 10px;
                border: none;
                border-radius: 8px;
                selection-background-color: #404040;
                selection-color: #ffffff;
                line-height: 1.4;
            }
            QScrollBar:vertical {
                background-color: #1a1a1a;
                width: 12px;
                margin: 0px;
            }
            QScrollBar::handle:vertical {
                background-color: #404040;
                border-radius: 6px;
                min-height: 20px;
            }
            QScrollBar::handle:vertical:hover {
                background-color: #4d4d4d;
            }
            QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {
                height: 0px;
            }
        """)
        console_layout.addWidget(self.console)
        main_layout.addWidget(console_container, stretch=3)

        # Contenedor de botones
        button_container = QFrame()
        button_container.setStyleSheet("""
            QFrame {
                background-color: #252525;
                border-radius: 15px;
                padding: 15px;
            }
        """)
        button_container.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Maximum)
        button_layout = QHBoxLayout(button_container)
        button_layout.setSpacing(15)

        for button_text, icon_path in [
            ("Añadir productos al sitio", None),
            ("Reparar rutas en DIST", None)
        ]:
            button_frame = QFrame()
            button_frame.setStyleSheet("""
                QFrame {
                    background-color: #2d2d2d;
                    border-radius: 10px;
                    padding: 10px;
                }
                QFrame:hover {
                    background-color: #333333;
                }
            """)
            button_frame.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Maximum)
            button_frame_layout = QVBoxLayout(button_frame)
            
            button = CustomButton(button_text, icon_path)
            button.setStyleSheet("""
                QPushButton {
                    background-color: #0d6efd;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 10px;
                    font-weight: bold;
                    min-height: 40px;
                }
                QPushButton:hover {
                    background-color: #0b5ed7;
                }
                QPushButton:pressed {
                    background-color: #0a58ca;
                }
                QPushButton:disabled {
                    background-color: #404040;
                    color: #666666;
                }
            """)
            
            if button_text == "Añadir productos al sitio":
                self.add_products_btn = button
                button.clicked.connect(self.add_products)
                description = QLabel("Agrega nuevos productos y actualiza las categorías existentes")
            else:
                self.repair_routes_btn = button
                button.clicked.connect(self.repair_routes)
                description = QLabel("Corrige y optimiza las rutas en el directorio DIST")
            
            description.setStyleSheet("""
                QLabel {
                    color: #888888;
                    qproperty-alignment: AlignCenter;
                    qproperty-wordWrap: true;
                }
            """)
            description.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Maximum)
            
            button_frame_layout.addWidget(button)
            button_frame_layout.addWidget(description)
            button_layout.addWidget(button_frame)

        main_layout.addWidget(button_container)

        self.worker = None

    def resizeEvent(self, event):
        """Manejar el cambio de tamaño de la ventana"""
        super().resizeEvent(event)
        window_width = self.width()
        
        # Ajuste de tamaños de fuente
        title_font_size = max(18, min(32, window_width // 35))
        console_font_size = max(10, min(16, window_width // 80))
        button_font_size = max(10, min(14, window_width // 60))
        description_font_size = max(8, min(12, window_width // 90))
        
        # Ajustar el título
        title_label = self.findChild(QLabel, "title")
        if title_label:
            title_label.setStyleSheet(
                f"color: #ffffff; font-weight: bold; font-size: {title_font_size}px;"
            )
        
        # Ajustar consola
        self.console.setStyleSheet(
            self.console.styleSheet() + f"\nfont-size: {console_font_size}px;"
        )
        
        # Ajustar botones y descripciones
        for button in self.findChildren(QPushButton):
            button.setStyleSheet(
                button.styleSheet() + f"\nfont-size: {button_font_size}px;"
            )
        
        for label in self.findChildren(QLabel):
            if label.text() not in ["Router Manager", "Consola"]:
                label.setStyleSheet(
                    f"color: #888888; font-size: {description_font_size}px;"
                )

    def add_products(self):
        self.disable_buttons()
        self.console.clear()
        self.log_message("🚀 Iniciando proceso de añadir productos...\n")
        
        self.worker = WorkerThread(self.run_add_products)
        self.worker.output.connect(self.log_message)
        self.worker.finished.connect(self.on_process_finished)
        self.worker.start()

    def repair_routes(self):
        self.disable_buttons()
        self.console.clear()
        self.log_message("🔧 Iniciando reparación de rutas...\n")
        
        self.worker = WorkerThread(reparar_rutas_dist)
        self.worker.output.connect(self.log_message)
        self.worker.finished.connect(self.on_process_finished)
        self.worker.start()

    def run_add_products(self):
        preparar_plantillas_categorias()
        preparar_productos_en_categorias()
        preparar_productos_para_reportes()

    def log_message(self, message):
        self.console.append(message)
        self.console.verticalScrollBar().setValue(
            self.console.verticalScrollBar().maximum()
        )

    def disable_buttons(self):
        self.add_products_btn.setEnabled(False)
        self.repair_routes_btn.setEnabled(False)

    def enable_buttons(self):
        self.add_products_btn.setEnabled(True)
        self.repair_routes_btn.setEnabled(True)

    def on_process_finished(self):
        self.enable_buttons()
        self.log_message("\n✅ Proceso completado exitosamente.\n")

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())
