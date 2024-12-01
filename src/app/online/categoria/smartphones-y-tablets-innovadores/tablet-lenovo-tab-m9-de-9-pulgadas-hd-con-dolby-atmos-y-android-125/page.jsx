// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12 | CASAN Promo Center',
    description: 'La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de 9 pulgadas, combinada con altavoces estéreo duales mejorados con Dolby Atmos, crea una experiencia cinematográfica envolvente en la palma de tu mano. Potenciada por el procesador MediaTek Helio G80 y 3 GB de RAM, esta tablet garantiza un rendimiento fluido, ya sea para jugar, navegar o realizar tareas cotidianas. Además, cuenta con 32 GB de almacenamiento interno, ampliables hasta 2 TB mediante tarjeta microSD (se vende por separado), para que nunca te quedes sin espacio para tus aplicaciones, fotos o videos. La batería de larga duración te permite disfrutar de tus series y películas favoritas sin interrupciones, mientras el modo de lectura envolvente y la certificación TUV protegen tu vista, haciéndola perfecta para largas sesiones de lectura. Incluye funda y película protectora para mayor practicidad y protección. | CASAN Promo Center',
    keywords: 'tablet Lenovo Tab M9, tablet 9 pulgadas HD, tablet Dolby Atmos, tablet MediaTek Helio G80, tablet con batería larga duración, tablet con modo de lectura, tablet ampliable 2 TB, tablet Android 12, tablet WiFi y Bluetooth 5.1, tablet para juegos y entretenimiento',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12 | CASAN Promo Center',
        description: 'La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de 9 pulgadas, combinada con altavoces estéreo duales mejorados con Dolby Atmos, crea una experiencia cinematográfica envolvente en la palma de tu mano. Potenciada por el procesador MediaTek Helio G80 y 3 GB de RAM, esta tablet garantiza un rendimiento fluido, ya sea para jugar, navegar o realizar tareas cotidianas. Además, cuenta con 32 GB de almacenamiento interno, ampliables hasta 2 TB mediante tarjeta microSD (se vende por separado), para que nunca te quedes sin espacio para tus aplicaciones, fotos o videos. La batería de larga duración te permite disfrutar de tus series y películas favoritas sin interrupciones, mientras el modo de lectura envolvente y la certificación TUV protegen tu vista, haciéndola perfecta para largas sesiones de lectura. Incluye funda y película protectora para mayor practicidad y protección. | CASAN Promo Center',
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
        title: 'Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12 | CASAN Promo Center',
        description: 'La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de 9 pulgadas, combinada con altavoces estéreo duales mejorados con Dolby Atmos, crea una experiencia cinematográfica envolvente en la palma de tu mano. Potenciada por el procesador MediaTek Helio G80 y 3 GB de RAM, esta tablet garantiza un rendimiento fluido, ya sea para jugar, navegar o realizar tareas cotidianas. Además, cuenta con 32 GB de almacenamiento interno, ampliables hasta 2 TB mediante tarjeta microSD (se vende por separado), para que nunca te quedes sin espacio para tus aplicaciones, fotos o videos. La batería de larga duración te permite disfrutar de tus series y películas favoritas sin interrupciones, mientras el modo de lectura envolvente y la certificación TUV protegen tu vista, haciéndola perfecta para largas sesiones de lectura. Incluye funda y película protectora para mayor practicidad y protección. | CASAN Promo Center',
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
