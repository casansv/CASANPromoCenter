// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Máquina de Sonido y Reloj Despertador con Luz Lunar Homedics | CASAN Promo Center',
    description: 'Descubre una nueva forma de mejorar tu descanso con la máquina de sonido y reloj despertador Homedics. Diseñada para sincronizar tu sueño con los ciclos naturales de la luna, este innovador dispositivo combina tecnología avanzada y diseño elegante para crear un ambiente relajante en tu dormitorio. Disfruta de 18 sonidos calmantes, desde naturaleza hasta melodías zen, que te ayudarán a relajarte y despertar renovado. Además, su pantalla con fases lunares y brillo ajustable no solo ilumina tu espacio, sino que educa sobre el ciclo lunar, siendo perfecta para adultos y niños. ¡Transforma tus noches y comienza cada día con energía renovada! | CASAN Promo Center',
    keywords: 'máquina de sonido, reloj despertador, luz lunar, sonidos relajantes, Homedics, altavoz Bluetooth, bienestar, sueño reparador, ciclo lunar, despertador moderno, descanso nocturno, relajación, dispositivo educativo, sonidos zen, dormir mejor',
    icons: {
        icon: Data.menu_icon_03,
    },
    openGraph: {
        title: 'Máquina de Sonido y Reloj Despertador con Luz Lunar Homedics | CASAN Promo Center',
        description: 'Descubre una nueva forma de mejorar tu descanso con la máquina de sonido y reloj despertador Homedics. Diseñada para sincronizar tu sueño con los ciclos naturales de la luna, este innovador dispositivo combina tecnología avanzada y diseño elegante para crear un ambiente relajante en tu dormitorio. Disfruta de 18 sonidos calmantes, desde naturaleza hasta melodías zen, que te ayudarán a relajarte y despertar renovado. Además, su pantalla con fases lunares y brillo ajustable no solo ilumina tu espacio, sino que educa sobre el ciclo lunar, siendo perfecta para adultos y niños. ¡Transforma tus noches y comienza cada día con energía renovada! | CASAN Promo Center',
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
        title: 'Máquina de Sonido y Reloj Despertador con Luz Lunar Homedics | CASAN Promo Center',
        description: 'Descubre una nueva forma de mejorar tu descanso con la máquina de sonido y reloj despertador Homedics. Diseñada para sincronizar tu sueño con los ciclos naturales de la luna, este innovador dispositivo combina tecnología avanzada y diseño elegante para crear un ambiente relajante en tu dormitorio. Disfruta de 18 sonidos calmantes, desde naturaleza hasta melodías zen, que te ayudarán a relajarte y despertar renovado. Además, su pantalla con fases lunares y brillo ajustable no solo ilumina tu espacio, sino que educa sobre el ciclo lunar, siendo perfecta para adultos y niños. ¡Transforma tus noches y comienza cada día con energía renovada! | CASAN Promo Center',
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
