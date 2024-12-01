// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Samsung Galaxy Tab A7 Lite con pantalla de 8,7 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
    description: 'La Samsung Galaxy Tab A7 Lite es la opción ideal para quienes buscan una tablet compacta, ligera y con un rendimiento confiable. Con un diseño elegante en color gris y un peso de solo 366 gramos, esta tablet es perfecta para llevar a cualquier lugar y disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos. Su pantalla LCD de 8,7 Pulgadas con resolución de 1920x1080 píxeles ofrece imágenes nítidas y vibrantes. Equipado con 4 GB de RAM y 64 GB de almacenamiento interno, este dispositivo garantiza fluidez en multitareas y espacio para todos tus archivos, ampliable mediante tarjeta microSD. La conectividad Wi-Fi y Bluetooth 5.0 aseguran que siempre estés conectado, mientras que sus cámaras de 8 MP y 2 MP son ideales para fotos, vídeos y videollamadas. Con altavoces estéreo integrados y Android como sistema operativo, la Tab A7 Lite ofrece una experiencia completa y accesible para el día a día. | CASAN Promo Center',
    keywords: 'Samsung Galaxy Tab A7 Lite, tablet 8,7 pulgadas, tablet compacta y ligera, tablet con 64 GB almacenamiento, tablet con Bluetooth 5.0, tablet Wi-Fi, tablet para multimedia, tablet Android, tablet con cámara 8 MP, tablet con altavoces estéreo',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Samsung Galaxy Tab A7 Lite con pantalla de 8,7 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A7 Lite es la opción ideal para quienes buscan una tablet compacta, ligera y con un rendimiento confiable. Con un diseño elegante en color gris y un peso de solo 366 gramos, esta tablet es perfecta para llevar a cualquier lugar y disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos. Su pantalla LCD de 8,7 Pulgadas con resolución de 1920x1080 píxeles ofrece imágenes nítidas y vibrantes. Equipado con 4 GB de RAM y 64 GB de almacenamiento interno, este dispositivo garantiza fluidez en multitareas y espacio para todos tus archivos, ampliable mediante tarjeta microSD. La conectividad Wi-Fi y Bluetooth 5.0 aseguran que siempre estés conectado, mientras que sus cámaras de 8 MP y 2 MP son ideales para fotos, vídeos y videollamadas. Con altavoces estéreo integrados y Android como sistema operativo, la Tab A7 Lite ofrece una experiencia completa y accesible para el día a día. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_01,
                width: 1024,
                height: 1024,
                alt: 'CASAN Promo Center'
            }
        ],
        site_name: 'CASAN Promo Center'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@CASAN Promo Center',
        title: 'Samsung Galaxy Tab A7 Lite con pantalla de 8,7 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A7 Lite es la opción ideal para quienes buscan una tablet compacta, ligera y con un rendimiento confiable. Con un diseño elegante en color gris y un peso de solo 366 gramos, esta tablet es perfecta para llevar a cualquier lugar y disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos. Su pantalla LCD de 8,7 Pulgadas con resolución de 1920x1080 píxeles ofrece imágenes nítidas y vibrantes. Equipado con 4 GB de RAM y 64 GB de almacenamiento interno, este dispositivo garantiza fluidez en multitareas y espacio para todos tus archivos, ampliable mediante tarjeta microSD. La conectividad Wi-Fi y Bluetooth 5.0 aseguran que siempre estés conectado, mientras que sus cámaras de 8 MP y 2 MP son ideales para fotos, vídeos y videollamadas. Con altavoces estéreo integrados y Android como sistema operativo, la Tab A7 Lite ofrece una experiencia completa y accesible para el día a día. | CASAN Promo Center',
        image: Data.menu_icon_01
    },
    robots: 'index, follow',
    canonical: 'https://casanpromocenter.vercel.app'
}
export default function page() {
    return (
        <React.Fragment>
            <ProductPage />
        </React.Fragment>
    )
}
