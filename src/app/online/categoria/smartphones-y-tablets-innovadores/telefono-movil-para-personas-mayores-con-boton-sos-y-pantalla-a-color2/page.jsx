// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Teléfono móvil para personas mayores con botón SOS y pantalla a color | CASAN Promo Center',
    description: 'El teléfono Panasonic KX-TU400EXG está diseñado pensando en la comodidad y seguridad de los adultos mayores. Con un botón SOS de fácil acceso, permite realizar llamadas de emergencia a contactos previamente configurados con solo un toque. Su pantalla TFT a color de 2,4" ofrece una excelente visibilidad para leer mensajes o navegar por el menú. Este dispositivo combina funcionalidad y simplicidad con teclas grandes y retroiluminadas que facilitan el uso, incluso en ambientes con poca luz. Además, cuenta con una linterna integrada para mayor practicidad, una cámara para capturar recuerdos especiales y una batería de larga duración que asegura hasta 450 horas en reposo y 4 horas de conversación. Con conectividad Bluetooth y diseño compacto, este teléfono es perfecto para quienes buscan un dispositivo confiable y fácil de usar. | CASAN Promo Center',
    keywords: 'teléfono móvil para personas mayores, Panasonic KX-TU400EXG, botón SOS programable, teléfono con pantalla TFT, móvil con teclas grandes, teléfono fácil de usar, batería de larga duración, móvil con linterna, teléfono con cámara, móvil compacto para mayores, teléfono con Bluetooth, teléfono desbloqueado GSM, móvil práctico para adultos mayores, Panasonic teléfono sencillo, teléfono con funciones esenciales, dispositivo confiable para mayores',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Teléfono móvil para personas mayores con botón SOS y pantalla a color | CASAN Promo Center',
        description: 'El teléfono Panasonic KX-TU400EXG está diseñado pensando en la comodidad y seguridad de los adultos mayores. Con un botón SOS de fácil acceso, permite realizar llamadas de emergencia a contactos previamente configurados con solo un toque. Su pantalla TFT a color de 2,4" ofrece una excelente visibilidad para leer mensajes o navegar por el menú. Este dispositivo combina funcionalidad y simplicidad con teclas grandes y retroiluminadas que facilitan el uso, incluso en ambientes con poca luz. Además, cuenta con una linterna integrada para mayor practicidad, una cámara para capturar recuerdos especiales y una batería de larga duración que asegura hasta 450 horas en reposo y 4 horas de conversación. Con conectividad Bluetooth y diseño compacto, este teléfono es perfecto para quienes buscan un dispositivo confiable y fácil de usar. | CASAN Promo Center',
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
        title: 'Teléfono móvil para personas mayores con botón SOS y pantalla a color | CASAN Promo Center',
        description: 'El teléfono Panasonic KX-TU400EXG está diseñado pensando en la comodidad y seguridad de los adultos mayores. Con un botón SOS de fácil acceso, permite realizar llamadas de emergencia a contactos previamente configurados con solo un toque. Su pantalla TFT a color de 2,4" ofrece una excelente visibilidad para leer mensajes o navegar por el menú. Este dispositivo combina funcionalidad y simplicidad con teclas grandes y retroiluminadas que facilitan el uso, incluso en ambientes con poca luz. Además, cuenta con una linterna integrada para mayor practicidad, una cámara para capturar recuerdos especiales y una batería de larga duración que asegura hasta 450 horas en reposo y 4 horas de conversación. Con conectividad Bluetooth y diseño compacto, este teléfono es perfecto para quienes buscan un dispositivo confiable y fácil de usar. | CASAN Promo Center',
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
