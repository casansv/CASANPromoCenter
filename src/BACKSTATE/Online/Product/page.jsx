// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

//import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: '{METADATA_TITULO} | CASANsv',
    description: '{METADATA_DESCRIPCION} | CASANsv',
    keywords: '{METADATA_KEYWORDS}',
    icons: {
        icon: {METADATA_ICON_MENU},
    },
    openGraph: {
        title: '{METADATA_TITULO} | CASANsv',
        description: '{METADATA_DESCRIPCION} | CASANsv',
        url: 'https://casansv.github.io/',
        type: 'website',
        images: [
            {
                url: {METADATA_ICON_MENU},
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
        title: '{METADATA_TITULO} | CASANsv',
        description: '{METADATA_DESCRIPCION} | CASANsv',
        image: {METADATA_ICON_MENU}
    },
    robots: 'index, follow',
    canonical: 'https://casansv.github.io/'
}
export default function page() {
    return (
        <React.Fragment>
            <ProductPage />
        </React.Fragment>
    )
}
