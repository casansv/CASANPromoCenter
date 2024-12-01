// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mini PC Stick MeLE PCG02 Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
    description: 'Optimiza tu espacio y potencia tu productividad con el Mini PC Stick MeLE PCG02, un dispositivo compacto y eficiente diseñado para negocios, entretenimiento y aplicaciones IoT. Equipado con un procesador Intel Celeron J4125 de hasta 2.7GHz, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este PC Stick es perfecto para manejar múltiples tareas y proyectos. Con conectividad WiFi de doble banda, puerto Gigabit Ethernet y salida HDMI 4K, este dispositivo ofrece rendimiento avanzado y una experiencia visual superior. Su diseño sin ventilador asegura un funcionamiento silencioso y estable, ideal para entornos comerciales y uso continuo 24/7. | CASAN Promo Center',
    keywords: 'Mini PC Stick, MeLE PCG02, PC Stick sin ventilador, RAM 8GB SSD 128GB, HDMI 4K, PC compacto con Gigabit Ethernet, Mini PC para negocios y multimedia, Bluetooth 4.2, WiFi de doble banda, PC Stick para IoT',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Mini PC Stick MeLE PCG02 Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
        description: 'Optimiza tu espacio y potencia tu productividad con el Mini PC Stick MeLE PCG02, un dispositivo compacto y eficiente diseñado para negocios, entretenimiento y aplicaciones IoT. Equipado con un procesador Intel Celeron J4125 de hasta 2.7GHz, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este PC Stick es perfecto para manejar múltiples tareas y proyectos. Con conectividad WiFi de doble banda, puerto Gigabit Ethernet y salida HDMI 4K, este dispositivo ofrece rendimiento avanzado y una experiencia visual superior. Su diseño sin ventilador asegura un funcionamiento silencioso y estable, ideal para entornos comerciales y uso continuo 24/7. | CASAN Promo Center',
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
        title: 'Mini PC Stick MeLE PCG02 Sin Ventilador con 8GB RAM y 128GB Almacenamiento | CASAN Promo Center',
        description: 'Optimiza tu espacio y potencia tu productividad con el Mini PC Stick MeLE PCG02, un dispositivo compacto y eficiente diseñado para negocios, entretenimiento y aplicaciones IoT. Equipado con un procesador Intel Celeron J4125 de hasta 2.7GHz, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este PC Stick es perfecto para manejar múltiples tareas y proyectos. Con conectividad WiFi de doble banda, puerto Gigabit Ethernet y salida HDMI 4K, este dispositivo ofrece rendimiento avanzado y una experiencia visual superior. Su diseño sin ventilador asegura un funcionamiento silencioso y estable, ideal para entornos comerciales y uso continuo 24/7. | CASAN Promo Center',
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
