// src/app/BACKSTATE/Online/Hub/page.jsx
import React from 'react';

import Data from "../../../sconstants.json";

import ProductPage from './ProductSearch';





export const metadata = {
    title: 'Moda y Accesorios Femeninos | Estilo y Elegancia | CASAN Promo Center',
    description: 'Encuentra lo último en moda femenina. Prendas y accesorios para cada ocasión con estilo, elegancia y calidad. | CASAN Promo Center',
    keywords: 'moda femenina 2024, tendencias de moda, ropa elegante para mujer, accesorios de moda, comprar ropa en línea, moda en México, vestidos de fiesta, zapatos de mujer, bolsos de marca, moda casual femenina, ropa de oficina para mujer, moda verano 2024, abrigos de moda, ropa elegante en El Salvador, accesorios para el cabello, moda sostenible, moda en Argentina, moda de alta costura, ropa para eventos especiales, conjuntos casuales, outfits para el trabajo, joyería de moda, prendas básicas para mujer, faldas de moda, chaquetas de moda, tendencias primavera-verano, moda en España, zapatos cómodos y elegantes, moda otoño-invierno, moda en Chile, ropa deportiva para mujer, carteras y bolsos, pantalones de mujer, blusas de moda, ropa boho chic, vestidos casuales, moda accesible, zapatos de moda, trajes de baño modernos, sudaderas de mujer, moda contemporánea, casansv',
    icons: {
        icon: Data.menu_icon_04,
    },
    openGraph: {
        title: 'Moda y Accesorios Femeninos | Estilo y Elegancia | CASAN Promo Center',
        description: 'Encuentra lo último en moda femenina. Prendas y accesorios para cada ocasión con estilo, elegancia y calidad. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_04,
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
        title: 'Moda y Accesorios Femeninos | Estilo y Elegancia | CASAN Promo Center',
        description: 'Encuentra lo último en moda femenina. Prendas y accesorios para cada ocasión con estilo, elegancia y calidad. | CASAN Promo Center',
        image: Data.menu_icon_04
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
