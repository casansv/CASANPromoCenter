// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Lámpara de Pared Exterior IP54 de Aluminio Antioxidante ZUUKOLE | CASAN Promo Center',
    description: 'Dale un toque sofisticado y funcional a tu hogar con la lámpara de pared exterior ZUUKOLE. Su diseño rectangular moderno resalta la arquitectura de tu espacio, proporcionando una iluminación elegante y eficiente. Fabricada en aluminio fundido con recubrimiento antioxidante y certificada por ETL, CE y ROHS, esta lámpara garantiza durabilidad y seguridad. Su diseño impermeable IP54 y resistente a la intemperie la hacen ideal para exteriores, mientras que su iluminación en una sola dirección (hacia arriba o abajo) crea un efecto visual impresionante. Es perfecta para porches, jardines, patios o como luz de seguridad en entradas y pasillos. | CASAN Promo Center',
    keywords: 'lámpara de pared exterior, iluminación moderna, ZUUKOLE, aluminio antioxidante, IP54, luz de porche, aplique impermeable, diseño rectangular, luz hacia arriba o abajo, iluminación para jardín, lámpara de seguridad, iluminación de patio, lámpara resistente al clima, estilo contemporáneo, luz para exteriores',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Lámpara de Pared Exterior IP54 de Aluminio Antioxidante ZUUKOLE | CASAN Promo Center',
        description: 'Dale un toque sofisticado y funcional a tu hogar con la lámpara de pared exterior ZUUKOLE. Su diseño rectangular moderno resalta la arquitectura de tu espacio, proporcionando una iluminación elegante y eficiente. Fabricada en aluminio fundido con recubrimiento antioxidante y certificada por ETL, CE y ROHS, esta lámpara garantiza durabilidad y seguridad. Su diseño impermeable IP54 y resistente a la intemperie la hacen ideal para exteriores, mientras que su iluminación en una sola dirección (hacia arriba o abajo) crea un efecto visual impresionante. Es perfecta para porches, jardines, patios o como luz de seguridad en entradas y pasillos. | CASAN Promo Center',
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
        title: 'Lámpara de Pared Exterior IP54 de Aluminio Antioxidante ZUUKOLE | CASAN Promo Center',
        description: 'Dale un toque sofisticado y funcional a tu hogar con la lámpara de pared exterior ZUUKOLE. Su diseño rectangular moderno resalta la arquitectura de tu espacio, proporcionando una iluminación elegante y eficiente. Fabricada en aluminio fundido con recubrimiento antioxidante y certificada por ETL, CE y ROHS, esta lámpara garantiza durabilidad y seguridad. Su diseño impermeable IP54 y resistente a la intemperie la hacen ideal para exteriores, mientras que su iluminación en una sola dirección (hacia arriba o abajo) crea un efecto visual impresionante. Es perfecta para porches, jardines, patios o como luz de seguridad en entradas y pasillos. | CASAN Promo Center',
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
