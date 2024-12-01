// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración | CASAN Promo Center',
    description: 'Descubre la innovación con la Google Pixel Tablet, diseñada para transformar tu experiencia digital. Equipada con el avanzado procesador Tensor G2, esta tablet combina un rendimiento ágil con la inteligencia artificial de Google, facilitando videollamadas nítidas, streaming fluido y una navegación rápida. Su pantalla de 11 pulgadas ofrece colores vivos y brillo adaptativo, ideal para disfrutar tus series favoritas o editar fotos con precisión. Con 8 GB de RAM y 256 GB de almacenamiento, tendrás espacio y potencia para todas tus aplicaciones y proyectos. Además, la batería de larga duración te permite usarla hasta 12 horas seguidas, asegurando entretenimiento y productividad sin interrupciones. Dale un toque creativo con el lápiz Pixel o realiza tareas cómodamente con su teclado dedicado. Comparte contenido fácilmente entre dispositivos gracias a funciones como Quick Share y transferencia directa. ¡El futuro está en tus manos con la Pixel Tablet! | CASAN Promo Center',
    keywords: 'tablet android, Google Pixel Tablet, tablet 11 pulgadas, tablet IA, tablet batería larga duración, tablet 256 GB almacenamiento, tablet para videollamadas, Pixel Tablet verde liquen, mejor tablet para streaming, tablet profesional',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración | CASAN Promo Center',
        description: 'Descubre la innovación con la Google Pixel Tablet, diseñada para transformar tu experiencia digital. Equipada con el avanzado procesador Tensor G2, esta tablet combina un rendimiento ágil con la inteligencia artificial de Google, facilitando videollamadas nítidas, streaming fluido y una navegación rápida. Su pantalla de 11 pulgadas ofrece colores vivos y brillo adaptativo, ideal para disfrutar tus series favoritas o editar fotos con precisión. Con 8 GB de RAM y 256 GB de almacenamiento, tendrás espacio y potencia para todas tus aplicaciones y proyectos. Además, la batería de larga duración te permite usarla hasta 12 horas seguidas, asegurando entretenimiento y productividad sin interrupciones. Dale un toque creativo con el lápiz Pixel o realiza tareas cómodamente con su teclado dedicado. Comparte contenido fácilmente entre dispositivos gracias a funciones como Quick Share y transferencia directa. ¡El futuro está en tus manos con la Pixel Tablet! | CASAN Promo Center',
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
        title: 'Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración | CASAN Promo Center',
        description: 'Descubre la innovación con la Google Pixel Tablet, diseñada para transformar tu experiencia digital. Equipada con el avanzado procesador Tensor G2, esta tablet combina un rendimiento ágil con la inteligencia artificial de Google, facilitando videollamadas nítidas, streaming fluido y una navegación rápida. Su pantalla de 11 pulgadas ofrece colores vivos y brillo adaptativo, ideal para disfrutar tus series favoritas o editar fotos con precisión. Con 8 GB de RAM y 256 GB de almacenamiento, tendrás espacio y potencia para todas tus aplicaciones y proyectos. Además, la batería de larga duración te permite usarla hasta 12 horas seguidas, asegurando entretenimiento y productividad sin interrupciones. Dale un toque creativo con el lápiz Pixel o realiza tareas cómodamente con su teclado dedicado. Comparte contenido fácilmente entre dispositivos gracias a funciones como Quick Share y transferencia directa. ¡El futuro está en tus manos con la Pixel Tablet! | CASAN Promo Center',
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
