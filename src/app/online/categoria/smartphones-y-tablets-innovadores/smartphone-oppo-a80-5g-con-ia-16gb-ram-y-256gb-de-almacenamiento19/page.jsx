// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Smartphone OPPO A80 5G con IA, 16GB RAM y 256GB de Almacenamiento | CASAN Promo Center',
    description: 'El OPPO A80 5G es el smartphone diseñado para quienes buscan innovación, diseño y rendimiento excepcional. Con inteligencia artificial avanzada, una pantalla HD+ de 6,67 Pulgadas y conectividad 5G, este dispositivo eleva tu experiencia tecnológica al máximo. Disfruta de funciones inteligentes como AI Eraser para editar tus fotos al instante y AI LinkBoost para optimizar la conexión en cualquier lugar. Su batería de 5.100 mAh con carga rápida SUPERVOOC de 45W asegura que siempre estés conectado, mientras que el elegante diseño OPPO Glow combina ligereza y estilo con resistencia a huellas y arañazos. Con una cámara triple de 50 MP + 2 MP + 8 MP, captura momentos increíbles con detalle y precisión. Además, su pantalla fluida de 120 Hz y el sonido Ultra Volumen 300% ofrecen una experiencia inmersiva ideal para entretenimiento y juegos. | CASAN Promo Center',
    keywords: 'smartphone OPPO A80 5G, móvil Android 14, pantalla HD+ 6,67 pulgadas, carga rápida 45W, cámara triple 50MP, móvil con IA, smartphone 5G, batería de 5100mAh, diseño OPPO Glow, móvil con 16GB RAM, smartphone para fotos y vídeos',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Smartphone OPPO A80 5G con IA, 16GB RAM y 256GB de Almacenamiento | CASAN Promo Center',
        description: 'El OPPO A80 5G es el smartphone diseñado para quienes buscan innovación, diseño y rendimiento excepcional. Con inteligencia artificial avanzada, una pantalla HD+ de 6,67 Pulgadas y conectividad 5G, este dispositivo eleva tu experiencia tecnológica al máximo. Disfruta de funciones inteligentes como AI Eraser para editar tus fotos al instante y AI LinkBoost para optimizar la conexión en cualquier lugar. Su batería de 5.100 mAh con carga rápida SUPERVOOC de 45W asegura que siempre estés conectado, mientras que el elegante diseño OPPO Glow combina ligereza y estilo con resistencia a huellas y arañazos. Con una cámara triple de 50 MP + 2 MP + 8 MP, captura momentos increíbles con detalle y precisión. Además, su pantalla fluida de 120 Hz y el sonido Ultra Volumen 300% ofrecen una experiencia inmersiva ideal para entretenimiento y juegos. | CASAN Promo Center',
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
        title: 'Smartphone OPPO A80 5G con IA, 16GB RAM y 256GB de Almacenamiento | CASAN Promo Center',
        description: 'El OPPO A80 5G es el smartphone diseñado para quienes buscan innovación, diseño y rendimiento excepcional. Con inteligencia artificial avanzada, una pantalla HD+ de 6,67 Pulgadas y conectividad 5G, este dispositivo eleva tu experiencia tecnológica al máximo. Disfruta de funciones inteligentes como AI Eraser para editar tus fotos al instante y AI LinkBoost para optimizar la conexión en cualquier lugar. Su batería de 5.100 mAh con carga rápida SUPERVOOC de 45W asegura que siempre estés conectado, mientras que el elegante diseño OPPO Glow combina ligereza y estilo con resistencia a huellas y arañazos. Con una cámara triple de 50 MP + 2 MP + 8 MP, captura momentos increíbles con detalle y precisión. Además, su pantalla fluida de 120 Hz y el sonido Ultra Volumen 300% ofrecen una experiencia inmersiva ideal para entretenimiento y juegos. | CASAN Promo Center',
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
