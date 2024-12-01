// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM | CASAN Promo Center',
    description: 'Renueva tu experiencia informática con el PC de Escritorio Dell Optiplex 7050 SFF, un equipo diseñado para combinar potencia, velocidad y eficiencia. Este ordenador reacondicionado de calidad incluye el procesador Intel i7-7700 de cuatro núcleos, que alcanza hasta 4.2 GHz, ideal para multitareas y aplicaciones exigentes. Su impresionante memoria RAM DDR4 de 32GB y almacenamiento SSD de 1TB garantizan un rendimiento fluido y espacio suficiente para tus archivos importantes. Además, con conectividad WiFi, Bluetooth y soporte para doble monitor 4K, este equipo es perfecto para profesionales, estudiantes y amantes del entretenimiento. | CASAN Promo Center',
    keywords: 'Dell Optiplex 7050, PC de escritorio, Intel i7 reacondicionado, ordenador compacto, PC para multitareas, computadora 4K, SSD 1TB, RAM 32GB, WiFi y Bluetooth, Dell Optiplex económico, PC para oficina y multimedia',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM | CASAN Promo Center',
        description: 'Renueva tu experiencia informática con el PC de Escritorio Dell Optiplex 7050 SFF, un equipo diseñado para combinar potencia, velocidad y eficiencia. Este ordenador reacondicionado de calidad incluye el procesador Intel i7-7700 de cuatro núcleos, que alcanza hasta 4.2 GHz, ideal para multitareas y aplicaciones exigentes. Su impresionante memoria RAM DDR4 de 32GB y almacenamiento SSD de 1TB garantizan un rendimiento fluido y espacio suficiente para tus archivos importantes. Además, con conectividad WiFi, Bluetooth y soporte para doble monitor 4K, este equipo es perfecto para profesionales, estudiantes y amantes del entretenimiento. | CASAN Promo Center',
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
        title: 'PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM | CASAN Promo Center',
        description: 'Renueva tu experiencia informática con el PC de Escritorio Dell Optiplex 7050 SFF, un equipo diseñado para combinar potencia, velocidad y eficiencia. Este ordenador reacondicionado de calidad incluye el procesador Intel i7-7700 de cuatro núcleos, que alcanza hasta 4.2 GHz, ideal para multitareas y aplicaciones exigentes. Su impresionante memoria RAM DDR4 de 32GB y almacenamiento SSD de 1TB garantizan un rendimiento fluido y espacio suficiente para tus archivos importantes. Además, con conectividad WiFi, Bluetooth y soporte para doble monitor 4K, este equipo es perfecto para profesionales, estudiantes y amantes del entretenimiento. | CASAN Promo Center',
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
