// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tablet de 8 Pulgadas con Cuerpo de Metal Dorado y SIM Dual | CASAN Promo Center',
    description: 'Sumérgete en la tecnología avanzada con esta Tablet de 8 pulgadas, diseñada para ofrecer rendimiento, estilo y funcionalidad. Su cuerpo metálico en elegante tono dorado combina con una pantalla IPS de alta resolución (1920x1200), ideal para disfrutar de imágenes vibrantes y nítidas. Con una CPU Octa Core, 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet garantiza un desempeño fluido, perfecto para multitarea y aplicaciones exigentes. La batería de 8800 mAh asegura largas horas de uso continuo, ya sea para trabajar, jugar o relajarte con tus series y libros favoritos. Además, su doble ranura SIM te permite mantenerte conectado, y la configuración de cámara dual (frontal de 2 MP y trasera de 8 MP) captura cada detalle de tus momentos importantes, incluso durante videollamadas. Esta tablet es tu compañera ideal, tanto para el día a día como para viajes. | CASAN Promo Center',
    keywords: 'tablet 8 pulgadas, tablet metal dorado, tablet CPU Octa Core, tablet con SIM dual, tablet batería larga duración, tablet 4 GB RAM, tablet 64 GB ROM, mejor tablet para viajar, tablet con pantalla IPS, tablet para multitarea',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tablet de 8 Pulgadas con Cuerpo de Metal Dorado y SIM Dual | CASAN Promo Center',
        description: 'Sumérgete en la tecnología avanzada con esta Tablet de 8 pulgadas, diseñada para ofrecer rendimiento, estilo y funcionalidad. Su cuerpo metálico en elegante tono dorado combina con una pantalla IPS de alta resolución (1920x1200), ideal para disfrutar de imágenes vibrantes y nítidas. Con una CPU Octa Core, 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet garantiza un desempeño fluido, perfecto para multitarea y aplicaciones exigentes. La batería de 8800 mAh asegura largas horas de uso continuo, ya sea para trabajar, jugar o relajarte con tus series y libros favoritos. Además, su doble ranura SIM te permite mantenerte conectado, y la configuración de cámara dual (frontal de 2 MP y trasera de 8 MP) captura cada detalle de tus momentos importantes, incluso durante videollamadas. Esta tablet es tu compañera ideal, tanto para el día a día como para viajes. | CASAN Promo Center',
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
        title: 'Tablet de 8 Pulgadas con Cuerpo de Metal Dorado y SIM Dual | CASAN Promo Center',
        description: 'Sumérgete en la tecnología avanzada con esta Tablet de 8 pulgadas, diseñada para ofrecer rendimiento, estilo y funcionalidad. Su cuerpo metálico en elegante tono dorado combina con una pantalla IPS de alta resolución (1920x1200), ideal para disfrutar de imágenes vibrantes y nítidas. Con una CPU Octa Core, 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet garantiza un desempeño fluido, perfecto para multitarea y aplicaciones exigentes. La batería de 8800 mAh asegura largas horas de uso continuo, ya sea para trabajar, jugar o relajarte con tus series y libros favoritos. Además, su doble ranura SIM te permite mantenerte conectado, y la configuración de cámara dual (frontal de 2 MP y trasera de 8 MP) captura cada detalle de tus momentos importantes, incluso durante videollamadas. Esta tablet es tu compañera ideal, tanto para el día a día como para viajes. | CASAN Promo Center',
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
