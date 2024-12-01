// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mini PC HIGOLEPC Win 11 Pro con Pantalla IPS, 8GB RAM y 128GB EMMC | CASAN Promo Center',
    description: 'Explora la potencia y portabilidad de la Mini PC HIGOLEPC, diseñada para un rendimiento eficiente en un tamaño compacto. Equipado con Windows 11 Pro preinstalado y un procesador Intel Celeron J4125 de hasta 2.7GHz, esta mini computadora es ideal para tareas educativas, empresariales y de entretenimiento. Su diseño sin ventilador, batería integrada con hasta 5 horas de duración y conectividad avanzada con WiFi 6 y Bluetooth 5.2 hacen de esta mini PC una solución versátil para el trabajo remoto, IoT y sistemas inteligentes. Su pantalla IPS integrada y compatibilidad con HDMI 4K la convierten en un dispositivo funcional y moderno para cualquier entorno. | CASAN Promo Center',
    keywords: 'Mini PC HIGOLEPC, Mini PC portátil, Windows 11 Pro, Pantalla IPS integrada, Procesador Celeron J4125, RAM 8GB SSD 128GB, WiFi 6 Bluetooth 5.2, Mini computadora sin ventilador, HDMI dual 4K, Mini PC para educación y oficina',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Mini PC HIGOLEPC Win 11 Pro con Pantalla IPS, 8GB RAM y 128GB EMMC | CASAN Promo Center',
        description: 'Explora la potencia y portabilidad de la Mini PC HIGOLEPC, diseñada para un rendimiento eficiente en un tamaño compacto. Equipado con Windows 11 Pro preinstalado y un procesador Intel Celeron J4125 de hasta 2.7GHz, esta mini computadora es ideal para tareas educativas, empresariales y de entretenimiento. Su diseño sin ventilador, batería integrada con hasta 5 horas de duración y conectividad avanzada con WiFi 6 y Bluetooth 5.2 hacen de esta mini PC una solución versátil para el trabajo remoto, IoT y sistemas inteligentes. Su pantalla IPS integrada y compatibilidad con HDMI 4K la convierten en un dispositivo funcional y moderno para cualquier entorno. | CASAN Promo Center',
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
        title: 'Mini PC HIGOLEPC Win 11 Pro con Pantalla IPS, 8GB RAM y 128GB EMMC | CASAN Promo Center',
        description: 'Explora la potencia y portabilidad de la Mini PC HIGOLEPC, diseñada para un rendimiento eficiente en un tamaño compacto. Equipado con Windows 11 Pro preinstalado y un procesador Intel Celeron J4125 de hasta 2.7GHz, esta mini computadora es ideal para tareas educativas, empresariales y de entretenimiento. Su diseño sin ventilador, batería integrada con hasta 5 horas de duración y conectividad avanzada con WiFi 6 y Bluetooth 5.2 hacen de esta mini PC una solución versátil para el trabajo remoto, IoT y sistemas inteligentes. Su pantalla IPS integrada y compatibilidad con HDMI 4K la convierten en un dispositivo funcional y moderno para cualquier entorno. | CASAN Promo Center',
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
