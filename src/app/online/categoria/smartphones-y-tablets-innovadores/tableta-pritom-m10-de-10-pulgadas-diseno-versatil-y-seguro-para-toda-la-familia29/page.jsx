// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia | CASAN Promo Center',
    description: 'La PRITOM M10 es una tableta Android 12 que combina rendimiento, funcionalidad y diseño pensado para toda la familia, especialmente para los más pequeños. Con una pantalla HD IPS de 10,1 pulgadas, ofrece imágenes claras y vibrantes, perfectas para juegos, estudios o entretenimiento. Su procesador Quad-Core garantiza un rendimiento fluido, mientras que su capacidad de almacenamiento, ampliable hasta 512 GB, asegura espacio suficiente para todas tus aplicaciones, fotos y videos. Además, incluye controles parentales, aplicaciones educativas y una funda de silicona protectora para garantizar la seguridad de los niños. ¡Ideal para aprender, jugar y compartir momentos en familia! | CASAN Promo Center',
    keywords: 'tableta PRITOM, tablet 10 pulgadas, tableta para niños, Android 12 tablet, tableta con control parental, tablet HD IPS, tablet 32GB ampliable, tablet con funda protectora, tableta educativa, tableta familiar',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia | CASAN Promo Center',
        description: 'La PRITOM M10 es una tableta Android 12 que combina rendimiento, funcionalidad y diseño pensado para toda la familia, especialmente para los más pequeños. Con una pantalla HD IPS de 10,1 pulgadas, ofrece imágenes claras y vibrantes, perfectas para juegos, estudios o entretenimiento. Su procesador Quad-Core garantiza un rendimiento fluido, mientras que su capacidad de almacenamiento, ampliable hasta 512 GB, asegura espacio suficiente para todas tus aplicaciones, fotos y videos. Además, incluye controles parentales, aplicaciones educativas y una funda de silicona protectora para garantizar la seguridad de los niños. ¡Ideal para aprender, jugar y compartir momentos en familia! | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_01,
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
        title: 'Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia | CASAN Promo Center',
        description: 'La PRITOM M10 es una tableta Android 12 que combina rendimiento, funcionalidad y diseño pensado para toda la familia, especialmente para los más pequeños. Con una pantalla HD IPS de 10,1 pulgadas, ofrece imágenes claras y vibrantes, perfectas para juegos, estudios o entretenimiento. Su procesador Quad-Core garantiza un rendimiento fluido, mientras que su capacidad de almacenamiento, ampliable hasta 512 GB, asegura espacio suficiente para todas tus aplicaciones, fotos y videos. Además, incluye controles parentales, aplicaciones educativas y una funda de silicona protectora para garantizar la seguridad de los niños. ¡Ideal para aprender, jugar y compartir momentos en familia! | CASAN Promo Center',
        image: Data.menu_icon_01
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
