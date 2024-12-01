// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente | CASAN Promo Center',
    description: 'El Google Pixel 8a redefine lo que esperas de un smartphone. Equipado con la innovadora Cámara Pixel, este dispositivo captura fotos y videos excepcionales en cualquier situación. Gracias a la inteligencia artificial de Google, puedes lograr imágenes grupales perfectas, corregir fotos borrosas y mejorar instantáneamente la calidad de imágenes antiguas o recientes. Además, con funciones como el Borrador Mágico para Audio y el Zoom de Alta Resolución, cada detalle de tus recuerdos estará a tu alcance con una calidad inigualable. El diseño duradero del Pixel 8a no solo es elegante, sino que también resiste líquidos, polvo y arañazos gracias a su protección IP67 y el vidrio Corning Gorilla Glass 3. Con una batería de 24 horas de duración y potentes herramientas de seguridad integradas, este smartphone está diseñado para acompañarte en tu día a día de forma fiable. Su capacidad de filtrar llamadas de spam y optimizar la calidad de las llamadas hace que comunicarte sea más fácil y claro, incluso en ambientes ruidosos. Este dispositivo no solo te conecta, sino que te protege. Con funciones de emergencia que llaman automáticamente a los servicios y comparten tu ubicación precisa, el Google Pixel 8a es más que un teléfono: es un asistente confiable en cualquier situación. | CASAN Promo Center',
    keywords: 'Google Pixel 8a, Pixel Android, smartphone cámara avanzada, Pixel 128GB, Pixel resistente IP67, Pixel Zoom Alta Resolución, Pixel batería 24 horas, Pixel inteligencia artificial, Pixel diseño duradero, smartphone con seguridad avanzada',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente | CASAN Promo Center',
        description: 'El Google Pixel 8a redefine lo que esperas de un smartphone. Equipado con la innovadora Cámara Pixel, este dispositivo captura fotos y videos excepcionales en cualquier situación. Gracias a la inteligencia artificial de Google, puedes lograr imágenes grupales perfectas, corregir fotos borrosas y mejorar instantáneamente la calidad de imágenes antiguas o recientes. Además, con funciones como el Borrador Mágico para Audio y el Zoom de Alta Resolución, cada detalle de tus recuerdos estará a tu alcance con una calidad inigualable. El diseño duradero del Pixel 8a no solo es elegante, sino que también resiste líquidos, polvo y arañazos gracias a su protección IP67 y el vidrio Corning Gorilla Glass 3. Con una batería de 24 horas de duración y potentes herramientas de seguridad integradas, este smartphone está diseñado para acompañarte en tu día a día de forma fiable. Su capacidad de filtrar llamadas de spam y optimizar la calidad de las llamadas hace que comunicarte sea más fácil y claro, incluso en ambientes ruidosos. Este dispositivo no solo te conecta, sino que te protege. Con funciones de emergencia que llaman automáticamente a los servicios y comparten tu ubicación precisa, el Google Pixel 8a es más que un teléfono: es un asistente confiable en cualquier situación. | CASAN Promo Center',
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
        title: 'Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente | CASAN Promo Center',
        description: 'El Google Pixel 8a redefine lo que esperas de un smartphone. Equipado con la innovadora Cámara Pixel, este dispositivo captura fotos y videos excepcionales en cualquier situación. Gracias a la inteligencia artificial de Google, puedes lograr imágenes grupales perfectas, corregir fotos borrosas y mejorar instantáneamente la calidad de imágenes antiguas o recientes. Además, con funciones como el Borrador Mágico para Audio y el Zoom de Alta Resolución, cada detalle de tus recuerdos estará a tu alcance con una calidad inigualable. El diseño duradero del Pixel 8a no solo es elegante, sino que también resiste líquidos, polvo y arañazos gracias a su protección IP67 y el vidrio Corning Gorilla Glass 3. Con una batería de 24 horas de duración y potentes herramientas de seguridad integradas, este smartphone está diseñado para acompañarte en tu día a día de forma fiable. Su capacidad de filtrar llamadas de spam y optimizar la calidad de las llamadas hace que comunicarte sea más fácil y claro, incluso en ambientes ruidosos. Este dispositivo no solo te conecta, sino que te protege. Con funciones de emergencia que llaman automáticamente a los servicios y comparten tu ubicación precisa, el Google Pixel 8a es más que un teléfono: es un asistente confiable en cualquier situación. | CASAN Promo Center',
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
