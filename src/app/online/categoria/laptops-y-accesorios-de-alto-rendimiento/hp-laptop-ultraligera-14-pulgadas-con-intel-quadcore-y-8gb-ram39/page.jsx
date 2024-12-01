// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'HP Laptop Ultraligera 14 Pulgadas con Intel Quad-Core y 8GB RAM | CASAN Promo Center',
    description: 'La HP Laptop de 14 pulgadas es el equilibrio ideal entre portabilidad y rendimiento, perfecta para estudiantes y profesionales en movimiento. Equipada con un procesador Intel Quad-Core N4120 de hasta 2.60 GHz, 8GB de RAM y almacenamiento de 192GB (64GB eMMC + tarjeta SD Ghost Manta de 128GB), esta laptop garantiza un rendimiento fluido para multitareas y seminarios web. Su pantalla HD de microborde y BrightView de 14 pulgadas ofrece una experiencia visual inmersiva, mientras que su diseño delgado y elegante en color Snowflake White agrega un toque moderno. Conectividad avanzada y un año de Microsoft 365 incluido, está lista para maximizar tu productividad. | CASAN Promo Center',
    keywords: 'HP Laptop 14 pulgadas, laptop ultraligera para estudiantes, Intel Quad-Core N4120, RAM 8GB DDR4, almacenamiento 192GB, laptop para negocios, pantalla HD microborde, Windows 11 Home, laptop económica y moderna, laptop con batería de larga duración',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'HP Laptop Ultraligera 14 Pulgadas con Intel Quad-Core y 8GB RAM | CASAN Promo Center',
        description: 'La HP Laptop de 14 pulgadas es el equilibrio ideal entre portabilidad y rendimiento, perfecta para estudiantes y profesionales en movimiento. Equipada con un procesador Intel Quad-Core N4120 de hasta 2.60 GHz, 8GB de RAM y almacenamiento de 192GB (64GB eMMC + tarjeta SD Ghost Manta de 128GB), esta laptop garantiza un rendimiento fluido para multitareas y seminarios web. Su pantalla HD de microborde y BrightView de 14 pulgadas ofrece una experiencia visual inmersiva, mientras que su diseño delgado y elegante en color Snowflake White agrega un toque moderno. Conectividad avanzada y un año de Microsoft 365 incluido, está lista para maximizar tu productividad. | CASAN Promo Center',
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
        title: 'HP Laptop Ultraligera 14 Pulgadas con Intel Quad-Core y 8GB RAM | CASAN Promo Center',
        description: 'La HP Laptop de 14 pulgadas es el equilibrio ideal entre portabilidad y rendimiento, perfecta para estudiantes y profesionales en movimiento. Equipada con un procesador Intel Quad-Core N4120 de hasta 2.60 GHz, 8GB de RAM y almacenamiento de 192GB (64GB eMMC + tarjeta SD Ghost Manta de 128GB), esta laptop garantiza un rendimiento fluido para multitareas y seminarios web. Su pantalla HD de microborde y BrightView de 14 pulgadas ofrece una experiencia visual inmersiva, mientras que su diseño delgado y elegante en color Snowflake White agrega un toque moderno. Conectividad avanzada y un año de Microsoft 365 incluido, está lista para maximizar tu productividad. | CASAN Promo Center',
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
