// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Portátil HONOR MagicBook 16 con Pantalla FHD de 144 Hz y AMD Ryzen 5600H | CASAN Promo Center',
    description: 'El HONOR MagicBook 16 combina potencia, diseño y funcionalidad en un dispositivo ultrafino y ligero. Con su pantalla FullView IPS de 16,1 pulgadas, resolución FHD y tasa de refresco de 144 Hz, ofrece imágenes vibrantes y fluidas, perfectas para trabajo, estudio o entretenimiento. Equipada con un procesador AMD Ryzen 5 5600H de arquitectura Zen 3 y 16 GB de RAM DDR4 de doble canal, esta laptop garantiza un rendimiento excepcional incluso en tareas exigentes. Su almacenamiento SSD de 512 GB asegura arranques rápidos y suficiente espacio para todos tus archivos. Su cuerpo metálico de aluminio no solo es elegante, sino también resistente y fácil de transportar con un peso de 1,84 kg y un grosor de 18,2 mm. Además, con la batería de alta capacidad podrás disfrutar de hasta 8 horas de uso continuo, mientras que el cargador rápido de 65 W te permite alcanzar el 85 % de carga en solo una hora. | CASAN Promo Center',
    keywords: 'HONOR MagicBook 16, portátil pantalla 144 Hz, portátil FHD 16,1 pulgadas, portátil AMD Ryzen 5600H, laptop con 16 GB RAM, portátil SSD 512 GB, portátil ligero y resistente, laptop para trabajo y estudio, portátil con WiFi 6, portátil con Windows 11, portátil cuerpo metálico',
    icons: {
        icon: Data.menu_icon_02,
    },
    openGraph: {
        title: 'Portátil HONOR MagicBook 16 con Pantalla FHD de 144 Hz y AMD Ryzen 5600H | CASAN Promo Center',
        description: 'El HONOR MagicBook 16 combina potencia, diseño y funcionalidad en un dispositivo ultrafino y ligero. Con su pantalla FullView IPS de 16,1 pulgadas, resolución FHD y tasa de refresco de 144 Hz, ofrece imágenes vibrantes y fluidas, perfectas para trabajo, estudio o entretenimiento. Equipada con un procesador AMD Ryzen 5 5600H de arquitectura Zen 3 y 16 GB de RAM DDR4 de doble canal, esta laptop garantiza un rendimiento excepcional incluso en tareas exigentes. Su almacenamiento SSD de 512 GB asegura arranques rápidos y suficiente espacio para todos tus archivos. Su cuerpo metálico de aluminio no solo es elegante, sino también resistente y fácil de transportar con un peso de 1,84 kg y un grosor de 18,2 mm. Además, con la batería de alta capacidad podrás disfrutar de hasta 8 horas de uso continuo, mientras que el cargador rápido de 65 W te permite alcanzar el 85 % de carga en solo una hora. | CASAN Promo Center',
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
        title: 'Portátil HONOR MagicBook 16 con Pantalla FHD de 144 Hz y AMD Ryzen 5600H | CASAN Promo Center',
        description: 'El HONOR MagicBook 16 combina potencia, diseño y funcionalidad en un dispositivo ultrafino y ligero. Con su pantalla FullView IPS de 16,1 pulgadas, resolución FHD y tasa de refresco de 144 Hz, ofrece imágenes vibrantes y fluidas, perfectas para trabajo, estudio o entretenimiento. Equipada con un procesador AMD Ryzen 5 5600H de arquitectura Zen 3 y 16 GB de RAM DDR4 de doble canal, esta laptop garantiza un rendimiento excepcional incluso en tareas exigentes. Su almacenamiento SSD de 512 GB asegura arranques rápidos y suficiente espacio para todos tus archivos. Su cuerpo metálico de aluminio no solo es elegante, sino también resistente y fácil de transportar con un peso de 1,84 kg y un grosor de 18,2 mm. Además, con la batería de alta capacidad podrás disfrutar de hasta 8 horas de uso continuo, mientras que el cargador rápido de 65 W te permite alcanzar el 85 % de carga en solo una hora. | CASAN Promo Center',
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
