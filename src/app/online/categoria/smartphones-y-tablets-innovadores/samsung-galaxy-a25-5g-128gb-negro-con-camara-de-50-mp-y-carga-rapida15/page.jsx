// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Samsung Galaxy A25 5G 128GB Negro con Cámara de 50 MP y Carga Rápida | CASAN Promo Center',
    description: 'El Samsung Galaxy A25 5G es el smartphone ideal para quienes buscan rendimiento, diseño y tecnología avanzada. Su pantalla Super AMOLED de 6,5 pulgadas ofrece colores vibrantes y detalles impresionantes, incluso bajo luz solar intensa, gracias a su brillo de hasta 1000 nits y Vision Booster. Además, el Eye Comfort Shield reduce la emisión de luz azul para proteger tu vista durante largas horas de uso. Equípate con una Cámara Principal de 50 MP con estabilización óptica (OIS) para capturar imágenes nítidas y videos suaves, mientras que la cámara frontal de 13 MP asegura selfies impecables. Con su tecnología VDIS y frecuencia de muestreo de movimiento de 500Hz, tus videos serán estables y llenos de detalles, perfectos para compartir. Este smartphone combina la potencia del procesador Exynos 1280, 6GB de RAM y 128GB de almacenamiento (ampliable a 1TB con tarjeta microSD), junto con la conectividad 5G, para un rendimiento rápido y eficiente. Su batería de 5.000 mAh con Carga Súper Rápida te mantiene activo todo el día. Además, incluye una funda transparente para proteger tu dispositivo con estilo. | CASAN Promo Center',
    keywords: 'Samsung Galaxy A25 5G, smartphone Galaxy 128GB, cámara 50 MP con OIS, pantalla Super AMOLED, móvil Android 5G, Galaxy carga súper rápida, Galaxy A25 funda incluida, smartphone diseño minimalista, Galaxy batería 5000 mAh.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Samsung Galaxy A25 5G 128GB Negro con Cámara de 50 MP y Carga Rápida | CASAN Promo Center',
        description: 'El Samsung Galaxy A25 5G es el smartphone ideal para quienes buscan rendimiento, diseño y tecnología avanzada. Su pantalla Super AMOLED de 6,5 pulgadas ofrece colores vibrantes y detalles impresionantes, incluso bajo luz solar intensa, gracias a su brillo de hasta 1000 nits y Vision Booster. Además, el Eye Comfort Shield reduce la emisión de luz azul para proteger tu vista durante largas horas de uso. Equípate con una Cámara Principal de 50 MP con estabilización óptica (OIS) para capturar imágenes nítidas y videos suaves, mientras que la cámara frontal de 13 MP asegura selfies impecables. Con su tecnología VDIS y frecuencia de muestreo de movimiento de 500Hz, tus videos serán estables y llenos de detalles, perfectos para compartir. Este smartphone combina la potencia del procesador Exynos 1280, 6GB de RAM y 128GB de almacenamiento (ampliable a 1TB con tarjeta microSD), junto con la conectividad 5G, para un rendimiento rápido y eficiente. Su batería de 5.000 mAh con Carga Súper Rápida te mantiene activo todo el día. Además, incluye una funda transparente para proteger tu dispositivo con estilo. | CASAN Promo Center',
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
        title: 'Samsung Galaxy A25 5G 128GB Negro con Cámara de 50 MP y Carga Rápida | CASAN Promo Center',
        description: 'El Samsung Galaxy A25 5G es el smartphone ideal para quienes buscan rendimiento, diseño y tecnología avanzada. Su pantalla Super AMOLED de 6,5 pulgadas ofrece colores vibrantes y detalles impresionantes, incluso bajo luz solar intensa, gracias a su brillo de hasta 1000 nits y Vision Booster. Además, el Eye Comfort Shield reduce la emisión de luz azul para proteger tu vista durante largas horas de uso. Equípate con una Cámara Principal de 50 MP con estabilización óptica (OIS) para capturar imágenes nítidas y videos suaves, mientras que la cámara frontal de 13 MP asegura selfies impecables. Con su tecnología VDIS y frecuencia de muestreo de movimiento de 500Hz, tus videos serán estables y llenos de detalles, perfectos para compartir. Este smartphone combina la potencia del procesador Exynos 1280, 6GB de RAM y 128GB de almacenamiento (ampliable a 1TB con tarjeta microSD), junto con la conectividad 5G, para un rendimiento rápido y eficiente. Su batería de 5.000 mAh con Carga Súper Rápida te mantiene activo todo el día. Además, incluye una funda transparente para proteger tu dispositivo con estilo. | CASAN Promo Center',
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
