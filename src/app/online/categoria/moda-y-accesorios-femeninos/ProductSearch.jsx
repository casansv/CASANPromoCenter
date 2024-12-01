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
        "Nombre": "Zapatos de Flamenco para Niña y Mujer 'La Señorita' - Clásicos, Cómodos y con Suela de Goma para Bailar Sevillanas",
        "Imagen": "https://m.media-amazon.com/images/I/414fbumth1L._AC_SX575_.jpg",
        "Descripcion": "Los zapatos de flamenco 'La Señorita' son la opción ideal para quienes buscan comodidad y estilo en sus clases de baile o actuaciones. Disponibles en una amplia variedad de tallas, desde el número 24 hasta el 42, son perfectos tanto para niñas como para mujeres. Fabricados con materiales de alta calidad, estos zapatos de tacón se destacan por su suela de goma, que ofrece un agarre excepcional, y su cierre con hebilla, que asegura un ajuste perfecto y máximo confort mientras bailas. Ya sea para iniciarte en el flamenco, practicar sevillanas o completar tu atuendo de gitana en la feria, los zapatos 'La Señorita' son la elección perfecta. Además, su diseño estiliza la figura y permite que el vestido de flamenca tenga un movimiento fluido y vibrante, ideal para crear el look completo.",
        "Precio": 2.21,
        "PLink": "/online/categoria/moda-y-accesorios-femeninos/zapatos-de-flamenco-para-nina-y-mujer-la-senorita-clasicos-comodos-y-con-suela-de-goma-para-bailar-sevillanas1"
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
                    src="https://raw.githubusercontent.com/casansv/casan-fetch/main//gifs/categoria_04.gif"
                    alt="Background Animation"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
                    style={{ objectPosition: "center" }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold md:text-4xl lg:text-5xl mb-4 animate-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Moda y Accesorios Femeninos | Estilo y Elegancia
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                        Encuentra lo último en moda femenina. Prendas y accesorios para cada ocasión con estilo, elegancia y calidad.
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
