// src/app/BACKSTATE/Online/Report/ListProduct.jsx
"use client";
import React, { useState, useEffect } from "react";

export default function ListProduct() {
    const [searchName, setSearchName] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // Cantidad de productos visibles
    const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
    const [reportLink, setReportLink] = useState(""); // Enlace para el reporte

    // Lista de productos con nombre, imagen y enlace de reporte
    const productos = [
                {
            Nombre: "Zapatos de Flamenco para Niña y Mujer 'La Señorita' - Clásicos, Cómodos y con Suela de Goma para Bailar Sevillanas",
            Imagen: "https://m.media-amazon.com/images/I/414fbumth1L._AC_SX575_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Teléfono móvil para personas mayores con botón SOS y pantalla a color",
            Imagen: "https://m.media-amazon.com/images/I/61dgkB6MmVL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración",
            Imagen: "https://m.media-amazon.com/images/I/71yATvhR3OL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tablet de 8 Pulgadas con Cuerpo de Metal Dorado y SIM Dual",
            Imagen: "https://m.media-amazon.com/images/I/61jzpFgieRL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12",
            Imagen: "https://m.media-amazon.com/images/I/617atwaJKLL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh",
            Imagen: "https://m.media-amazon.com/images/I/61sBnhuQxaL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB",
            Imagen: "https://m.media-amazon.com/images/I/41Y3jkOcEKL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Portátil HONOR MagicBook 16 con Pantalla FHD de 144 Hz y AMD Ryzen 5600H",
            Imagen: "https://m.media-amazon.com/images/I/71z52OuhClL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia",
            Imagen: "https://m.media-amazon.com/images/I/81vZCv9kA0L._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida",
            Imagen: "https://m.media-amazon.com/images/I/81hygajaQnL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente",
            Imagen: "https://m.media-amazon.com/images/I/71JTIdBUvYL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz",
            Imagen: "https://m.media-amazon.com/images/I/61GkKd1A0GL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "vivo Y17s 128GB con Triple Cámara de 50 MP y Pantalla HD+ 6,56 Pulgadas",
            Imagen: "https://m.media-amazon.com/images/I/710j3H4fTgL._AC_SX466_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W",
            Imagen: "https://m.media-amazon.com/images/I/71-W9YVyc5L._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Samsung Galaxy A25 5G 128GB Negro con Cámara de 50 MP y Carga Rápida",
            Imagen: "https://m.media-amazon.com/images/I/71NcnZFxQDL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa",
            Imagen: "https://m.media-amazon.com/images/I/41NgNigFmbL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh",
            Imagen: "https://m.media-amazon.com/images/I/31eYwWm1X-L._AC_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Smartphone resistente Ulefone Power Armor X11 Pro con batería de larga duración",
            Imagen: "https://m.media-amazon.com/images/I/71EpROmfMYL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Smartphone OPPO A80 5G con IA, 16GB RAM y 256GB de Almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/51O1MIzu3oL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Smartphone Xiaomi Redmi Note 12 4G con pantalla AMOLED y cámara triple de 50 MP",
            Imagen: "https://m.media-amazon.com/images/I/61r7Asz11RL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Smartphone SPC Zeus 4G Pro para Mayores con Botón SOS y Base de Carga",
            Imagen: "https://m.media-amazon.com/images/I/6165IIIWIKL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Motorola Moto G24 con cámara de 50 MP y batería de 5000 mAh",
            Imagen: "https://m.media-amazon.com/images/I/61DrWxtwM5L._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 64 GB de almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/41H+jR14XBL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/51tmXn9ZiEL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida",
            Imagen: "https://m.media-amazon.com/images/I/71XKX8Z5QBL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Samsung Galaxy Tab A7 Lite con pantalla de 8,7 Pulgadas y 64 GB de almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/81XG8dmudVS._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh",
            Imagen: "https://m.media-amazon.com/images/I/61CXBT8IXtL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tableta Lenovo Tab M10 Plus 3ª Gen - Pantalla 2K de 10,6 Pulgadas",
            Imagen: "https://m.media-amazon.com/images/I/61qjsSp08xL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia",
            Imagen: "https://m.media-amazon.com/images/I/61dCzmCA+AL._AC_SX569_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM",
            Imagen: "https://m.media-amazon.com/images/I/61FVIijQp2L._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mini PC MeLE Quieter 4C N100 Sin Ventilador con RAM de 16GB y 512GB SSD",
            Imagen: "https://m.media-amazon.com/images/I/81fw5t8k63L._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mini PC MeLE Quieter2Q Sin Ventilador con 8GB RAM y 128GB Almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/711gBTGdAQL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mini PC Stick MeLE PCG02 Sin Ventilador con 8GB RAM y 128GB Almacenamiento",
            Imagen: "https://m.media-amazon.com/images/I/71QNeA0DbEL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mini PC HIGOLEPC Win 11 Pro con Pantalla IPS, 8GB RAM y 128GB EMMC",
            Imagen: "https://m.media-amazon.com/images/I/613Znn6NwpL._AC_SY355_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "PC de Escritorio Dell para Juegos RGB con Intel i5 y NVIDIA GT 1030",
            Imagen: "https://m.media-amazon.com/images/I/81U066HOzeL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas",
            Imagen: "https://m.media-amazon.com/images/I/81k+w98hRSL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home",
            Imagen: "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SY450_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB",
            Imagen: "https://m.media-amazon.com/images/I/61Iyy+2damL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "HP Laptop Ultraligera 14 Pulgadas con Intel Quad-Core y 8GB RAM",
            Imagen: "https://m.media-amazon.com/images/I/81divYKpeTL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente",
            Imagen: "https://m.media-amazon.com/images/I/71oYSGF0gVS._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "PC de Escritorio Dell OptiPlex, Intel i5, 16 GB RAM, 2 TB HDD",
            Imagen: "https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024",
            Imagen: "https://m.media-amazon.com/images/I/61BRKJYlOSL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad",
            Imagen: "https://m.media-amazon.com/images/I/616aCuRtnpL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro",
            Imagen: "https://m.media-amazon.com/images/I/71iYRkJS1pL._AC_SX425_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Máquina de Sonido y Reloj Despertador con Luz Lunar Homedics",
            Imagen: "https://m.media-amazon.com/images/I/618uiOYL1iL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Juego de 2 Apliques de Pared de Níquel Cepillado con Vidrio Transparente",
            Imagen: "https://m.media-amazon.com/images/I/612R-3BVz0L._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Aplique de Pared LED Negro de 10W IP65 para Interior y Exterior",
            Imagen: "https://m.media-amazon.com/images/I/51QWpRMHmhL._AC_SX679_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Lámpara de Pared Exterior IP54 de Aluminio Antioxidante ZUUKOLE",
            Imagen: "https://m.media-amazon.com/images/I/51oa8XJesdL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Juego de Fundas de Edredón de Algodón Ultrasuave Pure Era (3 Piezas)",
            Imagen: "https://m.media-amazon.com/images/I/81mujzyfVVL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Funda de Edredón King Verde Salvia con Pompones Andency (3 Piezas)",
            Imagen: "https://m.media-amazon.com/images/I/81mgOruo3YL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Juego de Funda de Edredón King Verde Salvia Claro CGK Unlimited (3 Piezas)",
            Imagen: "https://m.media-amazon.com/images/I/81r4PlsVxmL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        },
        {
            Nombre: "Mesa de Noche Furinno de Madera con Cajón, Color Espresso (2 Piezas)",
            Imagen: "https://m.media-amazon.com/images/I/613ErDOuGFL._AC_SX522_.jpg",
            Enlace: "https://www.amazon.com/-/es/gp/help/customer/display.html?nodeId=GP7Z9RS868ZP5J9F"
        }
    ];

    // Filtrar productos según el nombre buscado
    const filteredProducts = productos
        .filter((product) =>
            product.Nombre.toLowerCase().includes(searchName.toLowerCase())
        )
        .slice(0, visibleCount);

    useEffect(() => {
        if (selectedProduct) {
            setReportLink(selectedProduct.Enlace);
        }
    }, [selectedProduct]);

    const handleOpenReportLink = () => {
        if (reportLink) {
            window.open(reportLink, "_blank");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
                    Buscar Producto para Reportar
                </h1>

                {/* Barra de búsqueda y selector de cantidad de productos */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 max-w-3xl mx-auto">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Buscar por nombre de producto..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {searchName && (
                            <button
                                onClick={() => setSearchName("")}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div>
                        <label className="text-white font-bold mr-2">
                            Mostrar cantidad de productos:
                        </label>
                        <select
                            value={visibleCount}
                            onChange={(e) => setVisibleCount(Number(e.target.value))}
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg"
                        >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={48}>48</option>
                            <option value={96}>96</option>
                        </select>
                    </div>
                </div>

                {!searchName && (
                    <p className="text-center text-gray-400">
                        Escribe el nombre del producto para mostrar resultados
                    </p>
                )}

                {searchName && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 p-4 rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={product.Imagen}
                                            alt={product.Nombre}
                                            className="w-full h-48 object-contain mb-4"
                                        />
                                        <h3 className="text-xl font-bold mb-2">{product.Nombre}</h3>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedProduct(product);
                                                    setShowModal(true);
                                                }}
                                                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                                            >
                                                Reportar este producto
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-400 w-full">
                                    No se encontraron productos.
                                </p>
                            )}
                        </div>
                    </>
                )}

                {showModal && selectedProduct && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
                        <div className="bg-gray-900 rounded-lg shadow-lg w-full h-full sm:max-w-lg sm:h-auto p-6 sm:p-8 overflow-y-auto sm:overflow-visible text-center relative transition-all duration-300 ease-out">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Instrucciones para el reporte
                            </h2>

                            <div className="flex flex-col items-center mb-4 sm:mb-6">
                                <img
                                    src={selectedProduct.Imagen}
                                    alt={selectedProduct.Nombre}
                                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-3"
                                />
                                <h3 className="text-xl sm:text-2xl font-bold">{selectedProduct.Nombre}</h3>
                            </div>

                            <p className="text-gray-400 mb-4 sm:mb-6 px-2 sm:px-4">
                                Estás a punto de ser redireccionado a la guia oficial para obtener asistencia de un reporte formal de tu producto.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 text-left">
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">1. Prepárate</h3>
                                    <p className="text-gray-400 text-sm">
                                        Asegúrate de tener fotos claras del producto y del empaque.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">2. Sé claro</h3>
                                    <p className="text-gray-400 text-sm">
                                        Explica de manera detallada el problema con el producto.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">3. Documenta</h3>
                                    <p className="text-gray-400 text-sm">
                                        Si es posible, proporciona un recibo o comprobante de compra.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">4. Reporta a tiempo</h3>
                                    <p className="text-gray-400 text-sm">
                                        Es importante que el reporte se haga tan pronto como sea posible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg sm:mr-auto"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={handleOpenReportLink}
                                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg sm:ml-auto"
                                >
                                    Ver cómo realizar el reporte
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
