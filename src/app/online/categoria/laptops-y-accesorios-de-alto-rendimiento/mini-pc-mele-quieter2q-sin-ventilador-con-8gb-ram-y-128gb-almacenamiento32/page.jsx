// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mini PC MeLE Quieter2Q Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
    description: 'Maximiza tu productividad con el Mini PC MeLE Quieter2Q, diseñado para ofrecer un rendimiento silencioso y eficiente en un tamaño compacto. Equipado con el procesador Intel Celeron J4125, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este mini ordenador es ideal para uso personal, oficinas, educación y aplicaciones industriales IoT. Su sistema de enfriamiento sin ventilador garantiza un funcionamiento silencioso y estable, mientras que las salidas HDMI duales permiten visualizar contenido 4K a 60 fps en dos pantallas simultáneamente. Con opciones de expansión de almacenamiento hasta 4TB, Gigabit Ethernet y WiFi de doble banda, este PC combina potencia y versatilidad en cualquier entorno. | CASAN Promo Center',
    keywords: 'Mini PC sin ventilador, MeLE Quieter2Q, PC compacto Celeron J4125, HDMI dual 4K, PC para oficina y IoT, Mini PC silenciosa, RAM 8GB SSD 128GB, WiFi de doble banda, PC portátil eficiente, Mini PC con BIOS desbloqueado',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Mini PC MeLE Quieter2Q Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
        description: 'Maximiza tu productividad con el Mini PC MeLE Quieter2Q, diseñado para ofrecer un rendimiento silencioso y eficiente en un tamaño compacto. Equipado con el procesador Intel Celeron J4125, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este mini ordenador es ideal para uso personal, oficinas, educación y aplicaciones industriales IoT. Su sistema de enfriamiento sin ventilador garantiza un funcionamiento silencioso y estable, mientras que las salidas HDMI duales permiten visualizar contenido 4K a 60 fps en dos pantallas simultáneamente. Con opciones de expansión de almacenamiento hasta 4TB, Gigabit Ethernet y WiFi de doble banda, este PC combina potencia y versatilidad en cualquier entorno. | CASAN Promo Center',
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
        title: 'Mini PC MeLE Quieter2Q Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
        description: 'Maximiza tu productividad con el Mini PC MeLE Quieter2Q, diseñado para ofrecer un rendimiento silencioso y eficiente en un tamaño compacto. Equipado con el procesador Intel Celeron J4125, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este mini ordenador es ideal para uso personal, oficinas, educación y aplicaciones industriales IoT. Su sistema de enfriamiento sin ventilador garantiza un funcionamiento silencioso y estable, mientras que las salidas HDMI duales permiten visualizar contenido 4K a 60 fps en dos pantallas simultáneamente. Con opciones de expansión de almacenamiento hasta 4TB, Gigabit Ethernet y WiFi de doble banda, este PC combina potencia y versatilidad en cualquier entorno. | CASAN Promo Center',
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
