// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Aplique de Pared LED Negro de 10W IP65 para Interior y Exterior | CASAN Promo Center',
    description: 'Ilumina tus espacios con el elegante aplique de pared LED de Sobrovo. Fabricado con aleación de aluminio resistente, este aplique ofrece durabilidad superior y un diseño moderno que complementa cualquier ambiente. Su tecnología LED de 10W brinda una luz cálida y uniforme (4500K), perfecta para interiores y exteriores. Gracias a su protección IP65, es resistente al agua y a condiciones climáticas adversas, ideal para áreas como salas de estar, porches, baños y más. Este aplique garantiza una instalación sencilla y un mantenimiento mínimo, haciendo de él la elección perfecta para quienes buscan calidad y estilo. | CASAN Promo Center',
    keywords: 'aplique de pared, LED impermeable, iluminación interior, iluminación exterior, IP65, aplique negro, luz de pared moderna, lámpara de porche, Sobrovo, lámpara de aluminio, iluminación eficiente, aplique de baño, luz cálida, diseño contemporáneo, lámpara resistente',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Aplique de Pared LED Negro de 10W IP65 para Interior y Exterior | CASAN Promo Center',
        description: 'Ilumina tus espacios con el elegante aplique de pared LED de Sobrovo. Fabricado con aleación de aluminio resistente, este aplique ofrece durabilidad superior y un diseño moderno que complementa cualquier ambiente. Su tecnología LED de 10W brinda una luz cálida y uniforme (4500K), perfecta para interiores y exteriores. Gracias a su protección IP65, es resistente al agua y a condiciones climáticas adversas, ideal para áreas como salas de estar, porches, baños y más. Este aplique garantiza una instalación sencilla y un mantenimiento mínimo, haciendo de él la elección perfecta para quienes buscan calidad y estilo. | CASAN Promo Center',
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
        title: 'Aplique de Pared LED Negro de 10W IP65 para Interior y Exterior | CASAN Promo Center',
        description: 'Ilumina tus espacios con el elegante aplique de pared LED de Sobrovo. Fabricado con aleación de aluminio resistente, este aplique ofrece durabilidad superior y un diseño moderno que complementa cualquier ambiente. Su tecnología LED de 10W brinda una luz cálida y uniforme (4500K), perfecta para interiores y exteriores. Gracias a su protección IP65, es resistente al agua y a condiciones climáticas adversas, ideal para áreas como salas de estar, porches, baños y más. Este aplique garantiza una instalación sencilla y un mantenimiento mínimo, haciendo de él la elección perfecta para quienes buscan calidad y estilo. | CASAN Promo Center',
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
