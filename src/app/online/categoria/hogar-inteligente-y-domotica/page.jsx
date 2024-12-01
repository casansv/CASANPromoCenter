// src/app/BACKSTATE/Online/Hub/page.jsx
import React from 'react';

import Data from "../../../sconstants.json";

import ProductPage from './ProductSearch';





export const metadata = {
    title: 'Hogar Inteligente y Domótica | Automatiza tu Vida | CASAN Promo Center',
    description: 'Transforma tu hogar en un espacio inteligente con sistemas de domótica. Controla tu casa desde cualquier lugar con dispositivos conectados. | CASAN Promo Center',
    keywords: 'hogar inteligente, domótica 2024, dispositivos inteligentes, sistemas de seguridad inteligentes, automatización del hogar, Amazon Alexa, Google Home, luces inteligentes, cámaras de seguridad WiFi, enchufes inteligentes, termostatos inteligentes, controladores de temperatura, timbres inteligentes, casas inteligentes en El Salvador, cerraduras electrónicas, control remoto para hogares, dispositivos para ahorro energético, sensores de movimiento, altavoces inteligentes, aspiradoras robot, dispositivos IoT, hogares inteligentes en México, interruptores inteligentes, persianas automáticas, asistentes de voz, domótica para el hogar, routers inteligentes, cámaras de vigilancia, enchufes programables, hogares conectados en Argentina, hogares digitales, control inteligente de luces, dispositivos para hogares modernos, calefacción inteligente, refrigeradores conectados, cerraduras con Bluetooth, domótica en España, sistemas de seguridad avanzados, electrodomésticos inteligentes, televisores con inteligencia artificial, domótica económica, domótica en Chile, casansv',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Hogar Inteligente y Domótica | Automatiza tu Vida | CASAN Promo Center',
        description: 'Transforma tu hogar en un espacio inteligente con sistemas de domótica. Controla tu casa desde cualquier lugar con dispositivos conectados. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_03,
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
        title: 'Hogar Inteligente y Domótica | Automatiza tu Vida | CASAN Promo Center',
        description: 'Transforma tu hogar en un espacio inteligente con sistemas de domótica. Controla tu casa desde cualquier lugar con dispositivos conectados. | CASAN Promo Center',
        image: Data.menu_icon_03
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
