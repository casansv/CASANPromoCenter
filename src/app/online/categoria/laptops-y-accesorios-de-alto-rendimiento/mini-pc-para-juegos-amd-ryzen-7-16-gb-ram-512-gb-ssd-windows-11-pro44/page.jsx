// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro | CASAN Promo Center',
    description: 'Disfruta de la máxima potencia en el menor espacio con la Mini PC para Juegos ACEMAGICIAN AM06PRO. Equipado con el procesador AMD Ryzen 7 4800U (8 núcleos/16 hilos, hasta 4.4 GHz), 16 GB de RAM DDR4 y un SSD de 512 GB, este equipo compacto es perfecto para gamers, creadores de contenido y usuarios multitarea. Compatible con salida 4K a 60 Hz en triple pantalla, ofrece una experiencia visual inmersiva y fluida. Su conectividad avanzada incluye WiFi 6 y Bluetooth 5.2, asegurando velocidades rápidas y estabilidad en todo momento. Además, viene con Windows 11 Pro preinstalado, listo para llevar tu productividad al siguiente nivel. | CASAN Promo Center',
    keywords: 'Mini PC para juegos, AMD Ryzen 7 4800U, PC compacta, Windows 11 Pro, mini computadora 16 GB RAM, SSD 512 GB, gráficos Radeon RX Vega 8, triple pantalla 4K, WiFi 6, Bluetooth 5.2, PC para gamers, estación de trabajo compacta, PC de alto rendimiento',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro | CASAN Promo Center',
        description: 'Disfruta de la máxima potencia en el menor espacio con la Mini PC para Juegos ACEMAGICIAN AM06PRO. Equipado con el procesador AMD Ryzen 7 4800U (8 núcleos/16 hilos, hasta 4.4 GHz), 16 GB de RAM DDR4 y un SSD de 512 GB, este equipo compacto es perfecto para gamers, creadores de contenido y usuarios multitarea. Compatible con salida 4K a 60 Hz en triple pantalla, ofrece una experiencia visual inmersiva y fluida. Su conectividad avanzada incluye WiFi 6 y Bluetooth 5.2, asegurando velocidades rápidas y estabilidad en todo momento. Además, viene con Windows 11 Pro preinstalado, listo para llevar tu productividad al siguiente nivel. | CASAN Promo Center',
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
        title: 'Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro | CASAN Promo Center',
        description: 'Disfruta de la máxima potencia en el menor espacio con la Mini PC para Juegos ACEMAGICIAN AM06PRO. Equipado con el procesador AMD Ryzen 7 4800U (8 núcleos/16 hilos, hasta 4.4 GHz), 16 GB de RAM DDR4 y un SSD de 512 GB, este equipo compacto es perfecto para gamers, creadores de contenido y usuarios multitarea. Compatible con salida 4K a 60 Hz en triple pantalla, ofrece una experiencia visual inmersiva y fluida. Su conectividad avanzada incluye WiFi 6 y Bluetooth 5.2, asegurando velocidades rápidas y estabilidad en todo momento. Además, viene con Windows 11 Pro preinstalado, listo para llevar tu productividad al siguiente nivel. | CASAN Promo Center',
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
