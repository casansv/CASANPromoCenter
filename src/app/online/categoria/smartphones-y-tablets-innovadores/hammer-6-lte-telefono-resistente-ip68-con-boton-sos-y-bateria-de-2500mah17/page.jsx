// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh | CASAN Promo Center',
    description: 'El HAMMER 6 LTE es un teléfono diseñado para resistir los entornos más exigentes, combinando durabilidad, funcionalidad y autonomía excepcional. Con una certificación IP68 y pruebas militares, este dispositivo soporta caídas desde 1,5 metros, así como contacto con agua, polvo y barro, convirtiéndolo en la opción ideal para actividades al aire libre, trabajos intensos o aventuras extremas. Su carcasa reforzada y diseño robusto aseguran protección contra impactos y arañazos. La pantalla IPS de 2,4 pulgadas ofrece colores nítidos y gran visibilidad desde múltiples ángulos, mientras que las teclas retroiluminadas y los menús intuitivos garantizan un manejo sencillo, incluso en condiciones adversas. Su batería de 2500 mAh proporciona hasta 7 días de duración en reposo o 10 horas de llamadas continuas, con carga rápida a través de un puerto USB-C. El botón SOS permite pedir ayuda rápidamente en caso de emergencia, alertando a contactos configurados previamente. Además, la tecnología VoLTE asegura llamadas nítidas, ya sea en el bosque, en el trabajo o durante un viaje. Con una práctica linterna integrada, cámara con flash, radio FM sin auriculares y soporte para cordón, este teléfono está diseñado para ofrecer máxima versatilidad y confiabilidad en cualquier situación. | CASAN Promo Center',
    keywords: 'HAMMER 6 LTE, teléfono resistente IP68, móvil para exteriores, teléfono con botón SOS, batería 2500 mAh, teléfono con linterna, móvil con VoLTE, teléfono duradero, HAMMER pantalla IPS, móvil resistente agua y polvo.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh | CASAN Promo Center',
        description: 'El HAMMER 6 LTE es un teléfono diseñado para resistir los entornos más exigentes, combinando durabilidad, funcionalidad y autonomía excepcional. Con una certificación IP68 y pruebas militares, este dispositivo soporta caídas desde 1,5 metros, así como contacto con agua, polvo y barro, convirtiéndolo en la opción ideal para actividades al aire libre, trabajos intensos o aventuras extremas. Su carcasa reforzada y diseño robusto aseguran protección contra impactos y arañazos. La pantalla IPS de 2,4 pulgadas ofrece colores nítidos y gran visibilidad desde múltiples ángulos, mientras que las teclas retroiluminadas y los menús intuitivos garantizan un manejo sencillo, incluso en condiciones adversas. Su batería de 2500 mAh proporciona hasta 7 días de duración en reposo o 10 horas de llamadas continuas, con carga rápida a través de un puerto USB-C. El botón SOS permite pedir ayuda rápidamente en caso de emergencia, alertando a contactos configurados previamente. Además, la tecnología VoLTE asegura llamadas nítidas, ya sea en el bosque, en el trabajo o durante un viaje. Con una práctica linterna integrada, cámara con flash, radio FM sin auriculares y soporte para cordón, este teléfono está diseñado para ofrecer máxima versatilidad y confiabilidad en cualquier situación. | CASAN Promo Center',
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
        title: 'HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh | CASAN Promo Center',
        description: 'El HAMMER 6 LTE es un teléfono diseñado para resistir los entornos más exigentes, combinando durabilidad, funcionalidad y autonomía excepcional. Con una certificación IP68 y pruebas militares, este dispositivo soporta caídas desde 1,5 metros, así como contacto con agua, polvo y barro, convirtiéndolo en la opción ideal para actividades al aire libre, trabajos intensos o aventuras extremas. Su carcasa reforzada y diseño robusto aseguran protección contra impactos y arañazos. La pantalla IPS de 2,4 pulgadas ofrece colores nítidos y gran visibilidad desde múltiples ángulos, mientras que las teclas retroiluminadas y los menús intuitivos garantizan un manejo sencillo, incluso en condiciones adversas. Su batería de 2500 mAh proporciona hasta 7 días de duración en reposo o 10 horas de llamadas continuas, con carga rápida a través de un puerto USB-C. El botón SOS permite pedir ayuda rápidamente en caso de emergencia, alertando a contactos configurados previamente. Además, la tecnología VoLTE asegura llamadas nítidas, ya sea en el bosque, en el trabajo o durante un viaje. Con una práctica linterna integrada, cámara con flash, radio FM sin auriculares y soporte para cordón, este teléfono está diseñado para ofrecer máxima versatilidad y confiabilidad en cualquier situación. | CASAN Promo Center',
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
