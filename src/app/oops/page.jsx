import React from 'react'

import Data from "../sconstants.json";

import Oops from './Components/Oops'





// Metadata para sitio
export const metadata = {
    title: 'Trabajando... 🚧 | CASANsv',
    description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
    keywords: 'mantenimiento, página no disponible, CASANsv, mejoras de velocidad, actualizaciones de seguridad, nuevas funcionalidades, optimización, página en construcción',
    icons: {
        icon: Data.build_icon,
    },
    openGraph: {
        title: 'Trabajando... 🚧 | CASANsv',
        description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
        url: 'https://casansv.vercel.app/',
        type: 'website',
        images: [
            {
                url: Data.build_icon,
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
        title: 'Trabajando... 🚧 | CASANsv',
        description: 'Estamos trabajando en esta página para ofrecerte una experiencia mejorada. Puede ser por mejoras de velocidad, actualizaciones de seguridad o la incorporación de nuevas funcionalidades. ¡Volveremos pronto con más para ti!',
        image: Data.build_icon
    },
    robots: 'index, follow',
    canonical: 'https://casansv.vercel.app/'
}
export default function page() {
    return (
        <React.Fragment>
            <Oops />
        </React.Fragment>
    )
}
