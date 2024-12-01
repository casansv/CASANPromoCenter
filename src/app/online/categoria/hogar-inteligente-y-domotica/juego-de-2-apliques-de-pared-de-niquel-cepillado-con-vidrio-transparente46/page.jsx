// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Juego de 2 Apliques de Pared de Níquel Cepillado con Vidrio Transparente | CASAN Promo Center',
    description: 'Añade un toque moderno y sofisticado a tus espacios con el juego de 2 apliques de pared Licperron. Fabricados con un acabado en níquel cepillado y pantallas de vidrio transparente, estos accesorios de iluminación combinan elegancia y funcionalidad. Su diseño versátil permite instalarlos hacia arriba o hacia abajo según tu estilo, adaptándose perfectamente a baños, dormitorios, pasillos y más. Compatibles con bombillas de base E26, ofrecen opciones de iluminación regulable para crear el ambiente ideal. Su instalación es rápida y sencilla, haciendo de estos apliques una solución práctica y estética para tu hogar. | CASAN Promo Center',
    keywords: 'apliques de pared, níquel cepillado, lámparas modernas, iluminación de baño, Licperron, lámpara de tocador, cristal transparente, apliques decorativos, iluminación regulable, diseño sofisticado, lámpara de dormitorio, accesorios de iluminación, lámparas de pared interiores, estilo moderno, iluminación elegante',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Juego de 2 Apliques de Pared de Níquel Cepillado con Vidrio Transparente | CASAN Promo Center',
        description: 'Añade un toque moderno y sofisticado a tus espacios con el juego de 2 apliques de pared Licperron. Fabricados con un acabado en níquel cepillado y pantallas de vidrio transparente, estos accesorios de iluminación combinan elegancia y funcionalidad. Su diseño versátil permite instalarlos hacia arriba o hacia abajo según tu estilo, adaptándose perfectamente a baños, dormitorios, pasillos y más. Compatibles con bombillas de base E26, ofrecen opciones de iluminación regulable para crear el ambiente ideal. Su instalación es rápida y sencilla, haciendo de estos apliques una solución práctica y estética para tu hogar. | CASAN Promo Center',
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
        title: 'Juego de 2 Apliques de Pared de Níquel Cepillado con Vidrio Transparente | CASAN Promo Center',
        description: 'Añade un toque moderno y sofisticado a tus espacios con el juego de 2 apliques de pared Licperron. Fabricados con un acabado en níquel cepillado y pantallas de vidrio transparente, estos accesorios de iluminación combinan elegancia y funcionalidad. Su diseño versátil permite instalarlos hacia arriba o hacia abajo según tu estilo, adaptándose perfectamente a baños, dormitorios, pasillos y más. Compatibles con bombillas de base E26, ofrecen opciones de iluminación regulable para crear el ambiente ideal. Su instalación es rápida y sencilla, haciendo de estos apliques una solución práctica y estética para tu hogar. | CASAN Promo Center',
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
