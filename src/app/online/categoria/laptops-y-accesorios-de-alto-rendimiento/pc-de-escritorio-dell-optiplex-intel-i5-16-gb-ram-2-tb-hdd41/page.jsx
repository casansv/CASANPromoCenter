// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'PC de Escritorio Dell OptiPlex, Intel i5, 16 GB RAM, 2 TB HDD | CASAN Promo Center',
    description: 'Eleva tu experiencia de computación con la PC de Escritorio Dell OptiPlex, equipada con un procesador Intel Core i5 de 3ª generación y una potencia de 3.2 GHz. Este sistema combina una memoria RAM de 16 GB y un disco duro de 2 TB, ofreciendo el rendimiento y almacenamiento ideales para multitareas, videojuegos o trabajo intensivo. Incluye un monitor LED Full HD de 22 pulgadas con diseño sin bisel, teclado y mouse RGB para un estilo único, y conectividad WiFi para mantenerte siempre conectado. Con Windows 10 Pro, disfrutarás de una experiencia fluida, libre de bloatware y optimizada para cualquier necesidad. | CASAN Promo Center',
    keywords: 'PC Dell OptiPlex, computadora Intel Core i5, escritorio 16 GB RAM, HDD 2 TB, monitor Full HD 22 pulgadas, teclado y mouse RGB, PC para videojuegos, computadora Windows 10 Pro, equipo de escritorio para oficina, computadora multitarea Dell',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'PC de Escritorio Dell OptiPlex, Intel i5, 16 GB RAM, 2 TB HDD | CASAN Promo Center',
        description: 'Eleva tu experiencia de computación con la PC de Escritorio Dell OptiPlex, equipada con un procesador Intel Core i5 de 3ª generación y una potencia de 3.2 GHz. Este sistema combina una memoria RAM de 16 GB y un disco duro de 2 TB, ofreciendo el rendimiento y almacenamiento ideales para multitareas, videojuegos o trabajo intensivo. Incluye un monitor LED Full HD de 22 pulgadas con diseño sin bisel, teclado y mouse RGB para un estilo único, y conectividad WiFi para mantenerte siempre conectado. Con Windows 10 Pro, disfrutarás de una experiencia fluida, libre de bloatware y optimizada para cualquier necesidad. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_02,
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
        title: 'PC de Escritorio Dell OptiPlex, Intel i5, 16 GB RAM, 2 TB HDD | CASAN Promo Center',
        description: 'Eleva tu experiencia de computación con la PC de Escritorio Dell OptiPlex, equipada con un procesador Intel Core i5 de 3ª generación y una potencia de 3.2 GHz. Este sistema combina una memoria RAM de 16 GB y un disco duro de 2 TB, ofreciendo el rendimiento y almacenamiento ideales para multitareas, videojuegos o trabajo intensivo. Incluye un monitor LED Full HD de 22 pulgadas con diseño sin bisel, teclado y mouse RGB para un estilo único, y conectividad WiFi para mantenerte siempre conectado. Con Windows 10 Pro, disfrutarás de una experiencia fluida, libre de bloatware y optimizada para cualquier necesidad. | CASAN Promo Center',
        image: Data.menu_icon_02
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
