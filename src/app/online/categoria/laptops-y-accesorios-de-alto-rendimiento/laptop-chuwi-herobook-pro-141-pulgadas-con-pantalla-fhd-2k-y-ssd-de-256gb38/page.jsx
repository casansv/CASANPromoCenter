// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB | CASAN Promo Center',
    description: 'La CHUWI HeroBook Pro ofrece un equilibrio perfecto entre diseño, potencia y portabilidad. Equipada con un procesador Intel Celeron N4020 de hasta 2.8GHz, 8GB de RAM y 256GB SSD, esta laptop es ideal para estudiantes, profesionales y uso doméstico. Su pantalla IPS FHD de 14.1 pulgadas proporciona imágenes nítidas y colores vibrantes, mientras que su batería de larga duración y diseño ultradelgado te permiten trabajar o estudiar sobre la marcha. Con capacidad de expansión hasta 1TB SSD, conectividad WiFi 5G y múltiples puertos, esta laptop satisface todas tus necesidades diarias con estilo. | CASAN Promo Center',
    keywords: 'Laptop CHUWI HeroBook Pro, laptop con pantalla 2K, Intel Celeron N4020, laptop FHD 14 pulgadas, SSD 256GB, RAM 8GB DDR4, laptop ultradelgada, WiFi 5G, laptop para estudiantes y negocios, computadora portátil Windows 11',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB | CASAN Promo Center',
        description: 'La CHUWI HeroBook Pro ofrece un equilibrio perfecto entre diseño, potencia y portabilidad. Equipada con un procesador Intel Celeron N4020 de hasta 2.8GHz, 8GB de RAM y 256GB SSD, esta laptop es ideal para estudiantes, profesionales y uso doméstico. Su pantalla IPS FHD de 14.1 pulgadas proporciona imágenes nítidas y colores vibrantes, mientras que su batería de larga duración y diseño ultradelgado te permiten trabajar o estudiar sobre la marcha. Con capacidad de expansión hasta 1TB SSD, conectividad WiFi 5G y múltiples puertos, esta laptop satisface todas tus necesidades diarias con estilo. | CASAN Promo Center',
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
        title: 'Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB | CASAN Promo Center',
        description: 'La CHUWI HeroBook Pro ofrece un equilibrio perfecto entre diseño, potencia y portabilidad. Equipada con un procesador Intel Celeron N4020 de hasta 2.8GHz, 8GB de RAM y 256GB SSD, esta laptop es ideal para estudiantes, profesionales y uso doméstico. Su pantalla IPS FHD de 14.1 pulgadas proporciona imágenes nítidas y colores vibrantes, mientras que su batería de larga duración y diseño ultradelgado te permiten trabajar o estudiar sobre la marcha. Con capacidad de expansión hasta 1TB SSD, conectividad WiFi 5G y múltiples puertos, esta laptop satisface todas tus necesidades diarias con estilo. | CASAN Promo Center',
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
