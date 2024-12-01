// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'vivo Y17s 128GB con Triple Cámara de 50 MP y Pantalla HD+ 6,56 Pulgadas | CASAN Promo Center',
    description: 'El vivo Y17s es el smartphone que combina diseño moderno, potencia y versatilidad para ofrecerte una experiencia excepcional. Con 4GB de RAM y 128GB de almacenamiento, junto con funciones avanzadas como RAM Extendida 3.0, este dispositivo garantiza un rendimiento fluido y una capacidad amplia para todas tus aplicaciones y archivos. Su sistema de triple cámara de 50 MP permite capturar imágenes impresionantes en cualquier situación. Desde retratos con efecto bokeh hasta fotos macro detalladas, el Y17s asegura calidad profesional, incluso en condiciones de poca luz. Además, su pantalla HD+ de 6,56 pulgadas de alto brillo ofrece colores vibrantes y visibilidad impecable, incluso bajo luz solar intensa. El diseño delgado de 8,09 mm, con acabado 2.5D y materiales de primera calidad, no solo es elegante, sino también resistente. Gracias a la certificación IP54, el vivo Y17s es resistente al agua y al polvo, ideal para acompañarte en cualquier aventura. Su batería de 5000 mAh con carga rápida de 15W asegura horas de uso ininterrumpido para tus actividades diarias, desde escuchar música hasta jugar y disfrutar de videos. | CASAN Promo Center',
    keywords: 'vivo Y17s, smartphone vivo, triple cámara 50 MP, pantalla HD+ 6,56", batería 5000 mAh, vivo diseño IP54, móvil Android 13, smartphone carga rápida 15W, vivo 128GB ROM, vivo RAM Extendida.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'vivo Y17s 128GB con Triple Cámara de 50 MP y Pantalla HD+ 6,56 Pulgadas | CASAN Promo Center',
        description: 'El vivo Y17s es el smartphone que combina diseño moderno, potencia y versatilidad para ofrecerte una experiencia excepcional. Con 4GB de RAM y 128GB de almacenamiento, junto con funciones avanzadas como RAM Extendida 3.0, este dispositivo garantiza un rendimiento fluido y una capacidad amplia para todas tus aplicaciones y archivos. Su sistema de triple cámara de 50 MP permite capturar imágenes impresionantes en cualquier situación. Desde retratos con efecto bokeh hasta fotos macro detalladas, el Y17s asegura calidad profesional, incluso en condiciones de poca luz. Además, su pantalla HD+ de 6,56 pulgadas de alto brillo ofrece colores vibrantes y visibilidad impecable, incluso bajo luz solar intensa. El diseño delgado de 8,09 mm, con acabado 2.5D y materiales de primera calidad, no solo es elegante, sino también resistente. Gracias a la certificación IP54, el vivo Y17s es resistente al agua y al polvo, ideal para acompañarte en cualquier aventura. Su batería de 5000 mAh con carga rápida de 15W asegura horas de uso ininterrumpido para tus actividades diarias, desde escuchar música hasta jugar y disfrutar de videos. | CASAN Promo Center',
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
        title: 'vivo Y17s 128GB con Triple Cámara de 50 MP y Pantalla HD+ 6,56 Pulgadas | CASAN Promo Center',
        description: 'El vivo Y17s es el smartphone que combina diseño moderno, potencia y versatilidad para ofrecerte una experiencia excepcional. Con 4GB de RAM y 128GB de almacenamiento, junto con funciones avanzadas como RAM Extendida 3.0, este dispositivo garantiza un rendimiento fluido y una capacidad amplia para todas tus aplicaciones y archivos. Su sistema de triple cámara de 50 MP permite capturar imágenes impresionantes en cualquier situación. Desde retratos con efecto bokeh hasta fotos macro detalladas, el Y17s asegura calidad profesional, incluso en condiciones de poca luz. Además, su pantalla HD+ de 6,56 pulgadas de alto brillo ofrece colores vibrantes y visibilidad impecable, incluso bajo luz solar intensa. El diseño delgado de 8,09 mm, con acabado 2.5D y materiales de primera calidad, no solo es elegante, sino también resistente. Gracias a la certificación IP54, el vivo Y17s es resistente al agua y al polvo, ideal para acompañarte en cualquier aventura. Su batería de 5000 mAh con carga rápida de 15W asegura horas de uso ininterrumpido para tus actividades diarias, desde escuchar música hasta jugar y disfrutar de videos. | CASAN Promo Center',
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
