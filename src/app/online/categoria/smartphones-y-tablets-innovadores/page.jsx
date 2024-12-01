// src/app/BACKSTATE/Online/Hub/page.jsx
import React from 'react';

import Data from "../../../sconstants.json";

import ProductPage from './ProductSearch';





export const metadata = {
    title: 'Compra los Mejores Smartphones y Tablets Innovadores | Última Tecnología | CASAN Promo Center',
    description: 'Descubre smartphones y tablets de última generación con las mejores ofertas. Innovación y rendimiento al alcance de tu mano. | CASAN Promo Center',
    keywords: 'smartphones 2024, tablets modernas, tecnología móvil, mejores smartphones, comprar celulares en El Salvador, smartphones de gama alta, tablets Android, iPhone 2024, tablets para estudiantes, tecnología 5G, smartphones con buena cámara, celulares resistentes al agua, Samsung Galaxy, tablets ligeras, dispositivos electrónicos globales, tablets para videojuegos, tablets para diseño gráfico, smartphones con IA, celulares con buena batería, iPads nuevas, innovación en smartphones, mejores celulares en México, comprar tablets en línea, smartphones de última generación, celulares para trabajo remoto, celulares con pantalla OLED, celulares plegables, iPhone 15, Huawei, Xiaomi, tecnología avanzada smartphones, smartphones y tablets en Argentina, celulares económicos, celulares con carga rápida, tablets con gran almacenamiento, smartphones en España, tablets Apple, teléfonos desbloqueados, celulares con doble SIM, iPads baratas, Samsung Galaxy Tab, smartphones para fotografía, casansv',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Compra los Mejores Smartphones y Tablets Innovadores | Última Tecnología | CASAN Promo Center',
        description: 'Descubre smartphones y tablets de última generación con las mejores ofertas. Innovación y rendimiento al alcance de tu mano. | CASAN Promo Center',
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
        title: 'Compra los Mejores Smartphones y Tablets Innovadores | Última Tecnología | CASAN Promo Center',
        description: 'Descubre smartphones y tablets de última generación con las mejores ofertas. Innovación y rendimiento al alcance de tu mano. | CASAN Promo Center',
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
