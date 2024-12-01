// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Mini PC MeLE Quieter 4C N100 Sin Ventilador con RAM de 16GB y 512GB SSD | CASAN Promo Center',
    description: 'Descubre la potencia compacta del Mini PC MeLE Quieter 4C, equipado con el procesador Alder Lake-N100 de 12ª generación, ideal para negocios, uso personal y proyectos industriales IoT. Con un diseño sin ventilador, este dispositivo ofrece un funcionamiento silencioso, bajo consumo de energía y capacidad para operar 24/7. Disfruta de una experiencia multitarea fluida gracias a sus 16GB de RAM y un almacenamiento SSD ultrarrápido de 512GB, expandible hasta 4TB para cubrir todas tus necesidades. Con soporte para triple pantalla 4K, conectividad WiFi 5 y Bluetooth 5.1, este Mini PC es perfecto para mejorar tu productividad en cualquier entorno. | CASAN Promo Center',
    keywords: 'Mini PC sin ventilador, MeLE Quieter 4C, PC compacto N100, PC de escritorio triple pantalla 4K, Mini PC para negocios, RAM 16GB SSD 512GB, Alder Lake 12ª generación, WiFi 5 y Bluetooth 5.1, PC silenciosa y eficiente, Mini PC expandible hasta 4TB',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Mini PC MeLE Quieter 4C N100 Sin Ventilador con RAM de 16GB y 512GB SSD | CASAN Promo Center',
        description: 'Descubre la potencia compacta del Mini PC MeLE Quieter 4C, equipado con el procesador Alder Lake-N100 de 12ª generación, ideal para negocios, uso personal y proyectos industriales IoT. Con un diseño sin ventilador, este dispositivo ofrece un funcionamiento silencioso, bajo consumo de energía y capacidad para operar 24/7. Disfruta de una experiencia multitarea fluida gracias a sus 16GB de RAM y un almacenamiento SSD ultrarrápido de 512GB, expandible hasta 4TB para cubrir todas tus necesidades. Con soporte para triple pantalla 4K, conectividad WiFi 5 y Bluetooth 5.1, este Mini PC es perfecto para mejorar tu productividad en cualquier entorno. | CASAN Promo Center',
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
        title: 'Mini PC MeLE Quieter 4C N100 Sin Ventilador con RAM de 16GB y 512GB SSD | CASAN Promo Center',
        description: 'Descubre la potencia compacta del Mini PC MeLE Quieter 4C, equipado con el procesador Alder Lake-N100 de 12ª generación, ideal para negocios, uso personal y proyectos industriales IoT. Con un diseño sin ventilador, este dispositivo ofrece un funcionamiento silencioso, bajo consumo de energía y capacidad para operar 24/7. Disfruta de una experiencia multitarea fluida gracias a sus 16GB de RAM y un almacenamiento SSD ultrarrápido de 512GB, expandible hasta 4TB para cubrir todas tus necesidades. Con soporte para triple pantalla 4K, conectividad WiFi 5 y Bluetooth 5.1, este Mini PC es perfecto para mejorar tu productividad en cualquier entorno. | CASAN Promo Center',
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
