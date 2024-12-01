import React from 'react'

import Data from "../sconstants.json";

import Oops from './Components/Oops'





// Metadata para sitio
export const metadata = {
    title: 'Trabajando... 🚧 | CASAN Promo Center',
    description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
    keywords: 'mantenimiento, página no disponible, CASAN Promo Center, mejoras de velocidad, actualizaciones de seguridad, nuevas funcionalidades, optimización, página en construcción',
    icons: {
        icon: Data.build_icon,
    },
    openGraph: {
        title: 'Trabajando... 🚧 | CASAN Promo Center',
        description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
        url: 'https://casanpromocenter.vercel.app/',
        type: 'website',
        images: [
            {
                url: Data.build_icon,
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
        title: 'Trabajando... 🚧 | CASAN Promo Center',
        description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
        image: Data.build_icon
    },
    robots: 'index, follow',
    canonical: 'https://casanpromocenter.vercel.app/'
}
export default function page() {
    return (
        <React.Fragment>
            <Oops />
        </React.Fragment>
    )
}
