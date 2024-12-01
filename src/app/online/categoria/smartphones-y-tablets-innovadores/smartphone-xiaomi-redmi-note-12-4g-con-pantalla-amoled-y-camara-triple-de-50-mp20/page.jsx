// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Smartphone Xiaomi Redmi Note 12 4G con pantalla AMOLED y cámara triple de 50 MP | CASAN Promo Center',
    description: 'El Xiaomi Redmi Note 12 4G es el compañero perfecto para quienes buscan un smartphone potente y versátil. Equipado con una impresionante pantalla AMOLED FHD+ de 6,67 Pulgadas y frecuencia de actualización de 120 Hz, este dispositivo ofrece una experiencia visual inmersiva y fluida, ideal para disfrutar de contenido multimedia, juegos y más. Gracias a su procesador Snapdragon 685 y 4 GB de RAM, disfrutarás de un rendimiento eficiente y multitarea sin interrupciones. Su batería de 5.000 mAh asegura largas horas de uso, mientras que la carga rápida de 33 W te permitirá volver a la acción en cuestión de minutos. La cámara triple de 50 MP es perfecta para capturar momentos inolvidables con gran claridad y detalle. Con funciones como Modo Nocturno y Retrato, cada foto será única, incluso en condiciones de poca luz. Todo esto en un diseño elegante disponible en colores modernos como gris ónix. | CASAN Promo Center',
    keywords: 'Xiaomi Redmi Note 12, smartphone AMOLED 6,67 pulgadas, cámara triple 50 MP, carga rápida 33W, móvil Snapdragon 685, batería 5000mAh, teléfono 4G Xiaomi, smartphone MIUI 13, móvil para fotos, Redmi Note 12 gris ónix',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Smartphone Xiaomi Redmi Note 12 4G con pantalla AMOLED y cámara triple de 50 MP | CASAN Promo Center',
        description: 'El Xiaomi Redmi Note 12 4G es el compañero perfecto para quienes buscan un smartphone potente y versátil. Equipado con una impresionante pantalla AMOLED FHD+ de 6,67 Pulgadas y frecuencia de actualización de 120 Hz, este dispositivo ofrece una experiencia visual inmersiva y fluida, ideal para disfrutar de contenido multimedia, juegos y más. Gracias a su procesador Snapdragon 685 y 4 GB de RAM, disfrutarás de un rendimiento eficiente y multitarea sin interrupciones. Su batería de 5.000 mAh asegura largas horas de uso, mientras que la carga rápida de 33 W te permitirá volver a la acción en cuestión de minutos. La cámara triple de 50 MP es perfecta para capturar momentos inolvidables con gran claridad y detalle. Con funciones como Modo Nocturno y Retrato, cada foto será única, incluso en condiciones de poca luz. Todo esto en un diseño elegante disponible en colores modernos como gris ónix. | CASAN Promo Center',
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
        title: 'Smartphone Xiaomi Redmi Note 12 4G con pantalla AMOLED y cámara triple de 50 MP | CASAN Promo Center',
        description: 'El Xiaomi Redmi Note 12 4G es el compañero perfecto para quienes buscan un smartphone potente y versátil. Equipado con una impresionante pantalla AMOLED FHD+ de 6,67 Pulgadas y frecuencia de actualización de 120 Hz, este dispositivo ofrece una experiencia visual inmersiva y fluida, ideal para disfrutar de contenido multimedia, juegos y más. Gracias a su procesador Snapdragon 685 y 4 GB de RAM, disfrutarás de un rendimiento eficiente y multitarea sin interrupciones. Su batería de 5.000 mAh asegura largas horas de uso, mientras que la carga rápida de 33 W te permitirá volver a la acción en cuestión de minutos. La cámara triple de 50 MP es perfecta para capturar momentos inolvidables con gran claridad y detalle. Con funciones como Modo Nocturno y Retrato, cada foto será única, incluso en condiciones de poca luz. Todo esto en un diseño elegante disponible en colores modernos como gris ónix. | CASAN Promo Center',
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
