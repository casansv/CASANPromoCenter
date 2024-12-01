// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Smartphone SPC Zeus 4G Pro para Mayores con Botón SOS y Base de Carga | CASAN Promo Center',
    description: 'El SPC Zeus 4G Pro es el smartphone ideal para personas mayores que buscan simplicidad, seguridad y conectividad en un solo dispositivo. Su diseño intuitivo con iconos XXL y un menú fácil de usar facilita el acceso a las funciones principales, mientras que sus botones físicos aseguran una experiencia cómoda y eficiente. Equipado con un práctico botón SOS, permite enviar mensajes de emergencia y geolocalización a contactos definidos, ofreciendo tranquilidad a los usuarios y sus familiares. Su base de carga hace que recargar sea sencillo, y su diseño incluye la posibilidad de usar un cable USB-C reversible. Con una pantalla IPS de 5,5 Pulgadas, cámara de 13 MP y conectividad 4G, este dispositivo es perfecto para realizar videollamadas y capturar recuerdos importantes. Además, su función de ayuda remota Smart Help permite a familiares o cuidadores gestionar ajustes del teléfono a distancia, como activar el botón SOS o subir el volumen automáticamente. El SPC Zeus 4G Pro combina accesibilidad, tecnología Android 11 y almacenamiento ampliable de hasta 512 GB, convirtiéndolo en un regalo perfecto para mantener a tus seres queridos conectados y seguros. | CASAN Promo Center',
    keywords: 'smartphone SPC Zeus 4G Pro, móvil para mayores, teléfono con botón SOS, smartphone con base de carga, móvil fácil de usar, Android 11 para mayores, smartphone con iconos XXL, teléfono con ayuda remota, móvil para videollamadas, teléfono seguro para mayores',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Smartphone SPC Zeus 4G Pro para Mayores con Botón SOS y Base de Carga | CASAN Promo Center',
        description: 'El SPC Zeus 4G Pro es el smartphone ideal para personas mayores que buscan simplicidad, seguridad y conectividad en un solo dispositivo. Su diseño intuitivo con iconos XXL y un menú fácil de usar facilita el acceso a las funciones principales, mientras que sus botones físicos aseguran una experiencia cómoda y eficiente. Equipado con un práctico botón SOS, permite enviar mensajes de emergencia y geolocalización a contactos definidos, ofreciendo tranquilidad a los usuarios y sus familiares. Su base de carga hace que recargar sea sencillo, y su diseño incluye la posibilidad de usar un cable USB-C reversible. Con una pantalla IPS de 5,5 Pulgadas, cámara de 13 MP y conectividad 4G, este dispositivo es perfecto para realizar videollamadas y capturar recuerdos importantes. Además, su función de ayuda remota Smart Help permite a familiares o cuidadores gestionar ajustes del teléfono a distancia, como activar el botón SOS o subir el volumen automáticamente. El SPC Zeus 4G Pro combina accesibilidad, tecnología Android 11 y almacenamiento ampliable de hasta 512 GB, convirtiéndolo en un regalo perfecto para mantener a tus seres queridos conectados y seguros. | CASAN Promo Center',
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
        title: 'Smartphone SPC Zeus 4G Pro para Mayores con Botón SOS y Base de Carga | CASAN Promo Center',
        description: 'El SPC Zeus 4G Pro es el smartphone ideal para personas mayores que buscan simplicidad, seguridad y conectividad en un solo dispositivo. Su diseño intuitivo con iconos XXL y un menú fácil de usar facilita el acceso a las funciones principales, mientras que sus botones físicos aseguran una experiencia cómoda y eficiente. Equipado con un práctico botón SOS, permite enviar mensajes de emergencia y geolocalización a contactos definidos, ofreciendo tranquilidad a los usuarios y sus familiares. Su base de carga hace que recargar sea sencillo, y su diseño incluye la posibilidad de usar un cable USB-C reversible. Con una pantalla IPS de 5,5 Pulgadas, cámara de 13 MP y conectividad 4G, este dispositivo es perfecto para realizar videollamadas y capturar recuerdos importantes. Además, su función de ayuda remota Smart Help permite a familiares o cuidadores gestionar ajustes del teléfono a distancia, como activar el botón SOS o subir el volumen automáticamente. El SPC Zeus 4G Pro combina accesibilidad, tecnología Android 11 y almacenamiento ampliable de hasta 512 GB, convirtiéndolo en un regalo perfecto para mantener a tus seres queridos conectados y seguros. | CASAN Promo Center',
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
