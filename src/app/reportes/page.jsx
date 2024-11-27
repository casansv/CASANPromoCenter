// src\app\reportes\page.jsx
import React from "react";

import Data from "../sconstants.json";

import ListProduct from "./Components/ListProduct";





// Metadata para sitio
export const metadata = {
    title: 'Reportar producto | CASANsv',
    description: 'En CASANsv, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASANsv',
    keywords: 'CASANsv, reportar productos defectuosos, asistencia para reportes, derechos del consumidor, productos problemáticos, guías de reportes, cómo reportar productos defectuosos, apoyo al consumidor, seguridad de productos, ayuda para reportes',
    icons: {
        icon: Data.digitalMarket_icon,
    },
    openGraph: {
        title: 'Reportar producto | CASANsv',
        description: 'En CASANsv, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASANsv',
        url: 'https://casansv.vercel.app/',
        type: 'website',
        images: [
            {
                url: Data.digitalMarket_icon,
                width: 1024,
                height: 1024,
                alt: 'CASANsv'
            }
        ],
        site_name: 'CASANsv'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@casansv',
        title: 'Reportar producto | CASANsv',
        description: 'En CASANsv, te ayudamos a entender cómo reportar productos defectuosos de manera efectiva. Encuentra guías claras, recursos útiles y orientación paso a paso para realizar tus reportes correctamente y proteger tus derechos como consumidor. | CASANsv',
        image: Data.digitalMarket_icon
    },
    robots: 'index, follow',
    canonical: 'https://casansv.vercel.app/'
}
export default function page() {
    return <React.Fragment>
        <ListProduct />
    </React.Fragment>;
}
