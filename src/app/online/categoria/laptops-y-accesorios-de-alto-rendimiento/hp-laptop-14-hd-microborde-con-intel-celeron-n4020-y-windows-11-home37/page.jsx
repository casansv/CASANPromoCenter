// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home | CASAN Promo Center',
    description: 'La HP Laptop 14 es la combinación perfecta de portabilidad y rendimiento para el día a día. Su diseño delgado y ligero, con pantalla HD de microborde de 14 pulgadas, maximiza tu espacio visual y facilita llevarla a cualquier lugar. Equipada con un procesador Intel Celeron N4020 de doble núcleo, 4GB de RAM y 64GB de almacenamiento eMMC, esta laptop ofrece un rendimiento confiable para tareas diarias, estudios y entretenimiento. Con gráficos Intel UHD compatibles con 4K, disfruta de tus series, películas y juegos favoritos con gran calidad visual. Además, incluye un año de Microsoft 365 para que trabajes y estudies sin interrupciones. | CASAN Promo Center',
    keywords: 'HP Laptop 14, computadora portátil económica, Intel Celeron N4020, laptop para estudiantes, Windows 11 Home, laptop delgada y ligera, RAM 4GB, almacenamiento 64GB, pantalla HD microborde, laptop compatible con 4K',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home | CASAN Promo Center',
        description: 'La HP Laptop 14 es la combinación perfecta de portabilidad y rendimiento para el día a día. Su diseño delgado y ligero, con pantalla HD de microborde de 14 pulgadas, maximiza tu espacio visual y facilita llevarla a cualquier lugar. Equipada con un procesador Intel Celeron N4020 de doble núcleo, 4GB de RAM y 64GB de almacenamiento eMMC, esta laptop ofrece un rendimiento confiable para tareas diarias, estudios y entretenimiento. Con gráficos Intel UHD compatibles con 4K, disfruta de tus series, películas y juegos favoritos con gran calidad visual. Además, incluye un año de Microsoft 365 para que trabajes y estudies sin interrupciones. | CASAN Promo Center',
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
        title: 'HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home | CASAN Promo Center',
        description: 'La HP Laptop 14 es la combinación perfecta de portabilidad y rendimiento para el día a día. Su diseño delgado y ligero, con pantalla HD de microborde de 14 pulgadas, maximiza tu espacio visual y facilita llevarla a cualquier lugar. Equipada con un procesador Intel Celeron N4020 de doble núcleo, 4GB de RAM y 64GB de almacenamiento eMMC, esta laptop ofrece un rendimiento confiable para tareas diarias, estudios y entretenimiento. Con gráficos Intel UHD compatibles con 4K, disfruta de tus series, películas y juegos favoritos con gran calidad visual. Además, incluye un año de Microsoft 365 para que trabajes y estudies sin interrupciones. | CASAN Promo Center',
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
