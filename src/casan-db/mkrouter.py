# src\casan-db\mkrouter.py
import os
import re
import json
import shutil
import unicodedata
import pandas as pd





'''
>>> Definición de constantes
'''
# Cargar las categorías y constantes desde categorias.json
json_r = os.path.join('categorias.json')
with open(json_r, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Cargar las categorías y las constantes desde el JSON
categorias_dropshipping = list(data["categorias"])
constantes_categorias = data["constantes"]





'''
>>> Funciones para rutas básicas
'''
def eliminar_acentos_y_emoji(categoria):
    # Normalizar el texto a la forma 'NFD' para separar los acentos
    nfkd_form = unicodedata.normalize('NFD', categoria)
    
    # Eliminar caracteres de acento
    categoria_sin_acentos = u"".join([c for c in nfkd_form if not unicodedata.combining(c)])
    
    # Eliminar emojis y caracteres especiales (mantener solo letras, números y espacios)
    categoria_limpia = re.sub(r'[^\w\s]', '', categoria_sin_acentos)
    
    # Convertir a minúsculas y reemplazar espacios por guiones
    categoria_limpia = categoria_limpia.lower().replace(" ", "-")
    
    # Eliminar posibles guiones duplicados (causados por múltiples espacios)
    categoria_limpia = re.sub(r'-+', '-', categoria_limpia).rstrip('-')
    return categoria_limpia


def verificar_rutas_categorias():
    base_route = os.path.join('..', 'app', 'online', 'categoria')
    
    print("[ Creación de rutas a categorías ]")
    rutas_categorias = []
    for c in categorias_dropshipping:
        nombre_categoria_limpia = eliminar_acentos_y_emoji(c)
        
        ruta_categoria = os.path.join(base_route, nombre_categoria_limpia)
        
        if not os.path.exists(ruta_categoria):
            os.makedirs(ruta_categoria)
            print(f" - Carpeta creada: {ruta_categoria}")
        else:
            print(f" - La carpeta ya existe: {ruta_categoria}")
        rutas_categorias.append(ruta_categoria)
    return rutas_categorias





'''
>>> Funciones para automatización de contenido
'''
def preparar_productos_en_categorias():
    # Leer la base de datos de productos
    db_route = os.path.join('DB', 'PRODUCTOS.csv')
    productos_df = pd.read_csv(db_route)
    
    # Ruta de las plantillas de productos en BACKSTATE
    plantilla_backstate_page = os.path.join('..', 'BACKSTATE', 'Online', 'Product', 'page.jsx')
    plantilla_backstate_product = os.path.join('..', 'BACKSTATE', 'Online', 'Product', 'Product.jsx')
    
    # Iterar sobre cada producto en la base de datos
    for idx, producto in productos_df.iterrows():
        categoria = producto['CATEGORY']
        nombre_categoria_limpia = eliminar_acentos_y_emoji(categoria)

        # Generar el nombre de la carpeta del producto: {NAME}-{ID}
        nombre_producto_limpio = f"{producto['NAME']}-{producto['ID']}".lower().replace(" ", "-")
        ruta_producto = os.path.join('..', 'app', 'online', 'categoria', nombre_categoria_limpia, nombre_producto_limpio)

        # Crear la carpeta si no existe
        if not os.path.exists(ruta_producto):
            os.makedirs(ruta_producto)
            print(f" - Carpeta creada: {ruta_producto}")
        else:
            print(f" - La carpeta ya existe: {ruta_producto}")

        # Copiar y sobrescribir el archivo Product.jsx
        archivo_product_destino = os.path.join(ruta_producto, 'Product.jsx')
        shutil.copyfile(plantilla_backstate_product, archivo_product_destino)
        print(f"Archivo Product.jsx copiado/actualizado para el producto: {producto['NAME']}")

        # Crear el bloque del producto principal (PRODUCTO_BASE)
        producto_base = {
            'id': producto['ID'],
            'name': producto['NAME'],
            'category': producto['CATEGORY'],
            'price': producto['PRICE'],
            'description': producto['DESCRIPTION'],
            'review': producto['RESEÑA'],
            'features': eval(producto['FEATURES']),
            'images': eval(producto['IMAGES']),
            'link': producto['BUY_LINK']
        }

        # Seleccionar productos sugeridos aleatoriamente de la misma categoría excluyendo el producto principal
        productos_categoria = productos_df[productos_df['CATEGORY'] == categoria]
        productos_sugeridos = productos_categoria[productos_categoria['ID'] != producto['ID']]

        # Limitar el número de productos sugeridos a 4 como máximo
        num_sugeridos = min(4, len(productos_sugeridos))
        productos_sugeridos = productos_sugeridos.sample(num_sugeridos).to_dict('records')

        # Crear manualmente el bloque de productos sugeridos
        productos_sugeridos_str = ""
        for p in productos_sugeridos:
            # Limitar la descripción a las primeras 15 palabras y añadir '...'
            descripcion_corta = ' '.join(p['DESCRIPTION'].split()[:15]) + '...'
            
            # Construir la ruta hacia el producto en NextJS
            enlace_producto = f"/online/categoria/{nombre_categoria_limpia}/{eliminar_acentos_y_emoji(p['NAME'])}-{p['ID']}"

            productos_sugeridos_str += (
                "    {\n"
                f"        \"id\": {p['ID']},\n"
                f"        \"name\": \"{p['NAME']}\",\n"
                f"        \"price\": {p['PRICE']},\n"
                f"        \"description\": \"{descripcion_corta}\",\n"
                f"        \"image\": \"{eval(p['IMAGES'])[0]}\",\n"  # Primera imagen
                f"        \"link\": \"{enlace_producto}\"\n"
                "    },\n"
            )
        productos_sugeridos_str = productos_sugeridos_str.rstrip(',\n')  # Eliminar la última coma

        # Modificar el contenido de Product.jsx
        with open(archivo_product_destino, 'r', encoding='utf-8') as file:
            contenido_product = file.read()

        contenido_product_modificado = (contenido_product
                                        .replace('//import staticOrder from "../../../../static_mode.json";', 'import staticOrder from "../../../../static_mode.json";')
                                        .replace('"/* {PRODUCTO_BASE} */"', json.dumps(producto_base, indent=4, ensure_ascii=False))
                                        .replace('/* {PRODUCTO_SUGERIDOS} */', productos_sugeridos_str)
                                        .replace('{PRODUCTO_ENLACE}', producto['BUY_LINK']))

        # Escribir los cambios en Product.jsx
        with open(archivo_product_destino, 'w', encoding='utf-8') as file:
            file.write(contenido_product_modificado)

        print(f"Archivo Product.jsx modificado para el producto: {producto['NAME']}")

        # Copiar y sobrescribir el archivo page.jsx
        archivo_page_destino = os.path.join(ruta_producto, 'page.jsx')
        shutil.copyfile(plantilla_backstate_page, archivo_page_destino)
        print(f"Archivo page.jsx copiado/actualizado para el producto: {producto['NAME']}")

        # Obtener el índice de la categoría para generar el icono
        if categoria in categorias_dropshipping:
            categoria_index = categorias_dropshipping.index(categoria) + 1
            metadata_icon = f"Data.menu_icon_{categoria_index:02d}"
        else:
            metadata_icon = "Data.menu_icon_default"

        # Modificar los placeholders en page.jsx
        with open(archivo_page_destino, 'r', encoding='utf-8') as file:
            contenido_page = file.read()

        contenido_page_modificado = (contenido_page
                                     .replace('//import Data from "../../../../sconstants.json";', 'import Data from "../../../../sconstants.json";')
                                     .replace('{METADATA_TITULO}', producto['NAME'])
                                     .replace('{METADATA_DESCRIPCION}', producto['DESCRIPTION'])
                                     .replace('{METADATA_KEYWORDS}', producto['META_KEYWORDS'])
                                     .replace('{METADATA_ICON_MENU}', metadata_icon))

        # Escribir los cambios en page.jsx
        with open(archivo_page_destino, 'w', encoding='utf-8') as file:
            file.write(contenido_page_modificado)

        print(f"Archivo page.jsx modificado para el producto: {producto['NAME']}")


def preparar_productos_para_reportes():
    # Leer la base de datos de productos
    db_route = os.path.join('DB', 'PRODUCTOS.csv')
    productos_df = pd.read_csv(db_route)
    
    # Rutas de origen y destino
    componente_backstate = os.path.join('..', 'BACKSTATE', 'Online', 'Report', 'ListProduct.jsx')
    ruta_destino = os.path.join('..', 'app', 'reportes', 'Components')
    
    # Crear el directorio de destino si no existe
    if not os.path.exists(ruta_destino):
        os.makedirs(ruta_destino)
        print(f"Directorio creado: {ruta_destino}")
    
    # Ruta completa del archivo de destino
    archivo_destino = os.path.join(ruta_destino, 'ListProduct.jsx')
    
    # Copiar el archivo plantilla a la nueva ubicación
    shutil.copyfile(componente_backstate, archivo_destino)
    print(f"Archivo ListProduct.jsx copiado a: {archivo_destino}")
    
    # Leer el contenido del archivo copiado
    with open(archivo_destino, 'r', encoding='utf-8') as file:
        contenido = file.read()
    
    # Generar el string de productos formateados
    productos_formateados = []
    
    for _, producto in productos_df.iterrows():
        # Tomar la primera imagen del array de imágenes
        primera_imagen = eval(producto['IMAGES'])[0]
        
        # Determinar el enlace de reporte basado en la fuente del producto
        enlace_reporte = "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        if "shein" in producto['BUY_LINK'].lower():
            enlace_reporte = "https://es.shein.com/Return-Policy-a-281.html"
        
        # Crear el objeto de producto
        producto_formato = (
            "        {\n"
            f"            Nombre: \"{producto['NAME']}\",\n"
            f"            Imagen: \"{primera_imagen}\",\n"
            f"            Enlace: \"{enlace_reporte}\"\n"
            "        }"
        )
        productos_formateados.append(producto_formato)
    
    # Unir todos los productos con comas y saltos de línea
    productos_string = ",\n".join(productos_formateados)
    
    # Reemplazar el marcador en el archivo
    contenido_modificado = contenido.replace(
        "/* {PRODUCTOS_REPORTES} */",
        productos_string
    )
    
    # Escribir los cambios en el archivo de destino
    with open(archivo_destino, 'w', encoding='utf-8') as file:
        file.write(contenido_modificado)
    
    print("Archivo ListProduct.jsx actualizado con todos los productos para reportes")


def preparar_plantillas_categorias():
    # Leer la base de datos de productos
    db_route = os.path.join('DB', 'PRODUCTOS.csv')
    productos_df = pd.read_csv(db_route)

    # Verificar y crear rutas de categorías
    carpetas_categorias = verificar_rutas_categorias()

    # Ruta de las plantillas en BACKSTATE
    plantilla_backstate_page = os.path.join('..', 'BACKSTATE', 'Online', 'Hub', 'page.jsx')
    plantilla_backstate_productSearch = os.path.join('..', 'BACKSTATE', 'Online', 'Hub', 'ProductSearch.jsx')

    # Para cada categoría, copiar las plantillas y personalizarlas
    for idx, producto in productos_df.iterrows():
        categoria = producto['CATEGORY']
        nombre_categoria_limpia = eliminar_acentos_y_emoji(categoria)

        # Obtener los datos específicos de la categoría desde el JSON
        if categoria in constantes_categorias:
            categoria_idx = str(categorias_dropshipping.index(categoria) + 1).zfill(2)
            metadata_icon = f"Data.menu_icon_{categoria_idx}"
            gif_link = constantes_categorias[categoria]["GIF_link"]
            title = constantes_categorias[categoria]["Title"]
            subtitle = constantes_categorias[categoria]["Subtitle"]
            keywords = constantes_categorias[categoria]["KEYWORDS"]
        else:
            print(f"Advertencia: No se encontró información para la categoría '{categoria}'")
            metadata_icon = "Data.menu_icon_default"
            gif_link = ""
            title = producto['NAME']
            subtitle = producto['DESCRIPTION']
            keywords = ""

        # Ruta destino para los archivos de esta categoría
        ruta_categoria = os.path.join('..', 'app', 'online', 'categoria', nombre_categoria_limpia)
        archivo_page_destino = os.path.join(ruta_categoria, 'page.jsx')
        archivo_productSearch_destino = os.path.join(ruta_categoria, 'ProductSearch.jsx')

        # Copiar y sobrescribir los archivos
        shutil.copyfile(plantilla_backstate_page, archivo_page_destino)
        print(f"Archivo page.jsx copiado/actualizado para la categoría: {categoria}")

        shutil.copyfile(plantilla_backstate_productSearch, archivo_productSearch_destino)
        print(f"Archivo ProductSearch.jsx copiado/actualizado para la categoría: {categoria}")

        # Modificar page.jsx
        with open(archivo_page_destino, 'r', encoding='utf-8') as file:
            contenido_page = file.read()

        contenido_page_modificado = (contenido_page
                                     .replace('//import Data from "../../../sconstants.json";', 'import Data from "../../../sconstants.json";')
                                     .replace('{METADATA_TITULO}', title)
                                     .replace('{METADATA_DESCRIPCION}', subtitle)
                                     .replace('{METADATA_KEYWORDS}', keywords)
                                     .replace('{METADATA_ICON_MENU}', metadata_icon))

        with open(archivo_page_destino, 'w', encoding='utf-8') as file:
            file.write(contenido_page_modificado)
        
        print(f"Archivo page.jsx modificado para la categoría: {categoria}")

        # Modificar ProductSearch.jsx
        with open(archivo_productSearch_destino, 'r', encoding='utf-8') as file:
            contenido_productSearch = file.read()

        # Filtrar productos de la categoría actual
        productos_categoria = productos_df[productos_df['CATEGORY'] == categoria]

        # Formatear productos
        productos_formateados = []
        for _, prod in productos_categoria.iterrows():
            # Generar la ruta del producto
            nombre_producto_limpio = f"{eliminar_acentos_y_emoji(prod['NAME'])}-{prod['ID']}".lower().replace(" ", "-")
            ruta_producto = f"/online/categoria/{nombre_categoria_limpia}/{nombre_producto_limpio}"
            
            producto_json = {
                "Nombre": prod['NAME'],
                "Imagen": eval(prod['IMAGES'])[0],
                "Descripcion": prod['DESCRIPTION'],
                "Precio": prod['PRICE'],
                "PLink": ruta_producto  # Aquí usamos la ruta dinámica generada
            }
            productos_formateados.append(producto_json)

        productos_json_str = json.dumps(productos_formateados, indent=4, ensure_ascii=False)

        contenido_productSearch_modificado = (contenido_productSearch
                                              .replace('//import staticOrder from "../../../static_mode.json";', 'import staticOrder from "../../../static_mode.json";')
                                              .replace('/* {PRODUCTOS} */', productos_json_str.strip("[]"))
                                              .replace('{GIF_LINK}', gif_link)
                                              .replace('{TITULO_CATEGORIA}', title)
                                              .replace('{SUBTITULO_CATEGORIA}', subtitle))

        with open(archivo_productSearch_destino, 'w', encoding='utf-8') as file:
            file.write(contenido_productSearch_modificado)
        
        print(f"Archivo ProductSearch.jsx modificado para la categoría: {categoria}")




'''
>>> Funciones para manipulación en DIST
'''
def reparar_rutas_dist():
    dist_r = os.path.join('..', '..', 'dist')  # Ruta a la carpeta 'dist'

    # Recorre la carpeta y subcarpetas de 'dist'
    for root, _, files in os.walk(dist_r):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            
            # Abre cada archivo en modo lectura y escritura
            with open(file_path, 'r+', encoding='utf-8') as file:
                content = file.read()  # Lee el contenido completo del archivo
                
                # Se corrige la ruta
                new_content = content.replace('/_next', './_next')
                
                # Solo reescribe el archivo si hubo reemplazos
                if new_content != content:
                    file.seek(0)  # Vuelve al inicio del archivo
                    file.write(new_content)  # Escribe el contenido modificado
                    file.truncate()  # Borra el contenido sobrante solo si es necesario
                    
                    # Imprime el mensaje de depuración
                    print(f" - Se corrigió la ruta en el fichero '{file_name}'")