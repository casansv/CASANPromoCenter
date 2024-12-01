// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tableta Lenovo Tab M10 Plus 3ª Gen - Pantalla 2K de 10,6 Pulgadas | CASAN Promo Center',
    description: 'Disfruta de la tecnología en tus manos con la Lenovo Tab M10 Plus de 3ª generación. Su diseño delgado y ligero la hace ideal para usar en casa, la oficina o mientras viajas. Con una pantalla táctil 2K de 10,6 pulgadas, experimenta colores vibrantes y una nitidez impresionante, perfecta para leer, ver películas o trabajar. Equipado con el potente procesador Qualcomm Snapdragon y 4 GB de RAM, este dispositivo garantiza un rendimiento rápido y fluido. Además, con sus 128 GB de almacenamiento, podrás guardar todos tus archivos, aplicaciones y recuerdos importantes. ¡La versatilidad y el estilo nunca fueron tan portátiles! | CASAN Promo Center',
    keywords: 'Lenovo Tab M10 Plus, tableta 10 pulgadas, tableta Android 13, tableta con LTE, pantalla táctil 2K, tableta ligera, tableta para leer, tableta para trabajar, tableta multitarea, tableta con Snapdragon, tableta Lenovo 128 GB.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tableta Lenovo Tab M10 Plus 3ª Gen - Pantalla 2K de 10,6 Pulgadas | CASAN Promo Center',
        description: 'Disfruta de la tecnología en tus manos con la Lenovo Tab M10 Plus de 3ª generación. Su diseño delgado y ligero la hace ideal para usar en casa, la oficina o mientras viajas. Con una pantalla táctil 2K de 10,6 pulgadas, experimenta colores vibrantes y una nitidez impresionante, perfecta para leer, ver películas o trabajar. Equipado con el potente procesador Qualcomm Snapdragon y 4 GB de RAM, este dispositivo garantiza un rendimiento rápido y fluido. Además, con sus 128 GB de almacenamiento, podrás guardar todos tus archivos, aplicaciones y recuerdos importantes. ¡La versatilidad y el estilo nunca fueron tan portátiles! | CASAN Promo Center',
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
        title: 'Tableta Lenovo Tab M10 Plus 3ª Gen - Pantalla 2K de 10,6 Pulgadas | CASAN Promo Center',
        description: 'Disfruta de la tecnología en tus manos con la Lenovo Tab M10 Plus de 3ª generación. Su diseño delgado y ligero la hace ideal para usar en casa, la oficina o mientras viajas. Con una pantalla táctil 2K de 10,6 pulgadas, experimenta colores vibrantes y una nitidez impresionante, perfecta para leer, ver películas o trabajar. Equipado con el potente procesador Qualcomm Snapdragon y 4 GB de RAM, este dispositivo garantiza un rendimiento rápido y fluido. Además, con sus 128 GB de almacenamiento, podrás guardar todos tus archivos, aplicaciones y recuerdos importantes. ¡La versatilidad y el estilo nunca fueron tan portátiles! | CASAN Promo Center',
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
