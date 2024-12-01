// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente | CASAN Promo Center',
    description: 'Descubre el rendimiento eficiente y la versatilidad del Chromebook ASUS CX1, diseñado para ofrecerte productividad y entretenimiento sin complicaciones. Con una pantalla FHD de 14 Pulgadas, este portátil es perfecto para trabajar, estudiar o disfrutar de tus series favoritas. Equipado con el procesador Intel Celeron N4500, 4 GB de RAM y 64 GB de almacenamiento, combina potencia y velocidad en un diseño ligero y portátil. Además, su sistema operativo ChromeOS garantiza una experiencia intuitiva y optimizada para la nube. Ideal para quienes buscan un dispositivo confiable y de alto rendimiento para el día a día. | CASAN Promo Center',
    keywords: 'Chromebook ASUS CX1, portátil 14 pulgadas, Chromebook ligero, laptop ChromeOS, Intel Celeron N4500, portátil para estudiantes, computadora ultraportátil, Chromebook duradero, Chromebook con WiFi 6, portátil con teclado numérico',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente | CASAN Promo Center',
        description: 'Descubre el rendimiento eficiente y la versatilidad del Chromebook ASUS CX1, diseñado para ofrecerte productividad y entretenimiento sin complicaciones. Con una pantalla FHD de 14 Pulgadas, este portátil es perfecto para trabajar, estudiar o disfrutar de tus series favoritas. Equipado con el procesador Intel Celeron N4500, 4 GB de RAM y 64 GB de almacenamiento, combina potencia y velocidad en un diseño ligero y portátil. Además, su sistema operativo ChromeOS garantiza una experiencia intuitiva y optimizada para la nube. Ideal para quienes buscan un dispositivo confiable y de alto rendimiento para el día a día. | CASAN Promo Center',
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
        title: 'Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente | CASAN Promo Center',
        description: 'Descubre el rendimiento eficiente y la versatilidad del Chromebook ASUS CX1, diseñado para ofrecerte productividad y entretenimiento sin complicaciones. Con una pantalla FHD de 14 Pulgadas, este portátil es perfecto para trabajar, estudiar o disfrutar de tus series favoritas. Equipado con el procesador Intel Celeron N4500, 4 GB de RAM y 64 GB de almacenamiento, combina potencia y velocidad en un diseño ligero y portátil. Además, su sistema operativo ChromeOS garantiza una experiencia intuitiva y optimizada para la nube. Ideal para quienes buscan un dispositivo confiable y de alto rendimiento para el día a día. | CASAN Promo Center',
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
