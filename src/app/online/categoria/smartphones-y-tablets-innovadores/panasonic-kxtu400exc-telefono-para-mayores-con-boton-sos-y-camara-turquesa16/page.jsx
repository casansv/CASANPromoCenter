// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa | CASAN Promo Center',
    description: 'El Panasonic KX-TU400EXC es un teléfono móvil diseñado especialmente para personas mayores, combinando facilidad de uso con funciones esenciales. Equipado con un práctico Botón SOS, este dispositivo permite realizar llamadas de emergencia con solo un toque, brindando tranquilidad a los usuarios y sus familias. Sus teclas grandes, separadas y retroiluminadas facilitan la lectura y el manejo, incluso en condiciones de poca luz. Con una pantalla a color TFT de 2,4 pulgadas, este móvil presenta un diseño intuitivo y visualmente claro. La batería de larga duración ofrece hasta 4 horas de conversación y 450 horas en reposo, ideal para acompañarte durante todo el día. Además, incluye una cámara integrada para capturar recuerdos especiales y una práctica linterna incorporada, perfecta para situaciones inesperadas. El Panasonic KX-TU400EXC también cuenta con conectividad Bluetooth, para que puedas compartir fotos o conectar dispositivos compatibles de forma sencilla. Su diseño compacto y el elegante color turquesa lo convierten en un dispositivo funcional y atractivo. | CASAN Promo Center',
    keywords: 'Panasonic KX-TU400EXC, teléfono para mayores, móvil con botón SOS, teclas grandes retroiluminadas, móvil batería larga duración, Panasonic teléfono turquesa, móvil con linterna, teléfono sencillo para personas mayores, móvil con cámara, teléfono práctico y seguro.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa | CASAN Promo Center',
        description: 'El Panasonic KX-TU400EXC es un teléfono móvil diseñado especialmente para personas mayores, combinando facilidad de uso con funciones esenciales. Equipado con un práctico Botón SOS, este dispositivo permite realizar llamadas de emergencia con solo un toque, brindando tranquilidad a los usuarios y sus familias. Sus teclas grandes, separadas y retroiluminadas facilitan la lectura y el manejo, incluso en condiciones de poca luz. Con una pantalla a color TFT de 2,4 pulgadas, este móvil presenta un diseño intuitivo y visualmente claro. La batería de larga duración ofrece hasta 4 horas de conversación y 450 horas en reposo, ideal para acompañarte durante todo el día. Además, incluye una cámara integrada para capturar recuerdos especiales y una práctica linterna incorporada, perfecta para situaciones inesperadas. El Panasonic KX-TU400EXC también cuenta con conectividad Bluetooth, para que puedas compartir fotos o conectar dispositivos compatibles de forma sencilla. Su diseño compacto y el elegante color turquesa lo convierten en un dispositivo funcional y atractivo. | CASAN Promo Center',
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
        title: 'Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa | CASAN Promo Center',
        description: 'El Panasonic KX-TU400EXC es un teléfono móvil diseñado especialmente para personas mayores, combinando facilidad de uso con funciones esenciales. Equipado con un práctico Botón SOS, este dispositivo permite realizar llamadas de emergencia con solo un toque, brindando tranquilidad a los usuarios y sus familias. Sus teclas grandes, separadas y retroiluminadas facilitan la lectura y el manejo, incluso en condiciones de poca luz. Con una pantalla a color TFT de 2,4 pulgadas, este móvil presenta un diseño intuitivo y visualmente claro. La batería de larga duración ofrece hasta 4 horas de conversación y 450 horas en reposo, ideal para acompañarte durante todo el día. Además, incluye una cámara integrada para capturar recuerdos especiales y una práctica linterna incorporada, perfecta para situaciones inesperadas. El Panasonic KX-TU400EXC también cuenta con conectividad Bluetooth, para que puedas compartir fotos o conectar dispositivos compatibles de forma sencilla. Su diseño compacto y el elegante color turquesa lo convierten en un dispositivo funcional y atractivo. | CASAN Promo Center',
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
