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
        "Nombre": "Máquina de Sonido y Reloj Despertador con Luz Lunar Homedics",
        "Imagen": "https://m.media-amazon.com/images/I/618uiOYL1iL._AC_SX522_.jpg",
        "Descripcion": "Descubre una nueva forma de mejorar tu descanso con la máquina de sonido y reloj despertador Homedics. Diseñada para sincronizar tu sueño con los ciclos naturales de la luna, este innovador dispositivo combina tecnología avanzada y diseño elegante para crear un ambiente relajante en tu dormitorio. Disfruta de 18 sonidos calmantes, desde naturaleza hasta melodías zen, que te ayudarán a relajarte y despertar renovado. Además, su pantalla con fases lunares y brillo ajustable no solo ilumina tu espacio, sino que educa sobre el ciclo lunar, siendo perfecta para adultos y niños. ¡Transforma tus noches y comienza cada día con energía renovada!",
        "Precio": 79.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/maquina-de-sonido-y-reloj-despertador-con-luz-lunar-homedics45"
    },
    {
        "Nombre": "Juego de 2 Apliques de Pared de Níquel Cepillado con Vidrio Transparente",
        "Imagen": "https://m.media-amazon.com/images/I/612R-3BVz0L._AC_SX522_.jpg",
        "Descripcion": "Añade un toque moderno y sofisticado a tus espacios con el juego de 2 apliques de pared Licperron. Fabricados con un acabado en níquel cepillado y pantallas de vidrio transparente, estos accesorios de iluminación combinan elegancia y funcionalidad. Su diseño versátil permite instalarlos hacia arriba o hacia abajo según tu estilo, adaptándose perfectamente a baños, dormitorios, pasillos y más. Compatibles con bombillas de base E26, ofrecen opciones de iluminación regulable para crear el ambiente ideal. Su instalación es rápida y sencilla, haciendo de estos apliques una solución práctica y estética para tu hogar.",
        "Precio": 37.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/juego-de-2-apliques-de-pared-de-niquel-cepillado-con-vidrio-transparente46"
    },
    {
        "Nombre": "Aplique de Pared LED Negro de 10W IP65 para Interior y Exterior",
        "Imagen": "https://m.media-amazon.com/images/I/51QWpRMHmhL._AC_SX679_.jpg",
        "Descripcion": "Ilumina tus espacios con el elegante aplique de pared LED de Sobrovo. Fabricado con aleación de aluminio resistente, este aplique ofrece durabilidad superior y un diseño moderno que complementa cualquier ambiente. Su tecnología LED de 10W brinda una luz cálida y uniforme (4500K), perfecta para interiores y exteriores. Gracias a su protección IP65, es resistente al agua y a condiciones climáticas adversas, ideal para áreas como salas de estar, porches, baños y más. Este aplique garantiza una instalación sencilla y un mantenimiento mínimo, haciendo de él la elección perfecta para quienes buscan calidad y estilo.",
        "Precio": 26.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/aplique-de-pared-led-negro-de-10w-ip65-para-interior-y-exterior47"
    },
    {
        "Nombre": "Lámpara de Pared Exterior IP54 de Aluminio Antioxidante ZUUKOLE",
        "Imagen": "https://m.media-amazon.com/images/I/51oa8XJesdL._AC_SX522_.jpg",
        "Descripcion": "Dale un toque sofisticado y funcional a tu hogar con la lámpara de pared exterior ZUUKOLE. Su diseño rectangular moderno resalta la arquitectura de tu espacio, proporcionando una iluminación elegante y eficiente. Fabricada en aluminio fundido con recubrimiento antioxidante y certificada por ETL, CE y ROHS, esta lámpara garantiza durabilidad y seguridad. Su diseño impermeable IP54 y resistente a la intemperie la hacen ideal para exteriores, mientras que su iluminación en una sola dirección (hacia arriba o abajo) crea un efecto visual impresionante. Es perfecta para porches, jardines, patios o como luz de seguridad en entradas y pasillos.",
        "Precio": 39.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/lampara-de-pared-exterior-ip54-de-aluminio-antioxidante-zuukole48"
    },
    {
        "Nombre": "Juego de Fundas de Edredón de Algodón Ultrasuave Pure Era (3 Piezas)",
        "Imagen": "https://m.media-amazon.com/images/I/81mujzyfVVL._AC_SX522_.jpg",
        "Descripcion": "Descubre el lujo de dormir con el juego de fundas de edredón Pure Era, diseñado para ofrecer la máxima comodidad en todas las estaciones. Fabricado con 100% algodón de punto, este juego tiene la suavidad y calidez de tu camiseta favorita, brindándote la sensación de dormir en una nube esponjosa. Su diseño elegante en gris carbón combina perfectamente con cualquier decoración de dormitorio, añadiendo un toque moderno y sofisticado. Equipado con un cierre de cremallera oculto y lazos en las esquinas, mantiene el edredón en su lugar para un descanso ininterrumpido. Ideal para camas tamaño Queen, este juego incluye una funda de edredón y dos fundas de almohada, ofreciendo estilo y practicidad para tu hogar.",
        "Precio": 56.0,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/juego-de-fundas-de-edredon-de-algodon-ultrasuave-pure-era-3-piezas49"
    },
    {
        "Nombre": "Funda de Edredón King Verde Salvia con Pompones Andency (3 Piezas)",
        "Imagen": "https://m.media-amazon.com/images/I/81mgOruo3YL._AC_SX522_.jpg",
        "Descripcion": "Añade un toque de elegancia y comodidad a tu dormitorio con la funda de edredón Andency tamaño King. Confeccionada en microfibra lavada ultrasuave, esta funda ligera ofrece una experiencia de descanso excepcional. Su diseño de flecos de pompones hechos a mano aporta un estilo único y sofisticado, ideal para transformar cualquier espacio en un refugio acogedor. Equipado con un cierre de cremallera oculto y 4 lazos en las esquinas, asegura que tu edredón permanezca en su lugar durante toda la noche. Incluye dos fundas de almohada a juego para completar este conjunto ideal para quienes buscan confort y diseño.",
        "Precio": 39.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/funda-de-edredon-king-verde-salvia-con-pompones-andency-3-piezas50"
    },
    {
        "Nombre": "Juego de Funda de Edredón King Verde Salvia Claro CGK Unlimited (3 Piezas)",
        "Imagen": "https://m.media-amazon.com/images/I/81r4PlsVxmL._AC_SX522_.jpg",
        "Descripcion": "Renueva tu dormitorio con el lujoso juego de funda de edredón King de CGK Unlimited, diseñado para ofrecer la máxima comodidad y estilo. Fabricado en microfibra de doble cepillado, este juego de 3 piezas incluye una funda de edredón de 104 x 90 pulgadas y dos fundas de almohada de 20 x 36 pulgadas. Su textura extra suave, ligera y transpirable garantiza noches de descanso fresco y confortable durante todo el año. Equipado con 8 lazos y un cierre de cremallera, ofrece un ajuste perfecto y fácil mantenimiento, conservando su apariencia vibrante y sin decoloración incluso tras múltiples lavados.",
        "Precio": 24.99,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/juego-de-funda-de-edredon-king-verde-salvia-claro-cgk-unlimited-3-piezas51"
    },
    {
        "Nombre": "Mesa de Noche Furinno de Madera con Cajón, Color Espresso (2 Piezas)",
        "Imagen": "https://m.media-amazon.com/images/I/613ErDOuGFL._AC_SX522_.jpg",
        "Descripcion": "Agrega funcionalidad y estilo a tu habitación con este set de dos mesas de noche Furinno en color espresso. Diseñadas para maximizar el espacio, estas mesas son ideales para cualquier habitación, ofreciendo un diseño compacto, elegante y práctico. Fabricadas con madera de ingeniería y tela no tejida, cuentan con un cajón para almacenamiento adicional. Con bordes redondeados para mayor seguridad y un acabado contemporáneo, estas mesas se integran perfectamente en cualquier decoración moderna. Fáciles de montar y ligeras, son una solución práctica y económica para organizar tus espacios.",
        "Precio": 32.97,
        "PLink": "/online/categoria/hogar-inteligente-y-domotica/mesa-de-noche-furinno-de-madera-con-cajon-color-espresso-2-piezas52"
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
                    src="https://raw.githubusercontent.com/casansv/casan-fetch/main//gifs/categoria_03.gif"
                    alt="Background Animation"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
                    style={{ objectPosition: "center" }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold md:text-4xl lg:text-5xl mb-4 animate-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Hogar Inteligente y Domótica | Automatiza tu Vida
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                        Transforma tu hogar en un espacio inteligente con sistemas de domótica. Controla tu casa desde cualquier lugar con dispositivos conectados.
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
