// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia | CASAN Promo Center',
    description: 'Experimenta la perfección tecnológica con el iPhone 11 Pro de 64 GB, un dispositivo diseñado para quienes buscan rendimiento y estilo en un solo equipo. Su pantalla OLED Super Retina XDR de 5.8 pulgadas ofrece colores vibrantes y negros profundos, ideales para disfrutar contenido multimedia y trabajar con precisión. Su resistencia al agua y polvo con certificación IP68 garantiza durabilidad, incluso en condiciones exigentes. Este modelo integra un sistema de triple cámara de 12 MP que redefine la fotografía móvil. Captura cada detalle con el gran angular, crea retratos increíbles con el modo retrato y explora nuevas perspectivas con el ultra gran angular. Además, graba videos en 4K a 60 fps para resultados de calidad profesional. Su cámara frontal TrueDepth también es perfecta para selfies con estilo, videos en 4K y divertidas grabaciones en cámara lenta. Con el potente chip A13 Bionic y su Neural Engine de tercera generación, el iPhone 11 Pro asegura una experiencia fluida y rápida, ideal para aplicaciones exigentes y multitarea. Disfruta de carga inalámbrica, carga rápida con el adaptador de 18W incluido y el sistema iOS con nuevas prestaciones de privacidad y herramientas avanzadas de edición. | CASAN Promo Center',
    keywords: 'iPhone 11 Pro, iPhone 64 GB, Apple smartphone, triple cámara iPhone, iPhone 11 Pro plata, iPhone pantalla OLED, smartphone resistente al agua, iPhone carga rápida, iPhone cámara 4K, iPhone diseño compacto',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia | CASAN Promo Center',
        description: 'Experimenta la perfección tecnológica con el iPhone 11 Pro de 64 GB, un dispositivo diseñado para quienes buscan rendimiento y estilo en un solo equipo. Su pantalla OLED Super Retina XDR de 5.8 pulgadas ofrece colores vibrantes y negros profundos, ideales para disfrutar contenido multimedia y trabajar con precisión. Su resistencia al agua y polvo con certificación IP68 garantiza durabilidad, incluso en condiciones exigentes. Este modelo integra un sistema de triple cámara de 12 MP que redefine la fotografía móvil. Captura cada detalle con el gran angular, crea retratos increíbles con el modo retrato y explora nuevas perspectivas con el ultra gran angular. Además, graba videos en 4K a 60 fps para resultados de calidad profesional. Su cámara frontal TrueDepth también es perfecta para selfies con estilo, videos en 4K y divertidas grabaciones en cámara lenta. Con el potente chip A13 Bionic y su Neural Engine de tercera generación, el iPhone 11 Pro asegura una experiencia fluida y rápida, ideal para aplicaciones exigentes y multitarea. Disfruta de carga inalámbrica, carga rápida con el adaptador de 18W incluido y el sistema iOS con nuevas prestaciones de privacidad y herramientas avanzadas de edición. | CASAN Promo Center',
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
        title: 'iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia | CASAN Promo Center',
        description: 'Experimenta la perfección tecnológica con el iPhone 11 Pro de 64 GB, un dispositivo diseñado para quienes buscan rendimiento y estilo en un solo equipo. Su pantalla OLED Super Retina XDR de 5.8 pulgadas ofrece colores vibrantes y negros profundos, ideales para disfrutar contenido multimedia y trabajar con precisión. Su resistencia al agua y polvo con certificación IP68 garantiza durabilidad, incluso en condiciones exigentes. Este modelo integra un sistema de triple cámara de 12 MP que redefine la fotografía móvil. Captura cada detalle con el gran angular, crea retratos increíbles con el modo retrato y explora nuevas perspectivas con el ultra gran angular. Además, graba videos en 4K a 60 fps para resultados de calidad profesional. Su cámara frontal TrueDepth también es perfecta para selfies con estilo, videos en 4K y divertidas grabaciones en cámara lenta. Con el potente chip A13 Bionic y su Neural Engine de tercera generación, el iPhone 11 Pro asegura una experiencia fluida y rápida, ideal para aplicaciones exigentes y multitarea. Disfruta de carga inalámbrica, carga rápida con el adaptador de 18W incluido y el sistema iOS con nuevas prestaciones de privacidad y herramientas avanzadas de edición. | CASAN Promo Center',
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
