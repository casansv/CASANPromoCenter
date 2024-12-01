// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mesa de Noche Furinno de Madera con Cajón, Color Espresso (2 Piezas) | CASAN Promo Center',
    description: 'Agrega funcionalidad y estilo a tu habitación con este set de dos mesas de noche Furinno en color espresso. Diseñadas para maximizar el espacio, estas mesas son ideales para cualquier habitación, ofreciendo un diseño compacto, elegante y práctico. Fabricadas con madera de ingeniería y tela no tejida, cuentan con un cajón para almacenamiento adicional. Con bordes redondeados para mayor seguridad y un acabado contemporáneo, estas mesas se integran perfectamente en cualquier decoración moderna. Fáciles de montar y ligeras, son una solución práctica y económica para organizar tus espacios. | CASAN Promo Center',
    keywords: 'mesa de noche, Furinno, madera de ingeniería, color espresso, muebles compactos, diseño moderno, mesas auxiliares, set de dos mesas, muebles funcionales, cajón de almacenamiento, borde redondeado, fácil montaje, mesas contemporáneas, organización de habitación, muebles económicos, mesas pequeñas',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Mesa de Noche Furinno de Madera con Cajón, Color Espresso (2 Piezas) | CASAN Promo Center',
        description: 'Agrega funcionalidad y estilo a tu habitación con este set de dos mesas de noche Furinno en color espresso. Diseñadas para maximizar el espacio, estas mesas son ideales para cualquier habitación, ofreciendo un diseño compacto, elegante y práctico. Fabricadas con madera de ingeniería y tela no tejida, cuentan con un cajón para almacenamiento adicional. Con bordes redondeados para mayor seguridad y un acabado contemporáneo, estas mesas se integran perfectamente en cualquier decoración moderna. Fáciles de montar y ligeras, son una solución práctica y económica para organizar tus espacios. | CASAN Promo Center',
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
        title: 'Mesa de Noche Furinno de Madera con Cajón, Color Espresso (2 Piezas) | CASAN Promo Center',
        description: 'Agrega funcionalidad y estilo a tu habitación con este set de dos mesas de noche Furinno en color espresso. Diseñadas para maximizar el espacio, estas mesas son ideales para cualquier habitación, ofreciendo un diseño compacto, elegante y práctico. Fabricadas con madera de ingeniería y tela no tejida, cuentan con un cajón para almacenamiento adicional. Con bordes redondeados para mayor seguridad y un acabado contemporáneo, estas mesas se integran perfectamente en cualquier decoración moderna. Fáciles de montar y ligeras, son una solución práctica y económica para organizar tus espacios. | CASAN Promo Center',
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
