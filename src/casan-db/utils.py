# src\casan-db\utils.py
import os
import platform
import colorama





'''
>>> Funciones de utilitarias
'''
def verificar_existencia_rutas():
    storage_path = os.path.join(os.getcwd(), 'DB')
    if not os.path.exists(storage_path):
        os.makedirs(storage_path)
    return storage_path


def limpiar_consola():
    try:
        if platform.system() == 'Windows':
            os.system('cls')
        else:
            os.system('clear')
    except Exception as error_log:
        print("[ Ocurrió un error durante la limpieza en consola ]")
        print(error_log)





'''
>>> Definición de clases utilitarias
'''
class Colores:
    def color_blanco(self):
        return colorama.Fore.LIGHTWHITE_EX + colorama.Style.BRIGHT
    
    def color_amarillo(self):
        return colorama.Fore.LIGHTYELLOW_EX + colorama.Style.BRIGHT
    
    def color_rojo(self):
        return colorama.Fore.LIGHTBLUE_EX + colorama.Style.BRIGHT
    
    def color_verde(self):
        return colorama.Fore.LIGHTGREEN_EX + colorama.Style.BRIGHT
    
    def color_cyan(self):
        return colorama.Fore.LIGHTCYAN_EX + colorama.Style.BRIGHT
    
    def color_reset(self):
        return colorama.Fore.RESET + colorama.Style.RESET_ALL





'''
>>> Logotipos ASCII
'''
def logotipo_01(version: str='1.0'):
    base =f"""
 ██████╗ █████╗ ███████╗ █████╗ ███╗   ██╗      ██████╗ ██████╗ 
██╔════╝██╔══██╗██╔════╝██╔══██╗████╗  ██║      ██╔══██╗██╔══██╗
██║     ███████║███████╗███████║██╔██╗ ██║█████╗██║  ██║██████╔╝
██║     ██╔══██║╚════██║██╔══██║██║╚██╗██║╚════╝██║  ██║██╔══██╗
╚██████╗██║  ██║███████║██║  ██║██║ ╚████║      ██████╔╝██████╔╝
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝      ╚═════╝ ╚═════╝ 
➤ Versión: v{version}
----------------------------------------------------------------
"""
    print(base)