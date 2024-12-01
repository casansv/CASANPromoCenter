// src/app/BACKSTATE/Online/Product/page.jsx
import React from 'react'

import Data from "../../../../sconstants.json";

import ProductPage from './Product';





// Metadata para producto
export const metadata = {
    title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento | CASAN Promo Center',
    description: 'La Samsung Galaxy Tab A9+ es la tablet ideal para quienes buscan combinar estilo, rendimiento y versatilidad en un solo dispositivo. Con su cuerpo metálico en color gris plateado y una pantalla de 11 Pulgadas con resolución de 1920x1200 píxeles, esta tablet ofrece una experiencia visual cautivadora, incluso en ambientes con mucha luz. Disfruta de un sonido envolvente gracias a su tecnología 3D, perfecta para películas, música o videollamadas. Con 8 GB de RAM y 128 GB de almacenamiento interno, ampliable hasta 1 TB, tendrás espacio y fluidez para realizar múltiples tareas al mismo tiempo. Además, la función de dividir la pantalla en tres te permite gestionar apps de manera eficiente, maximizando tu productividad. Con Android 12 y herramientas de seguridad como Secure Folder y Privacy Dashboard, esta tablet no solo es potente, sino también confiable y segura. Perfecta para el hogar, el trabajo o el entretenimiento. | CASAN Promo Center',
    keywords: 'Samsung Galaxy Tab A9+, tablet 128 GB almacenamiento, pantalla 11 pulgadas resolución 1920x1200, tablet Android 12, tablet multitarea, tablet con sonido 3D, tablet para entretenimiento y trabajo, tablet gris plateado, tablet con 8 GB RAM, tablet con almacenamiento ampliable',
    icons: {
        icon: Data.menu_icon_01,
    },
    openGraph: {
        title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A9+ es la tablet ideal para quienes buscan combinar estilo, rendimiento y versatilidad en un solo dispositivo. Con su cuerpo metálico en color gris plateado y una pantalla de 11 Pulgadas con resolución de 1920x1200 píxeles, esta tablet ofrece una experiencia visual cautivadora, incluso en ambientes con mucha luz. Disfruta de un sonido envolvente gracias a su tecnología 3D, perfecta para películas, música o videollamadas. Con 8 GB de RAM y 128 GB de almacenamiento interno, ampliable hasta 1 TB, tendrás espacio y fluidez para realizar múltiples tareas al mismo tiempo. Además, la función de dividir la pantalla en tres te permite gestionar apps de manera eficiente, maximizando tu productividad. Con Android 12 y herramientas de seguridad como Secure Folder y Privacy Dashboard, esta tablet no solo es potente, sino también confiable y segura. Perfecta para el hogar, el trabajo o el entretenimiento. | CASAN Promo Center',
        url: 'https://casanpromocenter.vercel.app',
        type: 'website',
        images: [
            {
                url: Data.menu_icon_01,
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
        title: 'Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento | CASAN Promo Center',
        description: 'La Samsung Galaxy Tab A9+ es la tablet ideal para quienes buscan combinar estilo, rendimiento y versatilidad en un solo dispositivo. Con su cuerpo metálico en color gris plateado y una pantalla de 11 Pulgadas con resolución de 1920x1200 píxeles, esta tablet ofrece una experiencia visual cautivadora, incluso en ambientes con mucha luz. Disfruta de un sonido envolvente gracias a su tecnología 3D, perfecta para películas, música o videollamadas. Con 8 GB de RAM y 128 GB de almacenamiento interno, ampliable hasta 1 TB, tendrás espacio y fluidez para realizar múltiples tareas al mismo tiempo. Además, la función de dividir la pantalla en tres te permite gestionar apps de manera eficiente, maximizando tu productividad. Con Android 12 y herramientas de seguridad como Secure Folder y Privacy Dashboard, esta tablet no solo es potente, sino también confiable y segura. Perfecta para el hogar, el trabajo o el entretenimiento. | CASAN Promo Center',
        image: Data.menu_icon_01
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
