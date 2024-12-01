// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Zapatos de Flamenco para Niña y Mujer La Señorita - Clásicos, Cómodos y con Suela de Goma para Bailar Sevillanas | CASAN Promo Center',
    description: 'Los zapatos de flamenco La Señorita son la opción ideal para quienes buscan comodidad y estilo en sus clases de baile o actuaciones. Disponibles en una amplia variedad de tallas, desde el número 24 hasta el 42, son perfectos tanto para niñas como para mujeres. Fabricados con materiales de alta calidad, estos zapatos de tacón se destacan por su suela de goma, que ofrece un agarre excepcional, y su cierre con hebilla, que asegura un ajuste perfecto y máximo confort mientras bailas. Ya sea para iniciarte en el flamenco, practicar sevillanas o completar tu atuendo de gitana en la feria, los zapatos La Señorita son la elección perfecta. Además, su diseño estiliza la figura y permite que el vestido de flamenca tenga un movimiento fluido y vibrante, ideal para crear el look completo. | CASAN Promo Center',
    keywords: 'zapatos de flamenco, zapatos de tacón para baile, zapatos de flamenco niña, zapatos sevillanas, zapatos flamenco mujer, zapatos de flamenco con hebilla, calzado flamenco, flamenco para niños, calzado de baile, zapatos flamenco gitana, zapatos flamenco cómodo, tacón flamenco niña, zapatos de flamenco para clases, zapatos flamenco de goma, regalo flamenco niña',
    icons: {
        icon: Data.menu_icon_04,
    },
    openGraph: {
        title: 'Zapatos de Flamenco para Niña y Mujer La Señorita - Clásicos, Cómodos y con Suela de Goma para Bailar Sevillanas | CASAN Promo Center',
        description: 'Los zapatos de flamenco La Señorita son la opción ideal para quienes buscan comodidad y estilo en sus clases de baile o actuaciones. Disponibles en una amplia variedad de tallas, desde el número 24 hasta el 42, son perfectos tanto para niñas como para mujeres. Fabricados con materiales de alta calidad, estos zapatos de tacón se destacan por su suela de goma, que ofrece un agarre excepcional, y su cierre con hebilla, que asegura un ajuste perfecto y máximo confort mientras bailas. Ya sea para iniciarte en el flamenco, practicar sevillanas o completar tu atuendo de gitana en la feria, los zapatos La Señorita son la elección perfecta. Además, su diseño estiliza la figura y permite que el vestido de flamenca tenga un movimiento fluido y vibrante, ideal para crear el look completo. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_04,
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
        title: 'Zapatos de Flamenco para Niña y Mujer La Señorita - Clásicos, Cómodos y con Suela de Goma para Bailar Sevillanas | CASAN Promo Center',
        description: 'Los zapatos de flamenco La Señorita son la opción ideal para quienes buscan comodidad y estilo en sus clases de baile o actuaciones. Disponibles en una amplia variedad de tallas, desde el número 24 hasta el 42, son perfectos tanto para niñas como para mujeres. Fabricados con materiales de alta calidad, estos zapatos de tacón se destacan por su suela de goma, que ofrece un agarre excepcional, y su cierre con hebilla, que asegura un ajuste perfecto y máximo confort mientras bailas. Ya sea para iniciarte en el flamenco, practicar sevillanas o completar tu atuendo de gitana en la feria, los zapatos La Señorita son la elección perfecta. Además, su diseño estiliza la figura y permite que el vestido de flamenca tenga un movimiento fluido y vibrante, ideal para crear el look completo. | CASAN Promo Center',
        image: Data.menu_icon_04
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
