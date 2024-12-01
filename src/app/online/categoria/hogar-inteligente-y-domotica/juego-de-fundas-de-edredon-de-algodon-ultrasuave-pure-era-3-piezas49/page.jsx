// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Juego de Fundas de Edredón de Algodón Ultrasuave Pure Era (3 Piezas) | CASAN Promo Center',
    description: 'Descubre el lujo de dormir con el juego de fundas de edredón Pure Era, diseñado para ofrecer la máxima comodidad en todas las estaciones. Fabricado con 100% algodón de punto, este juego tiene la suavidad y calidez de tu camiseta favorita, brindándote la sensación de dormir en una nube esponjosa. Su diseño elegante en gris carbón combina perfectamente con cualquier decoración de dormitorio, añadiendo un toque moderno y sofisticado. Equipado con un cierre de cremallera oculto y lazos en las esquinas, mantiene el edredón en su lugar para un descanso ininterrumpido. Ideal para camas tamaño Queen, este juego incluye una funda de edredón y dos fundas de almohada, ofreciendo estilo y practicidad para tu hogar. | CASAN Promo Center',
    keywords: 'juego de fundas de edredón, algodón ultrasuave, ropa de cama Pure Era, gris carbón, funda de edredón Queen, fundas de almohada, cierre de cremallera, lazos en esquinas, ropa de cama elegante, funda de edredón jersey, fácil cuidado, ropa de cama para todas las estaciones, cama cómoda, estilo moderno',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Juego de Fundas de Edredón de Algodón Ultrasuave Pure Era (3 Piezas) | CASAN Promo Center',
        description: 'Descubre el lujo de dormir con el juego de fundas de edredón Pure Era, diseñado para ofrecer la máxima comodidad en todas las estaciones. Fabricado con 100% algodón de punto, este juego tiene la suavidad y calidez de tu camiseta favorita, brindándote la sensación de dormir en una nube esponjosa. Su diseño elegante en gris carbón combina perfectamente con cualquier decoración de dormitorio, añadiendo un toque moderno y sofisticado. Equipado con un cierre de cremallera oculto y lazos en las esquinas, mantiene el edredón en su lugar para un descanso ininterrumpido. Ideal para camas tamaño Queen, este juego incluye una funda de edredón y dos fundas de almohada, ofreciendo estilo y practicidad para tu hogar. | CASAN Promo Center',
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
        title: 'Juego de Fundas de Edredón de Algodón Ultrasuave Pure Era (3 Piezas) | CASAN Promo Center',
        description: 'Descubre el lujo de dormir con el juego de fundas de edredón Pure Era, diseñado para ofrecer la máxima comodidad en todas las estaciones. Fabricado con 100% algodón de punto, este juego tiene la suavidad y calidez de tu camiseta favorita, brindándote la sensación de dormir en una nube esponjosa. Su diseño elegante en gris carbón combina perfectamente con cualquier decoración de dormitorio, añadiendo un toque moderno y sofisticado. Equipado con un cierre de cremallera oculto y lazos en las esquinas, mantiene el edredón en su lugar para un descanso ininterrumpido. Ideal para camas tamaño Queen, este juego incluye una funda de edredón y dos fundas de almohada, ofreciendo estilo y practicidad para tu hogar. | CASAN Promo Center',
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
