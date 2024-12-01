// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
    description: 'La Samsung Galaxy Tab A9+ es la tablet perfecta para quienes buscan un dispositivo versátil, elegante y con un rendimiento confiable. Con 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet te permite disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos sin interrupciones. Su pantalla de 11 Pulgadas, con tecnología AMOLED, ofrece colores vibrantes y una experiencia visual inmersiva, ideal para entretenimiento y productividad. Gracias a su conectividad 4G, podrás mantenerte conectado en cualquier lugar, mientras que su batería de litio de alta capacidad asegura largas horas de uso continuo. Con un diseño contemporáneo y materiales de calidad óptima, esta tablet combina funcionalidad y estilo, siendo una excelente opción para el hogar, el trabajo o los estudios. | CASAN Promo Center',
    keywords: 'Samsung Galaxy Tab A9+, tablet pantalla AMOLED 11 pulgadas, tablet 4G, tablet con 4 GB RAM, almacenamiento 64 GB, tablet Samsung gris, tablet para entretenimiento, tablet para productividad, tablet con batería de larga duración, tablet diseño contemporáneo',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A9+ es la tablet perfecta para quienes buscan un dispositivo versátil, elegante y con un rendimiento confiable. Con 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet te permite disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos sin interrupciones. Su pantalla de 11 Pulgadas, con tecnología AMOLED, ofrece colores vibrantes y una experiencia visual inmersiva, ideal para entretenimiento y productividad. Gracias a su conectividad 4G, podrás mantenerte conectado en cualquier lugar, mientras que su batería de litio de alta capacidad asegura largas horas de uso continuo. Con un diseño contemporáneo y materiales de calidad óptima, esta tablet combina funcionalidad y estilo, siendo una excelente opción para el hogar, el trabajo o los estudios. | CASAN Promo Center',
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
        title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 64 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A9+ es la tablet perfecta para quienes buscan un dispositivo versátil, elegante y con un rendimiento confiable. Con 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet te permite disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos sin interrupciones. Su pantalla de 11 Pulgadas, con tecnología AMOLED, ofrece colores vibrantes y una experiencia visual inmersiva, ideal para entretenimiento y productividad. Gracias a su conectividad 4G, podrás mantenerte conectado en cualquier lugar, mientras que su batería de litio de alta capacidad asegura largas horas de uso continuo. Con un diseño contemporáneo y materiales de calidad óptima, esta tablet combina funcionalidad y estilo, siendo una excelente opción para el hogar, el trabajo o los estudios. | CASAN Promo Center',
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
