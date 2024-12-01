// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Motorola Moto G24 con cámara de 50 MP y batería de 5000 mAh | CASAN Promo Center',
    description: 'El Motorola Moto G24 combina diseño, rendimiento y tecnología avanzada en un smartphone accesible. Su pantalla HD+ de 6,56 Pulgadas con frecuencia de actualización de 90 Hz te garantiza imágenes fluidas y colores vibrantes, ideal para disfrutar de tus películas, juegos y apps favoritas. Gracias a su sistema de cámara de 50 MP con Macro Vision, puedes capturar imágenes nítidas y detalladas, incluso en condiciones de poca luz. Explora de cerca con su lente macro especializado y crea recuerdos inolvidables con calidad profesional. Con 4 GB de RAM, almacenamiento de 128 GB y la posibilidad de expandir hasta 8 GB mediante Expansión de Memoria, este dispositivo asegura un rendimiento fluido incluso con múltiples tareas. Su batería de 5000 mAh con carga rápida TurboPower de 15 W te ofrece energía para todo el día y más. Además, la experiencia de sonido Dolby Atmos con altavoces estéreo proporciona un audio envolvente y de calidad superior, ideal para el entretenimiento. Incluye funda protectora para mayor comodidad y seguridad. | CASAN Promo Center',
    keywords: 'Motorola Moto G24, smartphone con cámara de 50 MP, pantalla HD+ 6,56 Pulgadas, móvil Android 14, batería 5000 mAh, carga rápida TurboPower, smartphone con Dolby Atmos, móvil con almacenamiento 128 GB, teléfono Dual SIM, móvil con diseño optimizado',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Motorola Moto G24 con cámara de 50 MP y batería de 5000 mAh | CASAN Promo Center',
        description: 'El Motorola Moto G24 combina diseño, rendimiento y tecnología avanzada en un smartphone accesible. Su pantalla HD+ de 6,56 Pulgadas con frecuencia de actualización de 90 Hz te garantiza imágenes fluidas y colores vibrantes, ideal para disfrutar de tus películas, juegos y apps favoritas. Gracias a su sistema de cámara de 50 MP con Macro Vision, puedes capturar imágenes nítidas y detalladas, incluso en condiciones de poca luz. Explora de cerca con su lente macro especializado y crea recuerdos inolvidables con calidad profesional. Con 4 GB de RAM, almacenamiento de 128 GB y la posibilidad de expandir hasta 8 GB mediante Expansión de Memoria, este dispositivo asegura un rendimiento fluido incluso con múltiples tareas. Su batería de 5000 mAh con carga rápida TurboPower de 15 W te ofrece energía para todo el día y más. Además, la experiencia de sonido Dolby Atmos con altavoces estéreo proporciona un audio envolvente y de calidad superior, ideal para el entretenimiento. Incluye funda protectora para mayor comodidad y seguridad. | CASAN Promo Center',
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
        title: 'Motorola Moto G24 con cámara de 50 MP y batería de 5000 mAh | CASAN Promo Center',
        description: 'El Motorola Moto G24 combina diseño, rendimiento y tecnología avanzada en un smartphone accesible. Su pantalla HD+ de 6,56 Pulgadas con frecuencia de actualización de 90 Hz te garantiza imágenes fluidas y colores vibrantes, ideal para disfrutar de tus películas, juegos y apps favoritas. Gracias a su sistema de cámara de 50 MP con Macro Vision, puedes capturar imágenes nítidas y detalladas, incluso en condiciones de poca luz. Explora de cerca con su lente macro especializado y crea recuerdos inolvidables con calidad profesional. Con 4 GB de RAM, almacenamiento de 128 GB y la posibilidad de expandir hasta 8 GB mediante Expansión de Memoria, este dispositivo asegura un rendimiento fluido incluso con múltiples tareas. Su batería de 5000 mAh con carga rápida TurboPower de 15 W te ofrece energía para todo el día y más. Además, la experiencia de sonido Dolby Atmos con altavoces estéreo proporciona un audio envolvente y de calidad superior, ideal para el entretenimiento. Incluye funda protectora para mayor comodidad y seguridad. | CASAN Promo Center',
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
