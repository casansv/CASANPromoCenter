// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida | CASAN Promo Center',
    description: 'Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este smartphone, con su pantalla HD+ LCD de 6.7 pulgadas, ofrece una experiencia visual inmersiva gracias a su brillo de 950 nits y tasa de refresco de 90Hz, ideal para disfrutar tus películas, juegos y contenidos favoritos con colores vibrantes y nitidez impresionante. El exclusivo sistema OReality Audio y el Modo Ultra Volumen 300% garantizan un sonido estéreo envolvente para una experiencia auditiva excepcional. El diseño elegante y funcional del OPPO A60 4G incorpora el acabado Particle Magnetic con OPPO Glow, que lo hace resistente a arañazos y libre de huellas. Su ligereza de 186g y grosor de 7.68mm lo convierten en el compañero perfecto para llevarlo cómodamente en cualquier situación. Equipado con una batería de 5,000 mAh y tecnología de carga rápida de 45W SUPERVOOC, este dispositivo asegura hasta dos días de uso continuo, con una carga del 50% en solo 30 minutos. Además, su procesador Qualcomm Snapdragon 680 y 8GB de RAM (ampliables) garantizan un rendimiento fluido, mientras que sus 256GB de almacenamiento interno, expandibles hasta 1TB, te permiten guardar todo lo que necesitas sin preocupaciones. La cámara triple de 50+2+8 MP del OPPO A60 4G está diseñada para capturar fotos y videos de alta calidad en cualquier condición de luz, permitiéndote explorar tu creatividad y compartir tus mejores momentos fácilmente. | CASAN Promo Center',
    keywords: 'OPPO A60 4G, smartphone OPPO, smartphone pantalla HD+, OPPO 256GB, smartphone carga rápida 45W, OPPO cámara 50 MP, OPPO Glow diseño, móvil resistente a arañazos, OPPO batería larga duración, OPPO Snapdragon 680',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida | CASAN Promo Center',
        description: 'Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este smartphone, con su pantalla HD+ LCD de 6.7 pulgadas, ofrece una experiencia visual inmersiva gracias a su brillo de 950 nits y tasa de refresco de 90Hz, ideal para disfrutar tus películas, juegos y contenidos favoritos con colores vibrantes y nitidez impresionante. El exclusivo sistema OReality Audio y el Modo Ultra Volumen 300% garantizan un sonido estéreo envolvente para una experiencia auditiva excepcional. El diseño elegante y funcional del OPPO A60 4G incorpora el acabado Particle Magnetic con OPPO Glow, que lo hace resistente a arañazos y libre de huellas. Su ligereza de 186g y grosor de 7.68mm lo convierten en el compañero perfecto para llevarlo cómodamente en cualquier situación. Equipado con una batería de 5,000 mAh y tecnología de carga rápida de 45W SUPERVOOC, este dispositivo asegura hasta dos días de uso continuo, con una carga del 50% en solo 30 minutos. Además, su procesador Qualcomm Snapdragon 680 y 8GB de RAM (ampliables) garantizan un rendimiento fluido, mientras que sus 256GB de almacenamiento interno, expandibles hasta 1TB, te permiten guardar todo lo que necesitas sin preocupaciones. La cámara triple de 50+2+8 MP del OPPO A60 4G está diseñada para capturar fotos y videos de alta calidad en cualquier condición de luz, permitiéndote explorar tu creatividad y compartir tus mejores momentos fácilmente. | CASAN Promo Center',
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
        title: 'OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida | CASAN Promo Center',
        description: 'Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este smartphone, con su pantalla HD+ LCD de 6.7 pulgadas, ofrece una experiencia visual inmersiva gracias a su brillo de 950 nits y tasa de refresco de 90Hz, ideal para disfrutar tus películas, juegos y contenidos favoritos con colores vibrantes y nitidez impresionante. El exclusivo sistema OReality Audio y el Modo Ultra Volumen 300% garantizan un sonido estéreo envolvente para una experiencia auditiva excepcional. El diseño elegante y funcional del OPPO A60 4G incorpora el acabado Particle Magnetic con OPPO Glow, que lo hace resistente a arañazos y libre de huellas. Su ligereza de 186g y grosor de 7.68mm lo convierten en el compañero perfecto para llevarlo cómodamente en cualquier situación. Equipado con una batería de 5,000 mAh y tecnología de carga rápida de 45W SUPERVOOC, este dispositivo asegura hasta dos días de uso continuo, con una carga del 50% en solo 30 minutos. Además, su procesador Qualcomm Snapdragon 680 y 8GB de RAM (ampliables) garantizan un rendimiento fluido, mientras que sus 256GB de almacenamiento interno, expandibles hasta 1TB, te permiten guardar todo lo que necesitas sin preocupaciones. La cámara triple de 50+2+8 MP del OPPO A60 4G está diseñada para capturar fotos y videos de alta calidad en cualquier condición de luz, permitiéndote explorar tu creatividad y compartir tus mejores momentos fácilmente. | CASAN Promo Center',
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
