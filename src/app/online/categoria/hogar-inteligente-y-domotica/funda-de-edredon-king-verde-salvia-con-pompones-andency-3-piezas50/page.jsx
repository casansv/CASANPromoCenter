// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Funda de Edredón King Verde Salvia con Pompones Andency (3 Piezas) | CASAN Promo Center',
    description: 'Añade un toque de elegancia y comodidad a tu dormitorio con la funda de edredón Andency tamaño King. Confeccionada en microfibra lavada ultrasuave, esta funda ligera ofrece una experiencia de descanso excepcional. Su diseño de flecos de pompones hechos a mano aporta un estilo único y sofisticado, ideal para transformar cualquier espacio en un refugio acogedor. Equipado con un cierre de cremallera oculto y 4 lazos en las esquinas, asegura que tu edredón permanezca en su lugar durante toda la noche. Incluye dos fundas de almohada a juego para completar este conjunto ideal para quienes buscan confort y diseño. | CASAN Promo Center',
    keywords: 'funda de edredón King, diseño con pompones, microfibra lavada, Andency, verde salvia, funda de almohada, cierre de cremallera, lazos en esquinas, ropa de cama elegante, funda de edredón suave, decoración moderna, juego de cama 3 piezas, fácil limpieza, estilo minimalista, ropa de cama acogedora, dormitorio sofisticado',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Funda de Edredón King Verde Salvia con Pompones Andency (3 Piezas) | CASAN Promo Center',
        description: 'Añade un toque de elegancia y comodidad a tu dormitorio con la funda de edredón Andency tamaño King. Confeccionada en microfibra lavada ultrasuave, esta funda ligera ofrece una experiencia de descanso excepcional. Su diseño de flecos de pompones hechos a mano aporta un estilo único y sofisticado, ideal para transformar cualquier espacio en un refugio acogedor. Equipado con un cierre de cremallera oculto y 4 lazos en las esquinas, asegura que tu edredón permanezca en su lugar durante toda la noche. Incluye dos fundas de almohada a juego para completar este conjunto ideal para quienes buscan confort y diseño. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_03,
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
        title: 'Funda de Edredón King Verde Salvia con Pompones Andency (3 Piezas) | CASAN Promo Center',
        description: 'Añade un toque de elegancia y comodidad a tu dormitorio con la funda de edredón Andency tamaño King. Confeccionada en microfibra lavada ultrasuave, esta funda ligera ofrece una experiencia de descanso excepcional. Su diseño de flecos de pompones hechos a mano aporta un estilo único y sofisticado, ideal para transformar cualquier espacio en un refugio acogedor. Equipado con un cierre de cremallera oculto y 4 lazos en las esquinas, asegura que tu edredón permanezca en su lugar durante toda la noche. Incluye dos fundas de almohada a juego para completar este conjunto ideal para quienes buscan confort y diseño. | CASAN Promo Center',
        image: Data.menu_icon_03
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
