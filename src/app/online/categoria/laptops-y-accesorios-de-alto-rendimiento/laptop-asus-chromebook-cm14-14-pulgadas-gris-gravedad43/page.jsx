// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad | CASAN Promo Center',
    description: 'Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este portátil ligero y elegante, en color gris gravedad, está equipado con un procesador MediaTek Kompanio 520 y sistema operativo ChromeOS, ofreciendo un rendimiento ágil y confiable para todas tus tareas diarias. Su pantalla HD NanoEdge antirreflejos de 14 Pulgadas garantiza una experiencia visual cómoda, mientras que su diseño resistente a derrames y certificado con estándares militares asegura durabilidad para el uso diario. Con 4 GB de RAM, 64 GB de almacenamiento eMMC, conectividad avanzada WiFi 6 y Bluetooth 5.3, y características como protección antimicrobiana y cámara web con escudo de privacidad, este Chromebook es ideal para quienes buscan tecnología avanzada con un enfoque sostenible. | CASAN Promo Center',
    keywords: 'ASUS Chromebook CM14, laptop 14 pulgadas HD, portátil gris gravedad, procesador MediaTek Kompanio 520, Chromebook resistente, laptop antirreflejos, teclado resistente a derrames, WiFi 6, portátil con protección antimicrobiana, laptop ChromeOS, ASUS sostenible',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad | CASAN Promo Center',
        description: 'Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este portátil ligero y elegante, en color gris gravedad, está equipado con un procesador MediaTek Kompanio 520 y sistema operativo ChromeOS, ofreciendo un rendimiento ágil y confiable para todas tus tareas diarias. Su pantalla HD NanoEdge antirreflejos de 14 Pulgadas garantiza una experiencia visual cómoda, mientras que su diseño resistente a derrames y certificado con estándares militares asegura durabilidad para el uso diario. Con 4 GB de RAM, 64 GB de almacenamiento eMMC, conectividad avanzada WiFi 6 y Bluetooth 5.3, y características como protección antimicrobiana y cámara web con escudo de privacidad, este Chromebook es ideal para quienes buscan tecnología avanzada con un enfoque sostenible. | CASAN Promo Center',
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
        title: 'Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad | CASAN Promo Center',
        description: 'Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este portátil ligero y elegante, en color gris gravedad, está equipado con un procesador MediaTek Kompanio 520 y sistema operativo ChromeOS, ofreciendo un rendimiento ágil y confiable para todas tus tareas diarias. Su pantalla HD NanoEdge antirreflejos de 14 Pulgadas garantiza una experiencia visual cómoda, mientras que su diseño resistente a derrames y certificado con estándares militares asegura durabilidad para el uso diario. Con 4 GB de RAM, 64 GB de almacenamiento eMMC, conectividad avanzada WiFi 6 y Bluetooth 5.3, y características como protección antimicrobiana y cámara web con escudo de privacidad, este Chromebook es ideal para quienes buscan tecnología avanzada con un enfoque sostenible. | CASAN Promo Center',
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
