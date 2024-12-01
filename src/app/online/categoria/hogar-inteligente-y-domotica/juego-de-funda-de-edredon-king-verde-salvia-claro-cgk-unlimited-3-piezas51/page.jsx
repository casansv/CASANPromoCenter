// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Juego de Funda de Edredón King Verde Salvia Claro CGK Unlimited (3 Piezas) | CASAN Promo Center',
    description: 'Renueva tu dormitorio con el lujoso juego de funda de edredón King de CGK Unlimited, diseñado para ofrecer la máxima comodidad y estilo. Fabricado en microfibra de doble cepillado, este juego de 3 piezas incluye una funda de edredón de 104 x 90 pulgadas y dos fundas de almohada de 20 x 36 pulgadas. Su textura extra suave, ligera y transpirable garantiza noches de descanso fresco y confortable durante todo el año. Equipado con 8 lazos y un cierre de cremallera, ofrece un ajuste perfecto y fácil mantenimiento, conservando su apariencia vibrante y sin decoloración incluso tras múltiples lavados. | CASAN Promo Center',
    keywords: 'funda de edredón King, CGK Unlimited, verde salvia claro, ropa de cama de lujo, microfibra suave, funda de almohada, fácil cuidado, resistente a la decoloración, cierre de cremallera, lazos en esquinas, juego de edredón transpirable, ropa de cama para todas las estaciones, decoración elegante, ropa de cama ligera, juego de edredón 3 piezas, dormitorio acogedor',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Juego de Funda de Edredón King Verde Salvia Claro CGK Unlimited (3 Piezas) | CASAN Promo Center',
        description: 'Renueva tu dormitorio con el lujoso juego de funda de edredón King de CGK Unlimited, diseñado para ofrecer la máxima comodidad y estilo. Fabricado en microfibra de doble cepillado, este juego de 3 piezas incluye una funda de edredón de 104 x 90 pulgadas y dos fundas de almohada de 20 x 36 pulgadas. Su textura extra suave, ligera y transpirable garantiza noches de descanso fresco y confortable durante todo el año. Equipado con 8 lazos y un cierre de cremallera, ofrece un ajuste perfecto y fácil mantenimiento, conservando su apariencia vibrante y sin decoloración incluso tras múltiples lavados. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_03,
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
        title: 'Juego de Funda de Edredón King Verde Salvia Claro CGK Unlimited (3 Piezas) | CASAN Promo Center',
        description: 'Renueva tu dormitorio con el lujoso juego de funda de edredón King de CGK Unlimited, diseñado para ofrecer la máxima comodidad y estilo. Fabricado en microfibra de doble cepillado, este juego de 3 piezas incluye una funda de edredón de 104 x 90 pulgadas y dos fundas de almohada de 20 x 36 pulgadas. Su textura extra suave, ligera y transpirable garantiza noches de descanso fresco y confortable durante todo el año. Equipado con 8 lazos y un cierre de cremallera, ofrece un ajuste perfecto y fácil mantenimiento, conservando su apariencia vibrante y sin decoloración incluso tras múltiples lavados. | CASAN Promo Center',
        image: Data.menu_icon_03
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
