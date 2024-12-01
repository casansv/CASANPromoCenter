// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W | CASAN Promo Center',
    description: 'El HUAWEI Pura 70 Ultra es la combinación perfecta de tecnología avanzada y diseño artístico. Con una Cámara Emergente con Ultrailuminación y un sensor de 1 pulgada, este smartphone captura detalles impresionantes, incluso en condiciones de poca luz. Su teleobjetivo macro con zoom de 35 aumentos y apertura F2.1 te permite descubrir el mundo desde nuevas perspectivas, mientras que el XD Motion Engine asegura imágenes nítidas, incluso a velocidades ultraaltas. Este dispositivo destaca por su resistente Cristal Kunlun Superduradero, diseñado para soportar caídas y arañazos, brindando tranquilidad y confiabilidad. Además, su elegante Diseño de Patrón Estrellado con texturas en relieve convierte al HUAWEI Pura 70 Ultra en un espectáculo visual único que combina innovación y estilo. Con una batería de 5200 mAh y la función de Doble SuperCharge de 100W, obtendrás energía suficiente para todo el día en solo minutos. Además, cuenta con carga inversa de hasta 20W para mantener tus otros dispositivos funcionando en cualquier momento. Con 16GB de RAM y 512GB de almacenamiento, este smartphone ofrece un rendimiento inigualable para multitarea y almacenamiento de archivos de gran tamaño. | CASAN Promo Center',
    keywords: 'HUAWEI Pura 70 Ultra, smartphone 512GB, cámara emergente ultrailuminación, teleobjetivo macro, cristal Kunlun, diseño patrón estrellado, SuperCharge 100W, batería 5200 mAh, HUAWEI carga inversa, móvil resistente caídas.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W | CASAN Promo Center',
        description: 'El HUAWEI Pura 70 Ultra es la combinación perfecta de tecnología avanzada y diseño artístico. Con una Cámara Emergente con Ultrailuminación y un sensor de 1 pulgada, este smartphone captura detalles impresionantes, incluso en condiciones de poca luz. Su teleobjetivo macro con zoom de 35 aumentos y apertura F2.1 te permite descubrir el mundo desde nuevas perspectivas, mientras que el XD Motion Engine asegura imágenes nítidas, incluso a velocidades ultraaltas. Este dispositivo destaca por su resistente Cristal Kunlun Superduradero, diseñado para soportar caídas y arañazos, brindando tranquilidad y confiabilidad. Además, su elegante Diseño de Patrón Estrellado con texturas en relieve convierte al HUAWEI Pura 70 Ultra en un espectáculo visual único que combina innovación y estilo. Con una batería de 5200 mAh y la función de Doble SuperCharge de 100W, obtendrás energía suficiente para todo el día en solo minutos. Además, cuenta con carga inversa de hasta 20W para mantener tus otros dispositivos funcionando en cualquier momento. Con 16GB de RAM y 512GB de almacenamiento, este smartphone ofrece un rendimiento inigualable para multitarea y almacenamiento de archivos de gran tamaño. | CASAN Promo Center',
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
        title: 'HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W | CASAN Promo Center',
        description: 'El HUAWEI Pura 70 Ultra es la combinación perfecta de tecnología avanzada y diseño artístico. Con una Cámara Emergente con Ultrailuminación y un sensor de 1 pulgada, este smartphone captura detalles impresionantes, incluso en condiciones de poca luz. Su teleobjetivo macro con zoom de 35 aumentos y apertura F2.1 te permite descubrir el mundo desde nuevas perspectivas, mientras que el XD Motion Engine asegura imágenes nítidas, incluso a velocidades ultraaltas. Este dispositivo destaca por su resistente Cristal Kunlun Superduradero, diseñado para soportar caídas y arañazos, brindando tranquilidad y confiabilidad. Además, su elegante Diseño de Patrón Estrellado con texturas en relieve convierte al HUAWEI Pura 70 Ultra en un espectáculo visual único que combina innovación y estilo. Con una batería de 5200 mAh y la función de Doble SuperCharge de 100W, obtendrás energía suficiente para todo el día en solo minutos. Además, cuenta con carga inversa de hasta 20W para mantener tus otros dispositivos funcionando en cualquier momento. Con 16GB de RAM y 512GB de almacenamiento, este smartphone ofrece un rendimiento inigualable para multitarea y almacenamiento de archivos de gran tamaño. | CASAN Promo Center',
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
