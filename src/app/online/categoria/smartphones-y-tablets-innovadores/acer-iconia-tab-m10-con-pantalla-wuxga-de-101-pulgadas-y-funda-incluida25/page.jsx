// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida | CASAN Promo Center',
    description: 'La Acer Iconia Tab M10 es una tablet diseñada para ofrecer rendimiento, calidad visual y portabilidad. Con su pantalla WUXGA de 10,1 Pulgadas y resolución de 1920x1200 píxeles, proporciona imágenes nítidas y vibrantes, ideal para entretenimiento, trabajo o estudios.  Equipada con un procesador MediaTek MT8183 Octa-Core y 4 GB de RAM, esta tablet garantiza un funcionamiento fluido para realizar multitareas, disfrutar de contenido multimedia o navegar sin interrupciones. Su almacenamiento interno de 64 GB es ampliable mediante tarjeta MicroSD, ofreciendo espacio suficiente para todas tus aplicaciones y archivos. La Iconia Tab M10 cuenta con altavoces estéreo integrados para una experiencia de audio envolvente, conectividad Bluetooth, Wi-Fi y puerto USB-C para mayor versatilidad. Además, incluye cámaras frontal y trasera, perfectas para videollamadas y capturar momentos importantes. Todo esto, complementado con su diseño plateado elegante y una funda incluida para mayor protección y comodidad. | CASAN Promo Center',
    keywords: 'Acer Iconia Tab M10, tablet 10,1 pulgadas WUXGA, tablet Android 12, tablet con 4 GB RAM, tablet 64 GB almacenamiento, tablet con funda incluida, tablet multitarea, tablet con altavoces estéreo, tablet con cámara frontal y trasera, tablet elegante plateado',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida | CASAN Promo Center',
        description: 'La Acer Iconia Tab M10 es una tablet diseñada para ofrecer rendimiento, calidad visual y portabilidad. Con su pantalla WUXGA de 10,1 Pulgadas y resolución de 1920x1200 píxeles, proporciona imágenes nítidas y vibrantes, ideal para entretenimiento, trabajo o estudios.  Equipada con un procesador MediaTek MT8183 Octa-Core y 4 GB de RAM, esta tablet garantiza un funcionamiento fluido para realizar multitareas, disfrutar de contenido multimedia o navegar sin interrupciones. Su almacenamiento interno de 64 GB es ampliable mediante tarjeta MicroSD, ofreciendo espacio suficiente para todas tus aplicaciones y archivos. La Iconia Tab M10 cuenta con altavoces estéreo integrados para una experiencia de audio envolvente, conectividad Bluetooth, Wi-Fi y puerto USB-C para mayor versatilidad. Además, incluye cámaras frontal y trasera, perfectas para videollamadas y capturar momentos importantes. Todo esto, complementado con su diseño plateado elegante y una funda incluida para mayor protección y comodidad. | CASAN Promo Center',
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
        title: 'Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida | CASAN Promo Center',
        description: 'La Acer Iconia Tab M10 es una tablet diseñada para ofrecer rendimiento, calidad visual y portabilidad. Con su pantalla WUXGA de 10,1 Pulgadas y resolución de 1920x1200 píxeles, proporciona imágenes nítidas y vibrantes, ideal para entretenimiento, trabajo o estudios.  Equipada con un procesador MediaTek MT8183 Octa-Core y 4 GB de RAM, esta tablet garantiza un funcionamiento fluido para realizar multitareas, disfrutar de contenido multimedia o navegar sin interrupciones. Su almacenamiento interno de 64 GB es ampliable mediante tarjeta MicroSD, ofreciendo espacio suficiente para todas tus aplicaciones y archivos. La Iconia Tab M10 cuenta con altavoces estéreo integrados para una experiencia de audio envolvente, conectividad Bluetooth, Wi-Fi y puerto USB-C para mayor versatilidad. Además, incluye cámaras frontal y trasera, perfectas para videollamadas y capturar momentos importantes. Todo esto, complementado con su diseño plateado elegante y una funda incluida para mayor protección y comodidad. | CASAN Promo Center',
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
