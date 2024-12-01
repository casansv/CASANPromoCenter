// src/app/BACKSTATE/Online/Hub/ProductSearch.jsx
"use client";
import React, { useState } from "react";
import { FaCheck, FaFilter, FaTimes } from "react-icons/fa";

// Componente auxiliar Product
function Product({ Imagen, Nombre, Descripcion, Precio, PLink }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Calcular el 40% del texto
    const truncateText = (text, percentage) => {
        const truncateIndex = Math.floor(text.length * percentage);
        return text.slice(0, truncateIndex);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-700">
                <img
                    src={Imagen}
                    alt={Nombre}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <h3 className="text-xl font-bold mb-2">{Nombre}</h3>
            <div className="relative">
                <p className="text-gray-400 mb-2">
                    {isExpanded
                        ? Descripcion
                        : `${truncateText(Descripcion, 0.4)}...`}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 hover:text-blue-300 mt-2"
                >
                    {isExpanded ? "Ver menos" : "Ver completo"}
                </button>
            </div>
            <p className="text-2xl text-white font-bold mb-4">${Precio}</p>
            <a
                href={PLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
                Ver producto
            </a>
        </div>
    );
}

export default function ProductPage() {
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [searchName, setSearchName] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [productsToShow, setProductsToShow] = useState(6);

    // Lista de productos
    const productos = [
        
    {
        "Nombre": "Teléfono móvil para personas mayores con botón SOS y pantalla a color",
        "Imagen": "https://m.media-amazon.com/images/I/61dgkB6MmVL._AC_SX679_.jpg",
        "Descripcion": "El teléfono Panasonic KX-TU400EXG está diseñado pensando en la comodidad y seguridad de los adultos mayores. Con un botón SOS de fácil acceso, permite realizar llamadas de emergencia a contactos previamente configurados con solo un toque. Su pantalla TFT a color de 2,4\" ofrece una excelente visibilidad para leer mensajes o navegar por el menú. Este dispositivo combina funcionalidad y simplicidad con teclas grandes y retroiluminadas que facilitan el uso, incluso en ambientes con poca luz. Además, cuenta con una linterna integrada para mayor practicidad, una cámara para capturar recuerdos especiales y una batería de larga duración que asegura hasta 450 horas en reposo y 4 horas de conversación. Con conectividad Bluetooth y diseño compacto, este teléfono es perfecto para quienes buscan un dispositivo confiable y fácil de usar.",
        "Precio": 39.99,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/telefono-movil-para-personas-mayores-con-boton-sos-y-pantalla-a-color2"
    },
    {
        "Nombre": "Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración",
        "Imagen": "https://m.media-amazon.com/images/I/71yATvhR3OL._AC_SX569_.jpg",
        "Descripcion": "Descubre la innovación con la Google Pixel Tablet, diseñada para transformar tu experiencia digital. Equipada con el avanzado procesador Tensor G2, esta tablet combina un rendimiento ágil con la inteligencia artificial de Google, facilitando videollamadas nítidas, streaming fluido y una navegación rápida. Su pantalla de 11 pulgadas ofrece colores vivos y brillo adaptativo, ideal para disfrutar tus series favoritas o editar fotos con precisión. Con 8 GB de RAM y 256 GB de almacenamiento, tendrás espacio y potencia para todas tus aplicaciones y proyectos. Además, la batería de larga duración te permite usarla hasta 12 horas seguidas, asegurando entretenimiento y productividad sin interrupciones. Dale un toque creativo con el lápiz Pixel o realiza tareas cómodamente con su teclado dedicado. Comparte contenido fácilmente entre dispositivos gracias a funciones como Quick Share y transferencia directa. ¡El futuro está en tus manos con la Pixel Tablet!",
        "Precio": 619.0,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tablet-android-google-pixel-con-pantalla-de-11-pulgadas-ia-integrada-y-bateria-de-larga-duracion3"
    },
    {
        "Nombre": "Tablet de 8 Pulgadas con Cuerpo de Metal Dorado y SIM Dual",
        "Imagen": "https://m.media-amazon.com/images/I/61jzpFgieRL._AC_SX425_.jpg",
        "Descripcion": "Sumérgete en la tecnología avanzada con esta Tablet de 8 pulgadas, diseñada para ofrecer rendimiento, estilo y funcionalidad. Su cuerpo metálico en elegante tono dorado combina con una pantalla IPS de alta resolución (1920x1200), ideal para disfrutar de imágenes vibrantes y nítidas. Con una CPU Octa Core, 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet garantiza un desempeño fluido, perfecto para multitarea y aplicaciones exigentes. La batería de 8800 mAh asegura largas horas de uso continuo, ya sea para trabajar, jugar o relajarte con tus series y libros favoritos. Además, su doble ranura SIM te permite mantenerte conectado, y la configuración de cámara dual (frontal de 2 MP y trasera de 8 MP) captura cada detalle de tus momentos importantes, incluso durante videollamadas. Esta tablet es tu compañera ideal, tanto para el día a día como para viajes.",
        "Precio": 110.58,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tablet-de-8-pulgadas-con-cuerpo-de-metal-dorado-y-sim-dual4"
    },
    {
        "Nombre": "Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12",
        "Imagen": "https://m.media-amazon.com/images/I/617atwaJKLL._AC_SX679_.jpg",
        "Descripcion": "La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de 9 pulgadas, combinada con altavoces estéreo duales mejorados con Dolby Atmos, crea una experiencia cinematográfica envolvente en la palma de tu mano. Potenciada por el procesador MediaTek Helio G80 y 3 GB de RAM, esta tablet garantiza un rendimiento fluido, ya sea para jugar, navegar o realizar tareas cotidianas. Además, cuenta con 32 GB de almacenamiento interno, ampliables hasta 2 TB mediante tarjeta microSD (se vende por separado), para que nunca te quedes sin espacio para tus aplicaciones, fotos o videos. La batería de larga duración te permite disfrutar de tus series y películas favoritas sin interrupciones, mientras el modo de lectura envolvente y la certificación TUV protegen tu vista, haciéndola perfecta para largas sesiones de lectura. Incluye funda y película protectora para mayor practicidad y protección.",
        "Precio": 94.0,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tablet-lenovo-tab-m9-de-9-pulgadas-hd-con-dolby-atmos-y-android-125"
    },
    {
        "Nombre": "Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh",
        "Imagen": "https://m.media-amazon.com/images/I/61sBnhuQxaL._AC_SX569_.jpg",
        "Descripcion": "La HUAWEI MatePad SE 11 Pulgadas es la combinación perfecta entre diseño elegante y tecnología avanzada. Con un peso ligero de solo 475 g y un grosor de 6,9 mm, esta tablet es fácil de manejar y está diseñada para llevarla contigo a cualquier lugar. Su pantalla FullView de 11 pulgadas, con certificación TÜV Rheinland, protege tu vista con baja emisión de luz azul y tecnología sin parpadeos, permitiéndote disfrutar de sesiones prolongadas de lectura o entretenimiento sin fatiga visual. La experiencia inmersiva está garantizada gracias a sus cuatro altavoces simétricos, optimizados con la tecnología Histen 9.0, para un sonido nítido y adaptado a música, películas, juegos o clases en línea. Su lápiz óptico M-Pen Lite facilita la creatividad y la productividad, permitiéndote tomar notas y crear diseños sin necesidad de emparejamiento Bluetooth. Además, el modo Kids Corner brinda un espacio seguro para que los niños aprendan y jueguen bajo la supervisión de los padres, fomentando hábitos digitales saludables. Con una batería de 7700 mAh, la MatePad SE 11 Pulgadas ofrece horas de uso ininterrumpido para todas tus actividades diarias.",
        "Precio": 210.18,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tablet-huawei-matepad-se-11-pulgadas-con-mpen-lite-y-superbateria-de-7700-mah6"
    },
    {
        "Nombre": "iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia",
        "Imagen": "https://m.media-amazon.com/images/I/81vZCv9kA0L._AC_SX569_.jpg",
        "Descripcion": "Experimenta la perfección tecnológica con el iPhone 11 Pro de 64 GB, un dispositivo diseñado para quienes buscan rendimiento y estilo en un solo equipo. Su pantalla OLED Super Retina XDR de 5.8 pulgadas ofrece colores vibrantes y negros profundos, ideales para disfrutar contenido multimedia y trabajar con precisión. Su resistencia al agua y polvo con certificación IP68 garantiza durabilidad, incluso en condiciones exigentes. Este modelo integra un sistema de triple cámara de 12 MP que redefine la fotografía móvil. Captura cada detalle con el gran angular, crea retratos increíbles con el modo retrato y explora nuevas perspectivas con el ultra gran angular. Además, graba videos en 4K a 60 fps para resultados de calidad profesional. Su cámara frontal TrueDepth también es perfecta para selfies con estilo, videos en 4K y divertidas grabaciones en cámara lenta. Con el potente chip A13 Bionic y su Neural Engine de tercera generación, el iPhone 11 Pro asegura una experiencia fluida y rápida, ideal para aplicaciones exigentes y multitarea. Disfruta de carga inalámbrica, carga rápida con el adaptador de 18W incluido y el sistema iOS con nuevas prestaciones de privacidad y herramientas avanzadas de edición.",
        "Precio": 1109.07,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/iphone-11-pro-de-64-gb-en-plata-tecnologia-avanzada-y-elegancia9"
    },
    {
        "Nombre": "OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida",
        "Imagen": "https://m.media-amazon.com/images/I/81hygajaQnL._AC_SX679_.jpg",
        "Descripcion": "Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este smartphone, con su pantalla HD+ LCD de 6.7 pulgadas, ofrece una experiencia visual inmersiva gracias a su brillo de 950 nits y tasa de refresco de 90Hz, ideal para disfrutar tus películas, juegos y contenidos favoritos con colores vibrantes y nitidez impresionante. El exclusivo sistema OReality Audio y el Modo Ultra Volumen 300% garantizan un sonido estéreo envolvente para una experiencia auditiva excepcional. El diseño elegante y funcional del OPPO A60 4G incorpora el acabado Particle Magnetic con OPPO Glow, que lo hace resistente a arañazos y libre de huellas. Su ligereza de 186g y grosor de 7.68mm lo convierten en el compañero perfecto para llevarlo cómodamente en cualquier situación. Equipado con una batería de 5,000 mAh y tecnología de carga rápida de 45W SUPERVOOC, este dispositivo asegura hasta dos días de uso continuo, con una carga del 50% en solo 30 minutos. Además, su procesador Qualcomm Snapdragon 680 y 8GB de RAM (ampliables) garantizan un rendimiento fluido, mientras que sus 256GB de almacenamiento interno, expandibles hasta 1TB, te permiten guardar todo lo que necesitas sin preocupaciones. La cámara triple de 50+2+8 MP del OPPO A60 4G está diseñada para capturar fotos y videos de alta calidad en cualquier condición de luz, permitiéndote explorar tu creatividad y compartir tus mejores momentos fácilmente.",
        "Precio": 210.5,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/oppo-a60-4g-smartphone-libre-256gb-pantalla-hd-67-pulgadas-y-carga-rapida10"
    },
    {
        "Nombre": "Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente",
        "Imagen": "https://m.media-amazon.com/images/I/71JTIdBUvYL._AC_SX679_.jpg",
        "Descripcion": "El Google Pixel 8a redefine lo que esperas de un smartphone. Equipado con la innovadora Cámara Pixel, este dispositivo captura fotos y videos excepcionales en cualquier situación. Gracias a la inteligencia artificial de Google, puedes lograr imágenes grupales perfectas, corregir fotos borrosas y mejorar instantáneamente la calidad de imágenes antiguas o recientes. Además, con funciones como el Borrador Mágico para Audio y el Zoom de Alta Resolución, cada detalle de tus recuerdos estará a tu alcance con una calidad inigualable. El diseño duradero del Pixel 8a no solo es elegante, sino que también resiste líquidos, polvo y arañazos gracias a su protección IP67 y el vidrio Corning Gorilla Glass 3. Con una batería de 24 horas de duración y potentes herramientas de seguridad integradas, este smartphone está diseñado para acompañarte en tu día a día de forma fiable. Su capacidad de filtrar llamadas de spam y optimizar la calidad de las llamadas hace que comunicarte sea más fácil y claro, incluso en ambientes ruidosos. Este dispositivo no solo te conecta, sino que te protege. Con funciones de emergencia que llaman automáticamente a los servicios y comparten tu ubicación precisa, el Google Pixel 8a es más que un teléfono: es un asistente confiable en cualquier situación.",
        "Precio": 580.82,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/google-pixel-8a-smartphone-android-128gb-con-camara-inteligente-y-diseno-resistente11"
    },
    {
        "Nombre": "Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz",
        "Imagen": "https://m.media-amazon.com/images/I/61GkKd1A0GL._AC_SX679_.jpg",
        "Descripcion": "El Motorola Moto g24 combina estilo, rendimiento y funcionalidad a un precio accesible. Este smartphone cuenta con una pantalla HD+ de 6,56 pulgadas y tasa de refresco de 90Hz, diseñada para ofrecer una experiencia visual fluida y agradable, incluso bajo luz solar intensa gracias a su Modo Alto Brillo. Con materiales de calidad y un diseño optimizado, es cómodo de sostener y usar durante todo el día. Captura momentos únicos con su sistema de cámara dual de 50 MP + 2 MP, que incluye un objetivo Macro Vision especializado para explorar los detalles más pequeños. Ya sea de día o de noche, tus fotos tendrán calidad profesional. Además, el sonido Dolby Atmos con altavoces estéreo te sumerge en un audio multidimensional con voces nítidas y graves potentes para disfrutar de tu entretenimiento favorito. Equipado con hasta 8 GB de RAM gracias a la función Expansión de Memoria, este dispositivo te permite realizar multitareas de manera fluida y abrir aplicaciones al instante. Su batería de 5000 mAh con carga TurboPower de 15W garantiza un rendimiento duradero, ideal para quienes buscan productividad y diversión sin interrupciones. Además, incluye funda y cargador, para que lo tengas todo desde el primer momento.",
        "Precio": 115.3,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/motorola-moto-g24-128gb-dual-sim-con-camara-50mp-y-pantalla-hd-90hz12"
    },
    {
        "Nombre": "vivo Y17s 128GB con Triple Cámara de 50 MP y Pantalla HD+ 6,56 Pulgadas",
        "Imagen": "https://m.media-amazon.com/images/I/710j3H4fTgL._AC_SX466_.jpg",
        "Descripcion": "El vivo Y17s es el smartphone que combina diseño moderno, potencia y versatilidad para ofrecerte una experiencia excepcional. Con 4GB de RAM y 128GB de almacenamiento, junto con funciones avanzadas como RAM Extendida 3.0, este dispositivo garantiza un rendimiento fluido y una capacidad amplia para todas tus aplicaciones y archivos. Su sistema de triple cámara de 50 MP permite capturar imágenes impresionantes en cualquier situación. Desde retratos con efecto bokeh hasta fotos macro detalladas, el Y17s asegura calidad profesional, incluso en condiciones de poca luz. Además, su pantalla HD+ de 6,56 pulgadas de alto brillo ofrece colores vibrantes y visibilidad impecable, incluso bajo luz solar intensa. El diseño delgado de 8,09 mm, con acabado 2.5D y materiales de primera calidad, no solo es elegante, sino también resistente. Gracias a la certificación IP54, el vivo Y17s es resistente al agua y al polvo, ideal para acompañarte en cualquier aventura. Su batería de 5000 mAh con carga rápida de 15W asegura horas de uso ininterrumpido para tus actividades diarias, desde escuchar música hasta jugar y disfrutar de videos.",
        "Precio": 157.64,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/vivo-y17s-128gb-con-triple-camara-de-50-mp-y-pantalla-hd-656-pulgadas13"
    },
    {
        "Nombre": "HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W",
        "Imagen": "https://m.media-amazon.com/images/I/71-W9YVyc5L._AC_SX569_.jpg",
        "Descripcion": "El HUAWEI Pura 70 Ultra es la combinación perfecta de tecnología avanzada y diseño artístico. Con una Cámara Emergente con Ultrailuminación y un sensor de 1 pulgada, este smartphone captura detalles impresionantes, incluso en condiciones de poca luz. Su teleobjetivo macro con zoom de 35 aumentos y apertura F2.1 te permite descubrir el mundo desde nuevas perspectivas, mientras que el XD Motion Engine asegura imágenes nítidas, incluso a velocidades ultraaltas. Este dispositivo destaca por su resistente Cristal Kunlun Superduradero, diseñado para soportar caídas y arañazos, brindando tranquilidad y confiabilidad. Además, su elegante Diseño de Patrón Estrellado con texturas en relieve convierte al HUAWEI Pura 70 Ultra en un espectáculo visual único que combina innovación y estilo. Con una batería de 5200 mAh y la función de Doble SuperCharge de 100W, obtendrás energía suficiente para todo el día en solo minutos. Además, cuenta con carga inversa de hasta 20W para mantener tus otros dispositivos funcionando en cualquier momento. Con 16GB de RAM y 512GB de almacenamiento, este smartphone ofrece un rendimiento inigualable para multitarea y almacenamiento de archivos de gran tamaño.",
        "Precio": 1585.92,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/huawei-pura-70-ultra-512gb-verde-con-camara-emergente-y-supercharge-de-100w14"
    },
    {
        "Nombre": "Samsung Galaxy A25 5G 128GB Negro con Cámara de 50 MP y Carga Rápida",
        "Imagen": "https://m.media-amazon.com/images/I/71NcnZFxQDL._AC_SX679_.jpg",
        "Descripcion": "El Samsung Galaxy A25 5G es el smartphone ideal para quienes buscan rendimiento, diseño y tecnología avanzada. Su pantalla Super AMOLED de 6,5 pulgadas ofrece colores vibrantes y detalles impresionantes, incluso bajo luz solar intensa, gracias a su brillo de hasta 1000 nits y Vision Booster. Además, el Eye Comfort Shield reduce la emisión de luz azul para proteger tu vista durante largas horas de uso. Equípate con una Cámara Principal de 50 MP con estabilización óptica (OIS) para capturar imágenes nítidas y videos suaves, mientras que la cámara frontal de 13 MP asegura selfies impecables. Con su tecnología VDIS y frecuencia de muestreo de movimiento de 500Hz, tus videos serán estables y llenos de detalles, perfectos para compartir. Este smartphone combina la potencia del procesador Exynos 1280, 6GB de RAM y 128GB de almacenamiento (ampliable a 1TB con tarjeta microSD), junto con la conectividad 5G, para un rendimiento rápido y eficiente. Su batería de 5.000 mAh con Carga Súper Rápida te mantiene activo todo el día. Además, incluye una funda transparente para proteger tu dispositivo con estilo.",
        "Precio": 316.33,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/samsung-galaxy-a25-5g-128gb-negro-con-camara-de-50-mp-y-carga-rapida15"
    },
    {
        "Nombre": "Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa",
        "Imagen": "https://m.media-amazon.com/images/I/41NgNigFmbL._AC_SX679_.jpg",
        "Descripcion": "El Panasonic KX-TU400EXC es un teléfono móvil diseñado especialmente para personas mayores, combinando facilidad de uso con funciones esenciales. Equipado con un práctico Botón SOS, este dispositivo permite realizar llamadas de emergencia con solo un toque, brindando tranquilidad a los usuarios y sus familias. Sus teclas grandes, separadas y retroiluminadas facilitan la lectura y el manejo, incluso en condiciones de poca luz. Con una pantalla a color TFT de 2,4 pulgadas, este móvil presenta un diseño intuitivo y visualmente claro. La batería de larga duración ofrece hasta 4 horas de conversación y 450 horas en reposo, ideal para acompañarte durante todo el día. Además, incluye una cámara integrada para capturar recuerdos especiales y una práctica linterna incorporada, perfecta para situaciones inesperadas. El Panasonic KX-TU400EXC también cuenta con conectividad Bluetooth, para que puedas compartir fotos o conectar dispositivos compatibles de forma sencilla. Su diseño compacto y el elegante color turquesa lo convierten en un dispositivo funcional y atractivo.",
        "Precio": 52.88,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/panasonic-kxtu400exc-telefono-para-mayores-con-boton-sos-y-camara-turquesa16"
    },
    {
        "Nombre": "HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh",
        "Imagen": "https://m.media-amazon.com/images/I/31eYwWm1X-L._AC_.jpg",
        "Descripcion": "El HAMMER 6 LTE es un teléfono diseñado para resistir los entornos más exigentes, combinando durabilidad, funcionalidad y autonomía excepcional. Con una certificación IP68 y pruebas militares, este dispositivo soporta caídas desde 1,5 metros, así como contacto con agua, polvo y barro, convirtiéndolo en la opción ideal para actividades al aire libre, trabajos intensos o aventuras extremas. Su carcasa reforzada y diseño robusto aseguran protección contra impactos y arañazos. La pantalla IPS de 2,4 pulgadas ofrece colores nítidos y gran visibilidad desde múltiples ángulos, mientras que las teclas retroiluminadas y los menús intuitivos garantizan un manejo sencillo, incluso en condiciones adversas. Su batería de 2500 mAh proporciona hasta 7 días de duración en reposo o 10 horas de llamadas continuas, con carga rápida a través de un puerto USB-C. El botón SOS permite pedir ayuda rápidamente en caso de emergencia, alertando a contactos configurados previamente. Además, la tecnología VoLTE asegura llamadas nítidas, ya sea en el bosque, en el trabajo o durante un viaje. Con una práctica linterna integrada, cámara con flash, radio FM sin auriculares y soporte para cordón, este teléfono está diseñado para ofrecer máxima versatilidad y confiabilidad en cualquier situación.",
        "Precio": 73.0,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/hammer-6-lte-telefono-resistente-ip68-con-boton-sos-y-bateria-de-2500mah17"
    },
    {
        "Nombre": "Smartphone resistente Ulefone Power Armor X11 Pro con batería de larga duración",
        "Imagen": "https://m.media-amazon.com/images/I/71EpROmfMYL._AC_SX569_.jpg",
        "Descripcion": "El Ulefone Power Armor X11 Pro es el smartphone perfecto para quienes buscan un dispositivo resistente, eficiente y duradero. Diseñado con una carcasa robusta, es ideal para actividades al aire libre o en entornos exigentes. Este modelo combina un potente rendimiento gracias a sus 4 GB de RAM y 64 GB de almacenamiento interno, con una pantalla compacta de 5,45 Pulgadas que ofrece una resolución nítida para disfrutar de tus aplicaciones favoritas. La batería de 8150 mAh asegura largas horas de uso sin preocuparte por la carga, mientras que su tecnología Android 12 y conectividad 4G te mantienen actualizado y conectado. Con funciones como reconocimiento facial, NFC y cámara frontal, este smartphone ofrece practicidad y seguridad en cada detalle.",
        "Precio": 171.67,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/smartphone-resistente-ulefone-power-armor-x11-pro-con-bateria-de-larga-duracion18"
    },
    {
        "Nombre": "Smartphone OPPO A80 5G con IA, 16GB RAM y 256GB de Almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/51O1MIzu3oL._AC_SX679_.jpg",
        "Descripcion": "El OPPO A80 5G es el smartphone diseñado para quienes buscan innovación, diseño y rendimiento excepcional. Con inteligencia artificial avanzada, una pantalla HD+ de 6,67 Pulgadas y conectividad 5G, este dispositivo eleva tu experiencia tecnológica al máximo. Disfruta de funciones inteligentes como AI Eraser para editar tus fotos al instante y AI LinkBoost para optimizar la conexión en cualquier lugar. Su batería de 5.100 mAh con carga rápida SUPERVOOC de 45W asegura que siempre estés conectado, mientras que el elegante diseño OPPO Glow combina ligereza y estilo con resistencia a huellas y arañazos. Con una cámara triple de 50 MP + 2 MP + 8 MP, captura momentos increíbles con detalle y precisión. Además, su pantalla fluida de 120 Hz y el sonido Ultra Volumen 300% ofrecen una experiencia inmersiva ideal para entretenimiento y juegos.",
        "Precio": 263.55,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/smartphone-oppo-a80-5g-con-ia-16gb-ram-y-256gb-de-almacenamiento19"
    },
    {
        "Nombre": "Smartphone Xiaomi Redmi Note 12 4G con pantalla AMOLED y cámara triple de 50 MP",
        "Imagen": "https://m.media-amazon.com/images/I/61r7Asz11RL._AC_SX679_.jpg",
        "Descripcion": "El Xiaomi Redmi Note 12 4G es el compañero perfecto para quienes buscan un smartphone potente y versátil. Equipado con una impresionante pantalla AMOLED FHD+ de 6,67 Pulgadas y frecuencia de actualización de 120 Hz, este dispositivo ofrece una experiencia visual inmersiva y fluida, ideal para disfrutar de contenido multimedia, juegos y más. Gracias a su procesador Snapdragon 685 y 4 GB de RAM, disfrutarás de un rendimiento eficiente y multitarea sin interrupciones. Su batería de 5.000 mAh asegura largas horas de uso, mientras que la carga rápida de 33 W te permitirá volver a la acción en cuestión de minutos. La cámara triple de 50 MP es perfecta para capturar momentos inolvidables con gran claridad y detalle. Con funciones como Modo Nocturno y Retrato, cada foto será única, incluso en condiciones de poca luz. Todo esto en un diseño elegante disponible en colores modernos como gris ónix.",
        "Precio": 188.53,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/smartphone-xiaomi-redmi-note-12-4g-con-pantalla-amoled-y-camara-triple-de-50-mp20"
    },
    {
        "Nombre": "Smartphone SPC Zeus 4G Pro para Mayores con Botón SOS y Base de Carga",
        "Imagen": "https://m.media-amazon.com/images/I/6165IIIWIKL._AC_SX679_.jpg",
        "Descripcion": "El SPC Zeus 4G Pro es el smartphone ideal para personas mayores que buscan simplicidad, seguridad y conectividad en un solo dispositivo. Su diseño intuitivo con iconos XXL y un menú fácil de usar facilita el acceso a las funciones principales, mientras que sus botones físicos aseguran una experiencia cómoda y eficiente. Equipado con un práctico botón SOS, permite enviar mensajes de emergencia y geolocalización a contactos definidos, ofreciendo tranquilidad a los usuarios y sus familiares. Su base de carga hace que recargar sea sencillo, y su diseño incluye la posibilidad de usar un cable USB-C reversible. Con una pantalla IPS de 5,5 Pulgadas, cámara de 13 MP y conectividad 4G, este dispositivo es perfecto para realizar videollamadas y capturar recuerdos importantes. Además, su función de ayuda remota Smart Help permite a familiares o cuidadores gestionar ajustes del teléfono a distancia, como activar el botón SOS o subir el volumen automáticamente. El SPC Zeus 4G Pro combina accesibilidad, tecnología Android 11 y almacenamiento ampliable de hasta 512 GB, convirtiéndolo en un regalo perfecto para mantener a tus seres queridos conectados y seguros.",
        "Precio": 169.22,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/smartphone-spc-zeus-4g-pro-para-mayores-con-boton-sos-y-base-de-carga21"
    },
    {
        "Nombre": "Motorola Moto G24 con cámara de 50 MP y batería de 5000 mAh",
        "Imagen": "https://m.media-amazon.com/images/I/61DrWxtwM5L._AC_SX569_.jpg",
        "Descripcion": "El Motorola Moto G24 combina diseño, rendimiento y tecnología avanzada en un smartphone accesible. Su pantalla HD+ de 6,56 Pulgadas con frecuencia de actualización de 90 Hz te garantiza imágenes fluidas y colores vibrantes, ideal para disfrutar de tus películas, juegos y apps favoritas. Gracias a su sistema de cámara de 50 MP con Macro Vision, puedes capturar imágenes nítidas y detalladas, incluso en condiciones de poca luz. Explora de cerca con su lente macro especializado y crea recuerdos inolvidables con calidad profesional. Con 4 GB de RAM, almacenamiento de 128 GB y la posibilidad de expandir hasta 8 GB mediante Expansión de Memoria, este dispositivo asegura un rendimiento fluido incluso con múltiples tareas. Su batería de 5000 mAh con carga rápida TurboPower de 15 W te ofrece energía para todo el día y más. Además, la experiencia de sonido Dolby Atmos con altavoces estéreo proporciona un audio envolvente y de calidad superior, ideal para el entretenimiento. Incluye funda protectora para mayor comodidad y seguridad.",
        "Precio": 107.78,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/motorola-moto-g24-con-camara-de-50-mp-y-bateria-de-5000-mah22"
    },
    {
        "Nombre": "Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 64 GB de almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/41H+jR14XBL._AC_SX522_.jpg",
        "Descripcion": "La Samsung Galaxy Tab A9+ es la tablet perfecta para quienes buscan un dispositivo versátil, elegante y con un rendimiento confiable. Con 4 GB de RAM y 64 GB de almacenamiento interno, esta tablet te permite disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos sin interrupciones. Su pantalla de 11 Pulgadas, con tecnología AMOLED, ofrece colores vibrantes y una experiencia visual inmersiva, ideal para entretenimiento y productividad. Gracias a su conectividad 4G, podrás mantenerte conectado en cualquier lugar, mientras que su batería de litio de alta capacidad asegura largas horas de uso continuo. Con un diseño contemporáneo y materiales de calidad óptima, esta tablet combina funcionalidad y estilo, siendo una excelente opción para el hogar, el trabajo o los estudios.",
        "Precio": 191.04,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/samsung-galaxy-tab-a9-con-pantalla-de-11-pulgadas-y-64-gb-de-almacenamiento23"
    },
    {
        "Nombre": "Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/51tmXn9ZiEL._AC_SX569_.jpg",
        "Descripcion": "La Samsung Galaxy Tab A9+ es la tablet ideal para quienes buscan combinar estilo, rendimiento y versatilidad en un solo dispositivo. Con su cuerpo metálico en color gris plateado y una pantalla de 11 Pulgadas con resolución de 1920x1200 píxeles, esta tablet ofrece una experiencia visual cautivadora, incluso en ambientes con mucha luz. Disfruta de un sonido envolvente gracias a su tecnología 3D, perfecta para películas, música o videollamadas. Con 8 GB de RAM y 128 GB de almacenamiento interno, ampliable hasta 1 TB, tendrás espacio y fluidez para realizar múltiples tareas al mismo tiempo. Además, la función de dividir la pantalla en tres te permite gestionar apps de manera eficiente, maximizando tu productividad. Con Android 12 y herramientas de seguridad como Secure Folder y Privacy Dashboard, esta tablet no solo es potente, sino también confiable y segura. Perfecta para el hogar, el trabajo o el entretenimiento.",
        "Precio": 316.37,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/samsung-galaxy-tab-a9-con-pantalla-de-11-pulgadas-y-128-gb-de-almacenamiento24"
    },
    {
        "Nombre": "Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida",
        "Imagen": "https://m.media-amazon.com/images/I/71XKX8Z5QBL._AC_SX679_.jpg",
        "Descripcion": "La Acer Iconia Tab M10 es una tablet diseñada para ofrecer rendimiento, calidad visual y portabilidad. Con su pantalla WUXGA de 10,1 Pulgadas y resolución de 1920x1200 píxeles, proporciona imágenes nítidas y vibrantes, ideal para entretenimiento, trabajo o estudios.  Equipada con un procesador MediaTek MT8183 Octa-Core y 4 GB de RAM, esta tablet garantiza un funcionamiento fluido para realizar multitareas, disfrutar de contenido multimedia o navegar sin interrupciones. Su almacenamiento interno de 64 GB es ampliable mediante tarjeta MicroSD, ofreciendo espacio suficiente para todas tus aplicaciones y archivos. La Iconia Tab M10 cuenta con altavoces estéreo integrados para una experiencia de audio envolvente, conectividad Bluetooth, Wi-Fi y puerto USB-C para mayor versatilidad. Además, incluye cámaras frontal y trasera, perfectas para videollamadas y capturar momentos importantes. Todo esto, complementado con su diseño plateado elegante y una funda incluida para mayor protección y comodidad.",
        "Precio": 199.96,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/acer-iconia-tab-m10-con-pantalla-wuxga-de-101-pulgadas-y-funda-incluida25"
    },
    {
        "Nombre": "Samsung Galaxy Tab A7 Lite con pantalla de 8,7 Pulgadas y 64 GB de almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/81XG8dmudVS._AC_SX679_.jpg",
        "Descripcion": "La Samsung Galaxy Tab A7 Lite es la opción ideal para quienes buscan una tablet compacta, ligera y con un rendimiento confiable. Con un diseño elegante en color gris y un peso de solo 366 gramos, esta tablet es perfecta para llevar a cualquier lugar y disfrutar de tus aplicaciones, juegos y contenido multimedia favoritos. Su pantalla LCD de 8,7 Pulgadas con resolución de 1920x1080 píxeles ofrece imágenes nítidas y vibrantes. Equipado con 4 GB de RAM y 64 GB de almacenamiento interno, este dispositivo garantiza fluidez en multitareas y espacio para todos tus archivos, ampliable mediante tarjeta microSD. La conectividad Wi-Fi y Bluetooth 5.0 aseguran que siempre estés conectado, mientras que sus cámaras de 8 MP y 2 MP son ideales para fotos, vídeos y videollamadas. Con altavoces estéreo integrados y Android como sistema operativo, la Tab A7 Lite ofrece una experiencia completa y accesible para el día a día.",
        "Precio": 182.77,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/samsung-galaxy-tab-a7-lite-con-pantalla-de-87-pulgadas-y-64-gb-de-almacenamiento26"
    },
    {
        "Nombre": "Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh",
        "Imagen": "https://m.media-amazon.com/images/I/61CXBT8IXtL._AC_SX569_.jpg",
        "Descripcion": "La Xiaomi Pad 6 es la tablet diseñada para quienes buscan un equilibrio entre rendimiento, diseño y portabilidad. Con su impresionante pantalla de 11 Pulgadas WQHD+ y frecuencia de actualización de 144 Hz, disfrutarás de imágenes fluidas y detalladas, ya sea trabajando, explorando tu creatividad o jugando. Equipada con un procesador Snapdragon 870, esta tablet ofrece un rendimiento eficiente y rápido, ideal para multitareas y actividades exigentes. Su batería de alta capacidad de 8840 mAh y carga rápida de 33 W te permitirá usarla durante horas sin interrupciones, siendo perfecta para productividad y entretenimiento. Con un diseño unibody de solo 6,51 mm de grosor y 490 gramos de peso, es ligera y fácil de transportar, mientras que su cuerpo metálico asegura durabilidad. Disponible en un elegante color gris, la Xiaomi Pad 6 combina estilo y funcionalidad en un solo dispositivo.",
        "Precio": 253.89,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/xiaomi-pad-6-tablet-wqhd-de-11-pulgadas-con-snapdragon-870-y-bateria-de-8840-mah27"
    },
    {
        "Nombre": "Tableta Lenovo Tab M10 Plus 3ª Gen - Pantalla 2K de 10,6 Pulgadas",
        "Imagen": "https://m.media-amazon.com/images/I/61qjsSp08xL._AC_SX569_.jpg",
        "Descripcion": "Disfruta de la tecnología en tus manos con la Lenovo Tab M10 Plus de 3ª generación. Su diseño delgado y ligero la hace ideal para usar en casa, la oficina o mientras viajas. Con una pantalla táctil 2K de 10,6 pulgadas, experimenta colores vibrantes y una nitidez impresionante, perfecta para leer, ver películas o trabajar. Equipado con el potente procesador Qualcomm Snapdragon y 4 GB de RAM, este dispositivo garantiza un rendimiento rápido y fluido. Además, con sus 128 GB de almacenamiento, podrás guardar todos tus archivos, aplicaciones y recuerdos importantes. ¡La versatilidad y el estilo nunca fueron tan portátiles!",
        "Precio": 252.67,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tableta-lenovo-tab-m10-plus-3ª-gen-pantalla-2k-de-106-pulgadas28"
    },
    {
        "Nombre": "Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia",
        "Imagen": "https://m.media-amazon.com/images/I/61dCzmCA+AL._AC_SX569_.jpg",
        "Descripcion": "La PRITOM M10 es una tableta Android 12 que combina rendimiento, funcionalidad y diseño pensado para toda la familia, especialmente para los más pequeños. Con una pantalla HD IPS de 10,1 pulgadas, ofrece imágenes claras y vibrantes, perfectas para juegos, estudios o entretenimiento. Su procesador Quad-Core garantiza un rendimiento fluido, mientras que su capacidad de almacenamiento, ampliable hasta 512 GB, asegura espacio suficiente para todas tus aplicaciones, fotos y videos. Además, incluye controles parentales, aplicaciones educativas y una funda de silicona protectora para garantizar la seguridad de los niños. ¡Ideal para aprender, jugar y compartir momentos en familia!",
        "Precio": 80.4,
        "PLink": "/online/categoria/smartphones-y-tablets-innovadores/tableta-pritom-m10-de-10-pulgadas-diseno-versatil-y-seguro-para-toda-la-familia29"
    }

    ];

    // Filtros basados en precio y nombre
    const matchesFilters = (product) => {
        const priceMatch =
            selectedPrice === "All" ||
            (selectedPrice === "$0 - $50" && product.Precio <= 50) ||
            (selectedPrice === "$50 - $100" && product.Precio > 50 && product.Precio <= 100) ||
            (selectedPrice === "$100 - $150" && product.Precio > 100 && product.Precio <= 150) ||
            (selectedPrice === "Over $150" && product.Precio > 150);

        const nameMatch = product.Nombre.toLowerCase().includes(searchName.toLowerCase());

        return priceMatch && nameMatch;
    };

    // Filtrar productos
    const filteredProducts = productos.filter(matchesFilters);

    // Incrementar productos mostrados
    const handleLoadMore = () => {
        setProductsToShow((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
            {/* Sección de la imagen principal y el título */}
            <div className="relative flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[45vh] bg-black overflow-hidden">
                <img
                    src="https://raw.githubusercontent.com/casansv/casan-fetch/main//gifs/categoria_01.gif"
                    alt="Background Animation"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
                    style={{ objectPosition: "center" }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold md:text-4xl lg:text-5xl mb-4 animate-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Compra los Mejores Smartphones y Tablets Innovadores | Última Tecnología
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                        Descubre smartphones y tablets de última generación con las mejores ofertas. Innovación y rendimiento al alcance de tu mano.
                    </p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Botón para mostrar/ocultar filtros en móviles */}
            <div className="sm:hidden flex justify-end p-4">
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center gap-2"
                >
                    <FaFilter />
                    Filtros
                </button>
            </div>

            <div className="flex">
                {/* Sección de Filtros */}
                <div
                    className={`sm:block fixed top-0 left-0 sm:relative sm:w-1/4 transition-transform transform ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                        } sm:translate-x-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 p-6 shadow-lg h-full sm:h-auto z-50`}
                >
                    <div className="sm:hidden flex justify-end">
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="text-white text-xl"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <h2 className="text-xl font-bold mt-6 mb-4 text-white">Nombre</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {searchName && (
                            <button
                                onClick={() => setSearchName("")}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>

                    <h2 className="text-xl font-bold mb-4 mt-6 text-white">Rango de precios</h2>
                    <ul className="space-y-2">
                        <li>
                            <button
                                onClick={() => setSelectedPrice("All")}
                                className={`flex items-center justify-between w-full py-2 px-3 text-left bg-gray-700 hover:bg-blue-600 rounded-lg ${selectedPrice === "All" ? "bg-blue-600" : ""
                                    }`}
                            >
                                Todos
                                {selectedPrice === "All" && <FaCheck className="text-green-400" />}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedPrice("$0 - $50")}
                                className={`flex items-center justify-between w-full py-2 px-3 text-left bg-gray-700 hover:bg-blue-600 rounded-lg ${selectedPrice === "$0 - $50" ? "bg-blue-600" : ""
                                    }`}
                            >
                                $0 - $50
                                {selectedPrice === "$0 - $50" && (
                                    <FaCheck className="text-green-400" />
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedPrice("$50 - $100")}
                                className={`flex items-center justify-between w-full py-2 px-3 text-left bg-gray-700 hover:bg-blue-600 rounded-lg ${selectedPrice === "$50 - $100" ? "bg-blue-600" : ""
                                    }`}
                            >
                                $50 - $100
                                {selectedPrice === "$50 - $100" && (
                                    <FaCheck className="text-green-400" />
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedPrice("$100 - $150")}
                                className={`flex items-center justify-between w-full py-2 px-3 text-left bg-gray-700 hover:bg-blue-600 rounded-lg ${selectedPrice === "$100 - $150" ? "bg-blue-600" : ""
                                    }`}
                            >
                                $100 - $150
                                {selectedPrice === "$100 - $150" && (
                                    <FaCheck className="text-green-400" />
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedPrice("Over $150")}
                                className={`flex items-center justify-between w-full py-2 px-3 text-left bg-gray-700 hover:bg-blue-600 rounded-lg ${selectedPrice === "Over $150" ? "bg-blue-600" : ""
                                    }`}
                            >
                                Más de $150
                                {selectedPrice === "Over $150" && (
                                    <FaCheck className="text-green-400" />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w-full sm:w-3/4 p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">Productos disponibles</h2>
                    {filteredProducts.length === 0 ? (
                        <p className="text-center text-gray-400">No se encontraron productos...</p>
                    ) : (
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.slice(0, productsToShow).map((product, index) => (
                                    <Product
                                        key={index}
                                        Imagen={product.Imagen}
                                        Nombre={product.Nombre}
                                        Descripcion={product.Descripcion}
                                        Precio={product.Precio}
                                        PLink={product.PLink}
                                    />
                                ))}
                            </div>
                            {productsToShow < filteredProducts.length && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={handleLoadMore}
                                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-semibold"
                                    >
                                        Cargar más productos
                                    </button>
                                </div>
                            )}

                            {/* Texto final con animación degradada y GIF solo cuando no hay más productos para cargar */}
                            {productsToShow >= filteredProducts.length && (
                                <div className="mt-10 text-center flex items-center justify-center gap-2 flex-wrap">
                                    <p className="text-lg md:text-2xl font-bold animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                        ¡Pronto se añadirán más productos!
                                    </p>
                                    <img
                                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                                        alt="🔥"
                                        className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
