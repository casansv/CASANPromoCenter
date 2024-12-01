// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024 | CASAN Promo Center',
    description: 'Descubre la combinación perfecta entre estilo, rendimiento y portabilidad con el Chromebook Lenovo Slim 3. Diseñado para simplificar tu día a día, este portátil ultraligero de 14 Pulgadas en elegante color azul Abyss ofrece una experiencia única con su procesador MediaTek Kompanio 520 y sistema operativo Chrome OS. Con 4 GB de RAM, 64 GB de almacenamiento y una batería de hasta 13.5 horas de duración, es ideal para trabajar, estudiar o disfrutar de tus contenidos favoritos. Sus altavoces estéreo MaxxAudio® Waves y pantalla HD garantizan un sonido y visuales excepcionales, mientras que la cámara HD con obturador de privacidad cuida de tu seguridad. ¡Llévalo a todas partes y mantente productivo con estilo! | CASAN Promo Center',
    keywords: 'Chromebook Lenovo Slim 3, portátil 2024, laptop ligera, 14 pulgadas HD, MediaTek Kompanio 520, altavoces MaxxAudio, batería larga duración, Chromebook para estudiantes, portátil azul elegante, laptop Chrome OS, Lenovo compacto.',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024 | CASAN Promo Center',
        description: 'Descubre la combinación perfecta entre estilo, rendimiento y portabilidad con el Chromebook Lenovo Slim 3. Diseñado para simplificar tu día a día, este portátil ultraligero de 14 Pulgadas en elegante color azul Abyss ofrece una experiencia única con su procesador MediaTek Kompanio 520 y sistema operativo Chrome OS. Con 4 GB de RAM, 64 GB de almacenamiento y una batería de hasta 13.5 horas de duración, es ideal para trabajar, estudiar o disfrutar de tus contenidos favoritos. Sus altavoces estéreo MaxxAudio® Waves y pantalla HD garantizan un sonido y visuales excepcionales, mientras que la cámara HD con obturador de privacidad cuida de tu seguridad. ¡Llévalo a todas partes y mantente productivo con estilo! | CASAN Promo Center',
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
        title: 'Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024 | CASAN Promo Center',
        description: 'Descubre la combinación perfecta entre estilo, rendimiento y portabilidad con el Chromebook Lenovo Slim 3. Diseñado para simplificar tu día a día, este portátil ultraligero de 14 Pulgadas en elegante color azul Abyss ofrece una experiencia única con su procesador MediaTek Kompanio 520 y sistema operativo Chrome OS. Con 4 GB de RAM, 64 GB de almacenamiento y una batería de hasta 13.5 horas de duración, es ideal para trabajar, estudiar o disfrutar de tus contenidos favoritos. Sus altavoces estéreo MaxxAudio® Waves y pantalla HD garantizan un sonido y visuales excepcionales, mientras que la cámara HD con obturador de privacidad cuida de tu seguridad. ¡Llévalo a todas partes y mantente productivo con estilo! | CASAN Promo Center',
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
