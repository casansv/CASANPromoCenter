// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'PC de Escritorio Dell para Juegos RGB con Intel i5 y NVIDIA GT 1030 | CASAN Promo Center',
    description: 'Experimenta el poder y estilo con la PC de Escritorio Dell para Juegos RGB, diseñada para jugadores apasionados y multitareas exigentes. Equipada con un procesador Intel Quad Core i5-6500 de hasta 3.6GHz, 32GB de RAM DDR4 y un SSD de 1TB, esta máquina ofrece un rendimiento excepcional para videojuegos y aplicaciones pesadas. La tarjeta gráfica NVIDIA GeForce GT 1030 de 2GB proporciona gráficos impresionantes, mientras que la carcasa y los periféricos RGB agregan un toque visual atractivo a tu setup. Con conectividad avanzada, incluyendo WiFi 600M y Bluetooth, esta PC está lista para cumplir con todas tus necesidades. | CASAN Promo Center',
    keywords: 'PC de escritorio Dell gaming, computadora para juegos RGB, Intel i5 6500, NVIDIA GT 1030, PC gaming con SSD 1TB, RAM 32GB DDR4, PC gamer renovada, WiFi 600M y Bluetooth, PC para juegos y multitareas, computadora con periféricos RGB',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'PC de Escritorio Dell para Juegos RGB con Intel i5 y NVIDIA GT 1030 | CASAN Promo Center',
        description: 'Experimenta el poder y estilo con la PC de Escritorio Dell para Juegos RGB, diseñada para jugadores apasionados y multitareas exigentes. Equipada con un procesador Intel Quad Core i5-6500 de hasta 3.6GHz, 32GB de RAM DDR4 y un SSD de 1TB, esta máquina ofrece un rendimiento excepcional para videojuegos y aplicaciones pesadas. La tarjeta gráfica NVIDIA GeForce GT 1030 de 2GB proporciona gráficos impresionantes, mientras que la carcasa y los periféricos RGB agregan un toque visual atractivo a tu setup. Con conectividad avanzada, incluyendo WiFi 600M y Bluetooth, esta PC está lista para cumplir con todas tus necesidades. | CASAN Promo Center',
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
        title: 'PC de Escritorio Dell para Juegos RGB con Intel i5 y NVIDIA GT 1030 | CASAN Promo Center',
        description: 'Experimenta el poder y estilo con la PC de Escritorio Dell para Juegos RGB, diseñada para jugadores apasionados y multitareas exigentes. Equipada con un procesador Intel Quad Core i5-6500 de hasta 3.6GHz, 32GB de RAM DDR4 y un SSD de 1TB, esta máquina ofrece un rendimiento excepcional para videojuegos y aplicaciones pesadas. La tarjeta gráfica NVIDIA GeForce GT 1030 de 2GB proporciona gráficos impresionantes, mientras que la carcasa y los periféricos RGB agregan un toque visual atractivo a tu setup. Con conectividad avanzada, incluyendo WiFi 600M y Bluetooth, esta PC está lista para cumplir con todas tus necesidades. | CASAN Promo Center',
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
