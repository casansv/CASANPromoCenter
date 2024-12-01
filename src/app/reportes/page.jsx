// src\app\reportes\page.jsx
import React from "react";

import Data from "../sconstants.json";

import ListProduct from "./Components/ListProduct";





// Metadata para sitio
export const metadata = {
    title: 'Reportar producto | CASAN Promo Center',
    description: 'En CASAN Promo Center, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASAN Promo Center',
    keywords: 'CASAN Promo Center, reportar productos defectuosos, asistencia para reportes, derechos del consumidor, productos problemáticos, guías de reportes, cómo reportar productos defectuosos, apoyo al consumidor, seguridad de productos, ayuda para reportes',
    icons: {
        icon: Data.digitalMarket_icon,
    },
    openGraph: {
        title: 'Reportar producto | CASAN Promo Center',
        description: 'En CASAN Promo Center, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app/',
        type: 'website',
        images: [
            {
                url: Data.digitalMarket_icon,
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
        title: 'Reportar producto | CASAN Promo Center',
        description: 'En CASAN Promo Center, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASAN Promo Center',
        image: Data.digitalMarket_icon
    },
    robots: 'index, follow',
    canonical: 'https://casanpromocenter.vercel.app/'
}
export default function page() {
    return <React.Fragment>
        <ListProduct />
    </React.Fragment>;
}
