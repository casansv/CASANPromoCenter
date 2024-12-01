// src/app/BACKSTATE/Online/Hub/page.jsx
import React from 'react';

import Data from "../../../sconstants.json";

import ProductPage from './ProductSearch';





export const metadata = {
    title: 'Laptops y Accesorios de Alto Rendimiento | Potencia y Velocidad | CASAN Promo Center',
    description: 'Las mejores laptops y accesorios con un rendimiento superior. Optimiza tu productividad con la tecnología más avanzada. | CASAN Promo Center',
    keywords: 'laptops 2024, laptops para gaming, mejores laptops para trabajo, portátiles de alta gama, accesorios para laptops, comprar laptops en México, laptops para diseño gráfico, laptops potentes, portátiles con buena batería, laptops para estudiantes, laptops con pantalla táctil, MacBook 2024, laptops ligeras, portátiles con buen rendimiento, accesorios de computadora, mejores laptops calidad-precio, laptops para programación, portátiles para edición de video, laptops HP, laptops Dell, comprar laptops online, portátiles para trabajar desde casa, laptops en El Salvador, laptops para viajar, portátiles ASUS, laptops económicas, estaciones de trabajo portátiles, cargadores rápidos para laptops, laptops en Argentina, mejores portátiles de 2024, tecnología portátil avanzada, laptops con procesadores Intel, laptops con procesadores AMD, portátiles de última generación, portátiles de trabajo remoto, laptops en Chile, laptops Lenovo, fundas para laptops, laptops con gran almacenamiento, portátiles para arquitectos, casansv',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Laptops y Accesorios de Alto Rendimiento | Potencia y Velocidad | CASAN Promo Center',
        description: 'Las mejores laptops y accesorios con un rendimiento superior. Optimiza tu productividad con la tecnología más avanzada. | CASAN Promo Center',
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
        title: 'Laptops y Accesorios de Alto Rendimiento | Potencia y Velocidad | CASAN Promo Center',
        description: 'Las mejores laptops y accesorios con un rendimiento superior. Optimiza tu productividad con la tecnología más avanzada. | CASAN Promo Center',
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
