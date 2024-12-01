// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB | CASAN Promo Center',
    description: 'El Acer Chromebook 314 combina rendimiento, ligereza y eficiencia, siendo la herramienta ideal para estudiantes, profesionales y usuarios casuales. Con su pantalla HD de 14 pulgadas (1280 x 720 píxeles), ofrece una experiencia visual clara y cómoda para tareas diarias, videollamadas o streaming. Está equipado con un procesador Intel Celeron N4500 de doble núcleo y 4 GB de RAM LPDDR4X, garantizando un desempeño fluido en multitareas y navegación. Su almacenamiento SSD de 64 GB permite un inicio rápido del sistema y espacio suficiente para tus archivos esenciales. Con un diseño compacto y un peso de solo 1,55 kg, este portátil es perfecto para llevar a todas partes. Además, gracias a su batería con hasta 10 horas de autonomía y ChromeOS como sistema operativo, disfrutarás de una experiencia intuitiva, segura y optimizada para aplicaciones y servicios en la nube. | CASAN Promo Center',
    keywords: 'portátil Acer Chromebook 314, portátil 14 pulgadas HD, Chromebook con ChromeOS, portátil ligero y compacto, portátil SSD 64 GB, portátil para estudiantes, portátil con batería de 10 horas, portátil Intel Celeron, mejor portátil para trabajo y estudio, portátil eficiente y moderno',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB | CASAN Promo Center',
        description: 'El Acer Chromebook 314 combina rendimiento, ligereza y eficiencia, siendo la herramienta ideal para estudiantes, profesionales y usuarios casuales. Con su pantalla HD de 14 pulgadas (1280 x 720 píxeles), ofrece una experiencia visual clara y cómoda para tareas diarias, videollamadas o streaming. Está equipado con un procesador Intel Celeron N4500 de doble núcleo y 4 GB de RAM LPDDR4X, garantizando un desempeño fluido en multitareas y navegación. Su almacenamiento SSD de 64 GB permite un inicio rápido del sistema y espacio suficiente para tus archivos esenciales. Con un diseño compacto y un peso de solo 1,55 kg, este portátil es perfecto para llevar a todas partes. Además, gracias a su batería con hasta 10 horas de autonomía y ChromeOS como sistema operativo, disfrutarás de una experiencia intuitiva, segura y optimizada para aplicaciones y servicios en la nube. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_02,
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
        title: 'Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB | CASAN Promo Center',
        description: 'El Acer Chromebook 314 combina rendimiento, ligereza y eficiencia, siendo la herramienta ideal para estudiantes, profesionales y usuarios casuales. Con su pantalla HD de 14 pulgadas (1280 x 720 píxeles), ofrece una experiencia visual clara y cómoda para tareas diarias, videollamadas o streaming. Está equipado con un procesador Intel Celeron N4500 de doble núcleo y 4 GB de RAM LPDDR4X, garantizando un desempeño fluido en multitareas y navegación. Su almacenamiento SSD de 64 GB permite un inicio rápido del sistema y espacio suficiente para tus archivos esenciales. Con un diseño compacto y un peso de solo 1,55 kg, este portátil es perfecto para llevar a todas partes. Además, gracias a su batería con hasta 10 horas de autonomía y ChromeOS como sistema operativo, disfrutarás de una experiencia intuitiva, segura y optimizada para aplicaciones y servicios en la nube. | CASAN Promo Center',
        image: Data.menu_icon_02
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
