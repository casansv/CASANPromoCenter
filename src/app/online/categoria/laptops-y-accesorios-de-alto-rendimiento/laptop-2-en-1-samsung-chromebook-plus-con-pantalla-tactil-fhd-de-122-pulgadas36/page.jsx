// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas | CASAN Promo Center',
    description: 'La Samsung Chromebook Plus combina versatilidad y potencia en un diseño compacto y moderno, ideal para negocios y estudiantes. Con su pantalla táctil FHD de 12.2 pulgadas y su bisagra de 360°, funciona como laptop y tableta según lo necesites. Está equipada con un procesador Intel Celeron de doble núcleo, 4GB de RAM LPDDR3 y almacenamiento de 224GB (64GB eMMC + expansión adicional), ofreciendo un rendimiento ágil y capacidad suficiente para tus archivos y aplicaciones. Su sistema operativo Chrome OS es rápido, seguro y actualizado, perfecto para la productividad diaria y el entretenimiento. | CASAN Promo Center',
    keywords: 'Samsung Chromebook Plus, laptop 2 en 1, pantalla táctil FHD, laptop para estudiantes, Chrome OS, laptop convertible, Intel Celeron, RAM 4GB, almacenamiento 224GB, laptop compacta y ligera',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas | CASAN Promo Center',
        description: 'La Samsung Chromebook Plus combina versatilidad y potencia en un diseño compacto y moderno, ideal para negocios y estudiantes. Con su pantalla táctil FHD de 12.2 pulgadas y su bisagra de 360°, funciona como laptop y tableta según lo necesites. Está equipada con un procesador Intel Celeron de doble núcleo, 4GB de RAM LPDDR3 y almacenamiento de 224GB (64GB eMMC + expansión adicional), ofreciendo un rendimiento ágil y capacidad suficiente para tus archivos y aplicaciones. Su sistema operativo Chrome OS es rápido, seguro y actualizado, perfecto para la productividad diaria y el entretenimiento. | CASAN Promo Center',
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
        title: 'Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas | CASAN Promo Center',
        description: 'La Samsung Chromebook Plus combina versatilidad y potencia en un diseño compacto y moderno, ideal para negocios y estudiantes. Con su pantalla táctil FHD de 12.2 pulgadas y su bisagra de 360°, funciona como laptop y tableta según lo necesites. Está equipada con un procesador Intel Celeron de doble núcleo, 4GB de RAM LPDDR3 y almacenamiento de 224GB (64GB eMMC + expansión adicional), ofreciendo un rendimiento ágil y capacidad suficiente para tus archivos y aplicaciones. Su sistema operativo Chrome OS es rápido, seguro y actualizado, perfecto para la productividad diaria y el entretenimiento. | CASAN Promo Center',
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
