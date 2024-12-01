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
        "Nombre": "Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB",
        "Imagen": "https://m.media-amazon.com/images/I/41Y3jkOcEKL._AC_SX569_.jpg",
        "Descripcion": "El Acer Chromebook 314 combina rendimiento, ligereza y eficiencia, siendo la herramienta ideal para estudiantes, profesionales y usuarios casuales. Con su pantalla HD de 14 pulgadas (1280 x 720 píxeles), ofrece una experiencia visual clara y cómoda para tareas diarias, videollamadas o streaming. Está equipado con un procesador Intel Celeron N4500 de doble núcleo y 4 GB de RAM LPDDR4X, garantizando un desempeño fluido en multitareas y navegación. Su almacenamiento SSD de 64 GB permite un inicio rápido del sistema y espacio suficiente para tus archivos esenciales. Con un diseño compacto y un peso de solo 1,55 kg, este portátil es perfecto para llevar a todas partes. Además, gracias a su batería con hasta 10 horas de autonomía y ChromeOS como sistema operativo, disfrutarás de una experiencia intuitiva, segura y optimizada para aplicaciones y servicios en la nube.",
        "Precio": 270.45,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/portatil-acer-chromebook-314-de-14-pulgadas-con-chromeos-y-ssd-de-64-gb7"
    },
    {
        "Nombre": "Portátil HONOR MagicBook 16 con Pantalla FHD de 144 Hz y AMD Ryzen 5600H",
        "Imagen": "https://m.media-amazon.com/images/I/71z52OuhClL._AC_SX569_.jpg",
        "Descripcion": "El HONOR MagicBook 16 combina potencia, diseño y funcionalidad en un dispositivo ultrafino y ligero. Con su pantalla FullView IPS de 16,1 pulgadas, resolución FHD y tasa de refresco de 144 Hz, ofrece imágenes vibrantes y fluidas, perfectas para trabajo, estudio o entretenimiento. Equipada con un procesador AMD Ryzen 5 5600H de arquitectura Zen 3 y 16 GB de RAM DDR4 de doble canal, esta laptop garantiza un rendimiento excepcional incluso en tareas exigentes. Su almacenamiento SSD de 512 GB asegura arranques rápidos y suficiente espacio para todos tus archivos. Su cuerpo metálico de aluminio no solo es elegante, sino también resistente y fácil de transportar con un peso de 1,84 kg y un grosor de 18,2 mm. Además, con la batería de alta capacidad podrás disfrutar de hasta 8 horas de uso continuo, mientras que el cargador rápido de 65 W te permite alcanzar el 85 % de carga en solo una hora.",
        "Precio": 1055.32,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/portatil-honor-magicbook-16-con-pantalla-fhd-de-144-hz-y-amd-ryzen-5600h8"
    },
    {
        "Nombre": "PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM",
        "Imagen": "https://m.media-amazon.com/images/I/61FVIijQp2L._AC_SX425_.jpg",
        "Descripcion": "Renueva tu experiencia informática con el PC de Escritorio Dell Optiplex 7050 SFF, un equipo diseñado para combinar potencia, velocidad y eficiencia. Este ordenador reacondicionado de calidad incluye el procesador Intel i7-7700 de cuatro núcleos, que alcanza hasta 4.2 GHz, ideal para multitareas y aplicaciones exigentes. Su impresionante memoria RAM DDR4 de 32GB y almacenamiento SSD de 1TB garantizan un rendimiento fluido y espacio suficiente para tus archivos importantes. Además, con conectividad WiFi, Bluetooth y soporte para doble monitor 4K, este equipo es perfecto para profesionales, estudiantes y amantes del entretenimiento.",
        "Precio": 231.89,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/pc-de-escritorio-dell-optiplex-7050-sff-reacondicionado-con-intel-i7-y-32gb-ram30"
    },
    {
        "Nombre": "Mini PC MeLE Quieter 4C N100 Sin Ventilador con RAM de 16GB y 512GB SSD",
        "Imagen": "https://m.media-amazon.com/images/I/81fw5t8k63L._AC_SX425_.jpg",
        "Descripcion": "Descubre la potencia compacta del Mini PC MeLE Quieter 4C, equipado con el procesador Alder Lake-N100 de 12ª generación, ideal para negocios, uso personal y proyectos industriales IoT. Con un diseño sin ventilador, este dispositivo ofrece un funcionamiento silencioso, bajo consumo de energía y capacidad para operar 24/7. Disfruta de una experiencia multitarea fluida gracias a sus 16GB de RAM y un almacenamiento SSD ultrarrápido de 512GB, expandible hasta 4TB para cubrir todas tus necesidades. Con soporte para triple pantalla 4K, conectividad WiFi 5 y Bluetooth 5.1, este Mini PC es perfecto para mejorar tu productividad en cualquier entorno.",
        "Precio": 229.0,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/mini-pc-mele-quieter-4c-n100-sin-ventilador-con-ram-de-16gb-y-512gb-ssd31"
    },
    {
        "Nombre": "Mini PC MeLE Quieter2Q Sin Ventilador con 8GB RAM y 128GB Almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/711gBTGdAQL._AC_SX425_.jpg",
        "Descripcion": "Maximiza tu productividad con el Mini PC MeLE Quieter2Q, diseñado para ofrecer un rendimiento silencioso y eficiente en un tamaño compacto. Equipado con el procesador Intel Celeron J4125, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este mini ordenador es ideal para uso personal, oficinas, educación y aplicaciones industriales IoT. Su sistema de enfriamiento sin ventilador garantiza un funcionamiento silencioso y estable, mientras que las salidas HDMI duales permiten visualizar contenido 4K a 60 fps en dos pantallas simultáneamente. Con opciones de expansión de almacenamiento hasta 4TB, Gigabit Ethernet y WiFi de doble banda, este PC combina potencia y versatilidad en cualquier entorno.",
        "Precio": 169.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/mini-pc-mele-quieter2q-sin-ventilador-con-8gb-ram-y-128gb-almacenamiento32"
    },
    {
        "Nombre": "Mini PC Stick MeLE PCG02 Sin Ventilador con 8GB RAM y 128GB Almacenamiento",
        "Imagen": "https://m.media-amazon.com/images/I/71QNeA0DbEL._AC_SX425_.jpg",
        "Descripcion": "Optimiza tu espacio y potencia tu productividad con el Mini PC Stick MeLE PCG02, un dispositivo compacto y eficiente diseñado para negocios, entretenimiento y aplicaciones IoT. Equipado con un procesador Intel Celeron J4125 de hasta 2.7GHz, 8GB de RAM LPDDR4 y 128GB de almacenamiento eMMC, este PC Stick es perfecto para manejar múltiples tareas y proyectos. Con conectividad WiFi de doble banda, puerto Gigabit Ethernet y salida HDMI 4K, este dispositivo ofrece rendimiento avanzado y una experiencia visual superior. Su diseño sin ventilador asegura un funcionamiento silencioso y estable, ideal para entornos comerciales y uso continuo 24/7.",
        "Precio": 239.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/mini-pc-stick-mele-pcg02-sin-ventilador-con-8gb-ram-y-128gb-almacenamiento33"
    },
    {
        "Nombre": "Mini PC HIGOLEPC Win 11 Pro con Pantalla IPS, 8GB RAM y 128GB EMMC",
        "Imagen": "https://m.media-amazon.com/images/I/613Znn6NwpL._AC_SY355_.jpg",
        "Descripcion": "Explora la potencia y portabilidad de la Mini PC HIGOLEPC, diseñada para un rendimiento eficiente en un tamaño compacto. Equipado con Windows 11 Pro preinstalado y un procesador Intel Celeron J4125 de hasta 2.7GHz, esta mini computadora es ideal para tareas educativas, empresariales y de entretenimiento. Su diseño sin ventilador, batería integrada con hasta 5 horas de duración y conectividad avanzada con WiFi 6 y Bluetooth 5.2 hacen de esta mini PC una solución versátil para el trabajo remoto, IoT y sistemas inteligentes. Su pantalla IPS integrada y compatibilidad con HDMI 4K la convierten en un dispositivo funcional y moderno para cualquier entorno.",
        "Precio": 269.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/mini-pc-higolepc-win-11-pro-con-pantalla-ips-8gb-ram-y-128gb-emmc34"
    },
    {
        "Nombre": "PC de Escritorio Dell para Juegos RGB con Intel i5 y NVIDIA GT 1030",
        "Imagen": "https://m.media-amazon.com/images/I/81U066HOzeL._AC_SX425_.jpg",
        "Descripcion": "Experimenta el poder y estilo con la PC de Escritorio Dell para Juegos RGB, diseñada para jugadores apasionados y multitareas exigentes. Equipada con un procesador Intel Quad Core i5-6500 de hasta 3.6GHz, 32GB de RAM DDR4 y un SSD de 1TB, esta máquina ofrece un rendimiento excepcional para videojuegos y aplicaciones pesadas. La tarjeta gráfica NVIDIA GeForce GT 1030 de 2GB proporciona gráficos impresionantes, mientras que la carcasa y los periféricos RGB agregan un toque visual atractivo a tu setup. Con conectividad avanzada, incluyendo WiFi 600M y Bluetooth, esta PC está lista para cumplir con todas tus necesidades.",
        "Precio": 291.39,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/pc-de-escritorio-dell-para-juegos-rgb-con-intel-i5-y-nvidia-gt-103035"
    },
    {
        "Nombre": "Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas",
        "Imagen": "https://m.media-amazon.com/images/I/81k+w98hRSL._AC_SX425_.jpg",
        "Descripcion": "La Samsung Chromebook Plus combina versatilidad y potencia en un diseño compacto y moderno, ideal para negocios y estudiantes. Con su pantalla táctil FHD de 12.2 pulgadas y su bisagra de 360°, funciona como laptop y tableta según lo necesites. Está equipada con un procesador Intel Celeron de doble núcleo, 4GB de RAM LPDDR3 y almacenamiento de 224GB (64GB eMMC + expansión adicional), ofreciendo un rendimiento ágil y capacidad suficiente para tus archivos y aplicaciones. Su sistema operativo Chrome OS es rápido, seguro y actualizado, perfecto para la productividad diaria y el entretenimiento.",
        "Precio": 399.0,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-2-en-1-samsung-chromebook-plus-con-pantalla-tactil-fhd-de-122-pulgadas36"
    },
    {
        "Nombre": "HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home",
        "Imagen": "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SY450_.jpg",
        "Descripcion": "La HP Laptop 14 es la combinación perfecta de portabilidad y rendimiento para el día a día. Su diseño delgado y ligero, con pantalla HD de microborde de 14 pulgadas, maximiza tu espacio visual y facilita llevarla a cualquier lugar. Equipada con un procesador Intel Celeron N4020 de doble núcleo, 4GB de RAM y 64GB de almacenamiento eMMC, esta laptop ofrece un rendimiento confiable para tareas diarias, estudios y entretenimiento. Con gráficos Intel UHD compatibles con 4K, disfruta de tus series, películas y juegos favoritos con gran calidad visual. Además, incluye un año de Microsoft 365 para que trabajes y estudies sin interrupciones.",
        "Precio": 209.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/hp-laptop-14-hd-microborde-con-intel-celeron-n4020-y-windows-11-home37"
    },
    {
        "Nombre": "Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB",
        "Imagen": "https://m.media-amazon.com/images/I/61Iyy+2damL._AC_SX522_.jpg",
        "Descripcion": "La CHUWI HeroBook Pro ofrece un equilibrio perfecto entre diseño, potencia y portabilidad. Equipada con un procesador Intel Celeron N4020 de hasta 2.8GHz, 8GB de RAM y 256GB SSD, esta laptop es ideal para estudiantes, profesionales y uso doméstico. Su pantalla IPS FHD de 14.1 pulgadas proporciona imágenes nítidas y colores vibrantes, mientras que su batería de larga duración y diseño ultradelgado te permiten trabajar o estudiar sobre la marcha. Con capacidad de expansión hasta 1TB SSD, conectividad WiFi 5G y múltiples puertos, esta laptop satisface todas tus necesidades diarias con estilo.",
        "Precio": 199.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-chuwi-herobook-pro-141-pulgadas-con-pantalla-fhd-2k-y-ssd-de-256gb38"
    },
    {
        "Nombre": "HP Laptop Ultraligera 14 Pulgadas con Intel Quad-Core y 8GB RAM",
        "Imagen": "https://m.media-amazon.com/images/I/81divYKpeTL._AC_SX679_.jpg",
        "Descripcion": "La HP Laptop de 14 pulgadas es el equilibrio ideal entre portabilidad y rendimiento, perfecta para estudiantes y profesionales en movimiento. Equipada con un procesador Intel Quad-Core N4120 de hasta 2.60 GHz, 8GB de RAM y almacenamiento de 192GB (64GB eMMC + tarjeta SD Ghost Manta de 128GB), esta laptop garantiza un rendimiento fluido para multitareas y seminarios web. Su pantalla HD de microborde y BrightView de 14 pulgadas ofrece una experiencia visual inmersiva, mientras que su diseño delgado y elegante en color Snowflake White agrega un toque moderno. Conectividad avanzada y un año de Microsoft 365 incluido, está lista para maximizar tu productividad.",
        "Precio": 249.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/hp-laptop-ultraligera-14-pulgadas-con-intel-quadcore-y-8gb-ram39"
    },
    {
        "Nombre": "Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente",
        "Imagen": "https://m.media-amazon.com/images/I/71oYSGF0gVS._AC_SX425_.jpg",
        "Descripcion": "Descubre el rendimiento eficiente y la versatilidad del Chromebook ASUS CX1, diseñado para ofrecerte productividad y entretenimiento sin complicaciones. Con una pantalla FHD de 14 Pulgadas, este portátil es perfecto para trabajar, estudiar o disfrutar de tus series favoritas. Equipado con el procesador Intel Celeron N4500, 4 GB de RAM y 64 GB de almacenamiento, combina potencia y velocidad en un diseño ligero y portátil. Además, su sistema operativo ChromeOS garantiza una experiencia intuitiva y optimizada para la nube. Ideal para quienes buscan un dispositivo confiable y de alto rendimiento para el día a día.",
        "Precio": 209.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/chromebook-asus-cx1-14-pulgadas-plata-transparente40"
    },
    {
        "Nombre": "PC de Escritorio Dell OptiPlex, Intel i5, 16 GB RAM, 2 TB HDD",
        "Imagen": "https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_SX425_.jpg",
        "Descripcion": "Eleva tu experiencia de computación con la PC de Escritorio Dell OptiPlex, equipada con un procesador Intel Core i5 de 3ª generación y una potencia de 3.2 GHz. Este sistema combina una memoria RAM de 16 GB y un disco duro de 2 TB, ofreciendo el rendimiento y almacenamiento ideales para multitareas, videojuegos o trabajo intensivo. Incluye un monitor LED Full HD de 22 pulgadas con diseño sin bisel, teclado y mouse RGB para un estilo único, y conectividad WiFi para mantenerte siempre conectado. Con Windows 10 Pro, disfrutarás de una experiencia fluida, libre de bloatware y optimizada para cualquier necesidad.",
        "Precio": 199.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/pc-de-escritorio-dell-optiplex-intel-i5-16-gb-ram-2-tb-hdd41"
    },
    {
        "Nombre": "Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024",
        "Imagen": "https://m.media-amazon.com/images/I/61BRKJYlOSL._AC_SX425_.jpg",
        "Descripcion": "Descubre la combinación perfecta entre estilo, rendimiento y portabilidad con el Chromebook Lenovo Slim 3. Diseñado para simplificar tu día a día, este portátil ultraligero de 14 Pulgadas en elegante color azul Abyss ofrece una experiencia única con su procesador MediaTek Kompanio 520 y sistema operativo Chrome OS. Con 4 GB de RAM, 64 GB de almacenamiento y una batería de hasta 13.5 horas de duración, es ideal para trabajar, estudiar o disfrutar de tus contenidos favoritos. Sus altavoces estéreo MaxxAudio® Waves y pantalla HD garantizan un sonido y visuales excepcionales, mientras que la cámara HD con obturador de privacidad cuida de tu seguridad. ¡Llévalo a todas partes y mantente productivo con estilo!",
        "Precio": 219.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/chromebook-lenovo-slim-3-14-pulgadas-azul-ligero-202442"
    },
    {
        "Nombre": "Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad",
        "Imagen": "https://m.media-amazon.com/images/I/616aCuRtnpL._AC_SX425_.jpg",
        "Descripcion": "Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este portátil ligero y elegante, en color gris gravedad, está equipado con un procesador MediaTek Kompanio 520 y sistema operativo ChromeOS, ofreciendo un rendimiento ágil y confiable para todas tus tareas diarias. Su pantalla HD NanoEdge antirreflejos de 14 Pulgadas garantiza una experiencia visual cómoda, mientras que su diseño resistente a derrames y certificado con estándares militares asegura durabilidad para el uso diario. Con 4 GB de RAM, 64 GB de almacenamiento eMMC, conectividad avanzada WiFi 6 y Bluetooth 5.3, y características como protección antimicrobiana y cámara web con escudo de privacidad, este Chromebook es ideal para quienes buscan tecnología avanzada con un enfoque sostenible.",
        "Precio": 279.99,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-asus-chromebook-cm14-14-pulgadas-gris-gravedad43"
    },
    {
        "Nombre": "Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro",
        "Imagen": "https://m.media-amazon.com/images/I/71iYRkJS1pL._AC_SX425_.jpg",
        "Descripcion": "Disfruta de la máxima potencia en el menor espacio con la Mini PC para Juegos ACEMAGICIAN AM06PRO. Equipado con el procesador AMD Ryzen 7 4800U (8 núcleos/16 hilos, hasta 4.4 GHz), 16 GB de RAM DDR4 y un SSD de 512 GB, este equipo compacto es perfecto para gamers, creadores de contenido y usuarios multitarea. Compatible con salida 4K a 60 Hz en triple pantalla, ofrece una experiencia visual inmersiva y fluida. Su conectividad avanzada incluye WiFi 6 y Bluetooth 5.2, asegurando velocidades rápidas y estabilidad en todo momento. Además, viene con Windows 11 Pro preinstalado, listo para llevar tu productividad al siguiente nivel.",
        "Precio": 349.0,
        "PLink": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/mini-pc-para-juegos-amd-ryzen-7-16-gb-ram-512-gb-ssd-windows-11-pro44"
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
                    src="https://raw.githubusercontent.com/casansv/casan-fetch/main//gifs/categoria_02.gif"
                    alt="Background Animation"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
                    style={{ objectPosition: "center" }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold md:text-4xl lg:text-5xl mb-4 animate-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Laptops y Accesorios de Alto Rendimiento | Potencia y Velocidad
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                        Las mejores laptops y accesorios con un rendimiento superior. Optimiza tu productividad con la tecnología más avanzada.
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
