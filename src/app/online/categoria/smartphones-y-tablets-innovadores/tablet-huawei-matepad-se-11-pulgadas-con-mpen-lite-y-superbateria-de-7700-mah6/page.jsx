// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh | CASAN Promo Center',
    description: 'La HUAWEI MatePad SE 11 Pulgadas es la combinación perfecta entre diseño elegante y tecnología avanzada. Con un peso ligero de solo 475 g y un grosor de 6,9 mm, esta tablet es fácil de manejar y está diseñada para llevarla contigo a cualquier lugar. Su pantalla FullView de 11 pulgadas, con certificación TÜV Rheinland, protege tu vista con baja emisión de luz azul y tecnología sin parpadeos, permitiéndote disfrutar de sesiones prolongadas de lectura o entretenimiento sin fatiga visual. La experiencia inmersiva está garantizada gracias a sus cuatro altavoces simétricos, optimizados con la tecnología Histen 9.0, para un sonido nítido y adaptado a música, películas, juegos o clases en línea. Su lápiz óptico M-Pen Lite facilita la creatividad y la productividad, permitiéndote tomar notas y crear diseños sin necesidad de emparejamiento Bluetooth. Además, el modo Kids Corner brinda un espacio seguro para que los niños aprendan y jueguen bajo la supervisión de los padres, fomentando hábitos digitales saludables. Con una batería de 7700 mAh, la MatePad SE 11 Pulgadas ofrece horas de uso ininterrumpido para todas tus actividades diarias. | CASAN Promo Center',
    keywords: 'tablet HUAWEI MatePad SE, tablet 11 pulgadas FullView, tablet con M-Pen Lite, tablet batería 7700 mAh, tablet Kids Corner, tablet para familias, tablet con altavoces cuádruples, tablet ligera y portátil, tablet protección ocular, tablet WiFi Bluetooth HUAWEI',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh | CASAN Promo Center',
        description: 'La HUAWEI MatePad SE 11 Pulgadas es la combinación perfecta entre diseño elegante y tecnología avanzada. Con un peso ligero de solo 475 g y un grosor de 6,9 mm, esta tablet es fácil de manejar y está diseñada para llevarla contigo a cualquier lugar. Su pantalla FullView de 11 pulgadas, con certificación TÜV Rheinland, protege tu vista con baja emisión de luz azul y tecnología sin parpadeos, permitiéndote disfrutar de sesiones prolongadas de lectura o entretenimiento sin fatiga visual. La experiencia inmersiva está garantizada gracias a sus cuatro altavoces simétricos, optimizados con la tecnología Histen 9.0, para un sonido nítido y adaptado a música, películas, juegos o clases en línea. Su lápiz óptico M-Pen Lite facilita la creatividad y la productividad, permitiéndote tomar notas y crear diseños sin necesidad de emparejamiento Bluetooth. Además, el modo Kids Corner brinda un espacio seguro para que los niños aprendan y jueguen bajo la supervisión de los padres, fomentando hábitos digitales saludables. Con una batería de 7700 mAh, la MatePad SE 11 Pulgadas ofrece horas de uso ininterrumpido para todas tus actividades diarias. | CASAN Promo Center',
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
        title: 'Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh | CASAN Promo Center',
        description: 'La HUAWEI MatePad SE 11 Pulgadas es la combinación perfecta entre diseño elegante y tecnología avanzada. Con un peso ligero de solo 475 g y un grosor de 6,9 mm, esta tablet es fácil de manejar y está diseñada para llevarla contigo a cualquier lugar. Su pantalla FullView de 11 pulgadas, con certificación TÜV Rheinland, protege tu vista con baja emisión de luz azul y tecnología sin parpadeos, permitiéndote disfrutar de sesiones prolongadas de lectura o entretenimiento sin fatiga visual. La experiencia inmersiva está garantizada gracias a sus cuatro altavoces simétricos, optimizados con la tecnología Histen 9.0, para un sonido nítido y adaptado a música, películas, juegos o clases en línea. Su lápiz óptico M-Pen Lite facilita la creatividad y la productividad, permitiéndote tomar notas y crear diseños sin necesidad de emparejamiento Bluetooth. Además, el modo Kids Corner brinda un espacio seguro para que los niños aprendan y jueguen bajo la supervisión de los padres, fomentando hábitos digitales saludables. Con una batería de 7700 mAh, la MatePad SE 11 Pulgadas ofrece horas de uso ininterrumpido para todas tus actividades diarias. | CASAN Promo Center',
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
