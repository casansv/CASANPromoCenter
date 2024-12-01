// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz | CASAN Promo Center',
    description: 'El Motorola Moto g24 combina estilo, rendimiento y funcionalidad a un precio accesible. Este smartphone cuenta con una pantalla HD+ de 6,56 pulgadas y tasa de refresco de 90Hz, diseñada para ofrecer una experiencia visual fluida y agradable, incluso bajo luz solar intensa gracias a su Modo Alto Brillo. Con materiales de calidad y un diseño optimizado, es cómodo de sostener y usar durante todo el día. Captura momentos únicos con su sistema de cámara dual de 50 MP + 2 MP, que incluye un objetivo Macro Vision especializado para explorar los detalles más pequeños. Ya sea de día o de noche, tus fotos tendrán calidad profesional. Además, el sonido Dolby Atmos con altavoces estéreo te sumerge en un audio multidimensional con voces nítidas y graves potentes para disfrutar de tu entretenimiento favorito. Equipado con hasta 8 GB de RAM gracias a la función Expansión de Memoria, este dispositivo te permite realizar multitareas de manera fluida y abrir aplicaciones al instante. Su batería de 5000 mAh con carga TurboPower de 15W garantiza un rendimiento duradero, ideal para quienes buscan productividad y diversión sin interrupciones. Además, incluye funda y cargador, para que lo tengas todo desde el primer momento. | CASAN Promo Center',
    keywords: 'Motorola Moto g24, Moto g24 128GB, smartphone Dual SIM, cámara 50 MP, pantalla HD+ 90Hz, Moto Dolby Atmos, Moto batería 5000 mAh, Moto carga TurboPower, Moto g24 Android 14, smartphone económico y potente.',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz | CASAN Promo Center',
        description: 'El Motorola Moto g24 combina estilo, rendimiento y funcionalidad a un precio accesible. Este smartphone cuenta con una pantalla HD+ de 6,56 pulgadas y tasa de refresco de 90Hz, diseñada para ofrecer una experiencia visual fluida y agradable, incluso bajo luz solar intensa gracias a su Modo Alto Brillo. Con materiales de calidad y un diseño optimizado, es cómodo de sostener y usar durante todo el día. Captura momentos únicos con su sistema de cámara dual de 50 MP + 2 MP, que incluye un objetivo Macro Vision especializado para explorar los detalles más pequeños. Ya sea de día o de noche, tus fotos tendrán calidad profesional. Además, el sonido Dolby Atmos con altavoces estéreo te sumerge en un audio multidimensional con voces nítidas y graves potentes para disfrutar de tu entretenimiento favorito. Equipado con hasta 8 GB de RAM gracias a la función Expansión de Memoria, este dispositivo te permite realizar multitareas de manera fluida y abrir aplicaciones al instante. Su batería de 5000 mAh con carga TurboPower de 15W garantiza un rendimiento duradero, ideal para quienes buscan productividad y diversión sin interrupciones. Además, incluye funda y cargador, para que lo tengas todo desde el primer momento. | CASAN Promo Center',
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
        title: 'Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz | CASAN Promo Center',
        description: 'El Motorola Moto g24 combina estilo, rendimiento y funcionalidad a un precio accesible. Este smartphone cuenta con una pantalla HD+ de 6,56 pulgadas y tasa de refresco de 90Hz, diseñada para ofrecer una experiencia visual fluida y agradable, incluso bajo luz solar intensa gracias a su Modo Alto Brillo. Con materiales de calidad y un diseño optimizado, es cómodo de sostener y usar durante todo el día. Captura momentos únicos con su sistema de cámara dual de 50 MP + 2 MP, que incluye un objetivo Macro Vision especializado para explorar los detalles más pequeños. Ya sea de día o de noche, tus fotos tendrán calidad profesional. Además, el sonido Dolby Atmos con altavoces estéreo te sumerge en un audio multidimensional con voces nítidas y graves potentes para disfrutar de tu entretenimiento favorito. Equipado con hasta 8 GB de RAM gracias a la función Expansión de Memoria, este dispositivo te permite realizar multitareas de manera fluida y abrir aplicaciones al instante. Su batería de 5000 mAh con carga TurboPower de 15W garantiza un rendimiento duradero, ideal para quienes buscan productividad y diversión sin interrupciones. Además, incluye funda y cargador, para que lo tengas todo desde el primer momento. | CASAN Promo Center',
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
