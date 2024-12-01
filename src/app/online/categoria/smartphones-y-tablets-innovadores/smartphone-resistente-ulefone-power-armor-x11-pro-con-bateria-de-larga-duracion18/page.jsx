// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Smartphone resistente Ulefone Power Armor X11 Pro con batería de larga duración | CASAN Promo Center',
    description: 'El Ulefone Power Armor X11 Pro es el smartphone perfecto para quienes buscan un dispositivo resistente, eficiente y duradero. Diseñado con una carcasa robusta, es ideal para actividades al aire libre o en entornos exigentes. Este modelo combina un potente rendimiento gracias a sus 4 GB de RAM y 64 GB de almacenamiento interno, con una pantalla compacta de 5,45 Pulgadas que ofrece una resolución nítida para disfrutar de tus aplicaciones favoritas. La batería de 8150 mAh asegura largas horas de uso sin preocuparte por la carga, mientras que su tecnología Android 12 y conectividad 4G te mantienen actualizado y conectado. Con funciones como reconocimiento facial, NFC y cámara frontal, este smartphone ofrece practicidad y seguridad en cada detalle. | CASAN Promo Center',
    keywords: 'smartphone resistente, Ulefone Power Armor X11 Pro, batería larga duración, móvil Android 12, pantalla 5,45 pulgadas, móvil dual SIM, teléfono 4G, smartphone con NFC, teléfono duradero, móvil para exteriores',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Smartphone resistente Ulefone Power Armor X11 Pro con batería de larga duración | CASAN Promo Center',
        description: 'El Ulefone Power Armor X11 Pro es el smartphone perfecto para quienes buscan un dispositivo resistente, eficiente y duradero. Diseñado con una carcasa robusta, es ideal para actividades al aire libre o en entornos exigentes. Este modelo combina un potente rendimiento gracias a sus 4 GB de RAM y 64 GB de almacenamiento interno, con una pantalla compacta de 5,45 Pulgadas que ofrece una resolución nítida para disfrutar de tus aplicaciones favoritas. La batería de 8150 mAh asegura largas horas de uso sin preocuparte por la carga, mientras que su tecnología Android 12 y conectividad 4G te mantienen actualizado y conectado. Con funciones como reconocimiento facial, NFC y cámara frontal, este smartphone ofrece practicidad y seguridad en cada detalle. | CASAN Promo Center',
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
        title: 'Smartphone resistente Ulefone Power Armor X11 Pro con batería de larga duración | CASAN Promo Center',
        description: 'El Ulefone Power Armor X11 Pro es el smartphone perfecto para quienes buscan un dispositivo resistente, eficiente y duradero. Diseñado con una carcasa robusta, es ideal para actividades al aire libre o en entornos exigentes. Este modelo combina un potente rendimiento gracias a sus 4 GB de RAM y 64 GB de almacenamiento interno, con una pantalla compacta de 5,45 Pulgadas que ofrece una resolución nítida para disfrutar de tus aplicaciones favoritas. La batería de 8150 mAh asegura largas horas de uso sin preocuparte por la carga, mientras que su tecnología Android 12 y conectividad 4G te mantienen actualizado y conectado. Con funciones como reconocimiento facial, NFC y cámara frontal, este smartphone ofrece practicidad y seguridad en cada detalle. | CASAN Promo Center',
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
