// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh | CASAN Promo Center',
    description: 'La Xiaomi Pad 6 es la tablet diseñada para quienes buscan un equilibrio entre rendimiento, diseño y portabilidad. Con su impresionante pantalla de 11 Pulgadas WQHD+ y frecuencia de actualización de 144 Hz, disfrutarás de imágenes fluidas y detalladas, ya sea trabajando, explorando tu creatividad o jugando. Equipada con un procesador Snapdragon 870, esta tablet ofrece un rendimiento eficiente y rápido, ideal para multitareas y actividades exigentes. Su batería de alta capacidad de 8840 mAh y carga rápida de 33 W te permitirá usarla durante horas sin interrupciones, siendo perfecta para productividad y entretenimiento. Con un diseño unibody de solo 6,51 mm de grosor y 490 gramos de peso, es ligera y fácil de transportar, mientras que su cuerpo metálico asegura durabilidad. Disponible en un elegante color gris, la Xiaomi Pad 6 combina estilo y funcionalidad en un solo dispositivo. | CASAN Promo Center',
    keywords: 'Xiaomi Pad 6, tablet 11 pulgadas WQHD+, tablet 144 Hz, Snapdragon 870, tablet con carga rápida 33 W, batería 8840 mAh, tablet Android 13, tablet ligera y portátil, tablet para productividad, tablet multitarea Xiaomi, tablet gris unibody',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh | CASAN Promo Center',
        description: 'La Xiaomi Pad 6 es la tablet diseñada para quienes buscan un equilibrio entre rendimiento, diseño y portabilidad. Con su impresionante pantalla de 11 Pulgadas WQHD+ y frecuencia de actualización de 144 Hz, disfrutarás de imágenes fluidas y detalladas, ya sea trabajando, explorando tu creatividad o jugando. Equipada con un procesador Snapdragon 870, esta tablet ofrece un rendimiento eficiente y rápido, ideal para multitareas y actividades exigentes. Su batería de alta capacidad de 8840 mAh y carga rápida de 33 W te permitirá usarla durante horas sin interrupciones, siendo perfecta para productividad y entretenimiento. Con un diseño unibody de solo 6,51 mm de grosor y 490 gramos de peso, es ligera y fácil de transportar, mientras que su cuerpo metálico asegura durabilidad. Disponible en un elegante color gris, la Xiaomi Pad 6 combina estilo y funcionalidad en un solo dispositivo. | CASAN Promo Center',
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
        title: 'Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh | CASAN Promo Center',
        description: 'La Xiaomi Pad 6 es la tablet diseñada para quienes buscan un equilibrio entre rendimiento, diseño y portabilidad. Con su impresionante pantalla de 11 Pulgadas WQHD+ y frecuencia de actualización de 144 Hz, disfrutarás de imágenes fluidas y detalladas, ya sea trabajando, explorando tu creatividad o jugando. Equipada con un procesador Snapdragon 870, esta tablet ofrece un rendimiento eficiente y rápido, ideal para multitareas y actividades exigentes. Su batería de alta capacidad de 8840 mAh y carga rápida de 33 W te permitirá usarla durante horas sin interrupciones, siendo perfecta para productividad y entretenimiento. Con un diseño unibody de solo 6,51 mm de grosor y 490 gramos de peso, es ligera y fácil de transportar, mientras que su cuerpo metálico asegura durabilidad. Disponible en un elegante color gris, la Xiaomi Pad 6 combina estilo y funcionalidad en un solo dispositivo. | CASAN Promo Center',
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
