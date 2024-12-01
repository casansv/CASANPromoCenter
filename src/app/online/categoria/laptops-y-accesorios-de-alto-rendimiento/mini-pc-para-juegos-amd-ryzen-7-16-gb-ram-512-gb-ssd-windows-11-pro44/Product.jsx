// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 44,
    "name": "Mini PC para Juegos AMD Ryzen 7, 16 GB RAM, 512 GB SSD, Windows 11 Pro",
    "category": "Laptops y Accesorios de Alto Rendimiento 💻⚡",
    "price": 349.0,
    "description": "Disfruta de la máxima potencia en el menor espacio con la Mini PC para Juegos ACEMAGICIAN AM06PRO. Equipado con el procesador AMD Ryzen 7 4800U (8 núcleos/16 hilos, hasta 4.4 GHz), 16 GB de RAM DDR4 y un SSD de 512 GB, este equipo compacto es perfecto para gamers, creadores de contenido y usuarios multitarea. Compatible con salida 4K a 60 Hz en triple pantalla, ofrece una experiencia visual inmersiva y fluida. Su conectividad avanzada incluye WiFi 6 y Bluetooth 5.2, asegurando velocidades rápidas y estabilidad en todo momento. Además, viene con Windows 11 Pro preinstalado, listo para llevar tu productividad al siguiente nivel.",
    "review": "La Mini PC para Juegos ACEMAGICIAN AM06PRO redefine lo que una computadora compacta puede hacer. Su potente procesador AMD Ryzen 7 y gráficos integrados Radeon RX Vega 8 garantizan un rendimiento impecable en juegos y aplicaciones exigentes. Diseñada para adaptarse a cualquier espacio, combina tecnología de vanguardia con un diseño minimalista y portátil. Desde el hogar hasta la oficina, este equipo es ideal para multimedia, edición, negocios y más. Su capacidad para soportar triple pantalla en 4K a 60 Hz convierte cualquier tarea en una experiencia visual de alto nivel.",
    "features": [
        "Procesador AMD Ryzen 7 4800U: 8 núcleos y velocidad de hasta 4.4 GHz para un rendimiento potente y eficiente.",
        "Triple Pantalla en 4K a 60 Hz: Ideal para juegos, edición y multitareas con calidad visual impresionante.",
        "16 GB RAM DDR4 + 512 GB SSD: Capacidad y velocidad para manejar juegos, programas y almacenamiento con fluidez.",
        "Conectividad Avanzada: WiFi 6 y Bluetooth 5.2 para conexiones rápidas y estables.",
        "Windows 11 Pro Preinstalado: Sistema operativo moderno y optimizado para productividad y entretenimiento."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/71iYRkJS1pL._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/71M0J6ftbVL._AC_SY355_.jpg",
        "https://m.media-amazon.com/images/I/71ZfazKhM6L._AC_SY355_.jpg",
        "https://m.media-amazon.com/images/I/81Gy07Ugf8L._AC_SY355_.jpg",
        "https://m.media-amazon.com/images/I/917fYrDHPTL._AC_SY355_.jpg"
    ],
    "link": "https://amzn.to/4gcuysM"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 40,
        "name": "Chromebook ASUS CX1, 14 Pulgadas, Plata Transparente",
        "price": 209.99,
        "description": "Descubre el rendimiento eficiente y la versatilidad del Chromebook ASUS CX1, diseñado para ofrecerte productividad...",
        "image": "https://m.media-amazon.com/images/I/71oYSGF0gVS._AC_SX425_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/chromebook-asus-cx1-14-pulgadas-plata-transparente40"
    },
    {
        "id": 43,
        "name": "Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad",
        "price": 279.99,
        "description": "Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este...",
        "image": "https://m.media-amazon.com/images/I/616aCuRtnpL._AC_SX425_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-asus-chromebook-cm14-14-pulgadas-gris-gravedad43"
    },
    {
        "id": 38,
        "name": "Laptop CHUWI HeroBook Pro 14.1 Pulgadas con Pantalla FHD 2K y SSD de 256GB",
        "price": 199.99,
        "description": "La CHUWI HeroBook Pro ofrece un equilibrio perfecto entre diseño, potencia y portabilidad. Equipada con...",
        "image": "https://m.media-amazon.com/images/I/61Iyy+2damL._AC_SX522_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-chuwi-herobook-pro-141-pulgadas-con-pantalla-fhd-2k-y-ssd-de-256gb38"
    },
    {
        "id": 36,
        "name": "Laptop 2 en 1 Samsung Chromebook Plus con Pantalla Táctil FHD de 12.2 Pulgadas",
        "price": 399.0,
        "description": "La Samsung Chromebook Plus combina versatilidad y potencia en un diseño compacto y moderno, ideal...",
        "image": "https://m.media-amazon.com/images/I/81k+w98hRSL._AC_SX425_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/laptop-2-en-1-samsung-chromebook-plus-con-pantalla-tactil-fhd-de-122-pulgadas36"
    }
];

export default function ProductPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const [shareError, setShareError] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleCopyLink = async () => {
        try {
            // Check if the Web Share API is available
            if (navigator.share) {
                await navigator.share({
                    title: product.name,
                    text: product.description,
                    url: currentUrl,
                });
                setShowCopiedMessage(true);
            } else if (navigator.clipboard && navigator.clipboard.writeText) {
                // Fallback to clipboard API if Web Share isn't available
                await navigator.clipboard.writeText(currentUrl);
                setShowCopiedMessage(true);
            } else {
                // Final fallback: create a temporary input element
                const tempInput = document.createElement('input');
                tempInput.value = currentUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                setShowCopiedMessage(true);
            }

            // Hide the success message after 3 seconds
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 3000);
        } catch (error) {
            console.error('Error sharing:', error);
            setShareError(true);
            setTimeout(() => {
                setShareError(false);
            }, 3000);
        }
    };

    const handleBuyProduct = () => {
        const buyLink = product.link.startsWith('http')
            ? product.link
            : `https://${product.link}`;
        window.open(buyLink, '_blank', 'noopener,noreferrer');
    };

    const handleViewProduct = (link) => {
        window.location.href = link;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative">
            <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative md:flex md:space-x-4">
                    <div className="hidden md:block md:w-24 space-y-4 overflow-y-auto max-h-[600px]">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`cursor-pointer border-2 rounded-lg p-1 transition-all ${currentImageIndex === index
                                    ? 'border-purple-500'
                                    : 'border-transparent hover:border-gray-600'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Miniatura ${index + 1}`}
                                    className="w-full h-20 object-cover rounded-md"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full">
                        {product.images && product.images.length > 0 ? (
                            <>
                                <div className="md:h-[500px] h-[400px] relative">
                                    <img
                                        src={product.images[currentImageIndex]}
                                        alt={product.name}
                                        className="w-full h-full object-contain rounded-lg absolute top-0 left-0"
                                    />
                                </div>

                                <div className="md:hidden">
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-[200px] transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
                                    >
                                        <FaArrowLeft size={10} />
                                    </button>

                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-[200px] transform -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
                                    >
                                        <FaArrowRight size={10} />
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {product.images.map((_, index) => (
                                        <span
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-2 w-2 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
                                                }`}
                                        ></span>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-[400px] md:h-[500px]">
                                <p className="text-gray-400 text-2xl">No hay imágenes</p>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-6">{product.name}</h1>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Reseña del producto:</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {product.review}
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">Características:</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-white mb-1">
                            Precio: <span className="text-purple-400">${product.price}</span>
                        </h3>
                        <p className="text-lime-400 text-xs mb-6">
                            *Este precio no incluye los costos de importación.
                        </p>
                        <p className="text-gray-400 mb-4">
                            Este producto está disponible para su compra inmediata desde tu dispositivo actual:
                        </p>

                        <div className="space-y-4">
                            <button
                                onClick={handleBuyProduct}
                                className="w-full bg-green-600 hover:bg-green-500 text-white text-lg font-semibold py-3 rounded-md transition-all"
                            >
                                Comprar producto
                            </button>

                            <button
                                onClick={handleCopyLink}
                                className="w-full flex justify-center items-center bg-gray-700 hover:bg-gray-600 text-white text-lg font-semibold py-3 rounded-md transition-all"
                            >
                                <FaShareAlt className="mr-2" />
                                Compartir producto
                            </button>

                            <p className="text-center text-xs mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 font-semibold">
                                Con envío a nivel internacional, así como a El Salvador.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {showCopiedMessage && (
                <div className="fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg">
                    {navigator.share ? 'Contenido compartido exitosamente' : 'Enlace copiado al portapapeles'}
                </div>
            )}

            {shareError && (
                <div className="fixed bottom-4 right-4 bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg">
                    No se pudo compartir el contenido
                </div>
            )}

            <div className="bg-gray-800 py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h4 className="text-3xl font-semibold text-white mb-8">A los usuarios también les gustó...</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {related_products.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                                <img
                                    src={relatedProduct.image}
                                    alt={relatedProduct.name}
                                    className="w-full h-40 object-contain mb-4 rounded-lg"
                                />
                                <h5 className="text-xl font-semibold mb-2">{relatedProduct.name}</h5>
                                <p className="text-gray-400 mb-4">{relatedProduct.description}</p>
                                <button
                                    onClick={() => handleViewProduct(relatedProduct.link)}
                                    className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md transition-all"
                                >
                                    Ver producto
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.gif" alt="⏰" width="48" height="48" className="mb-4" />
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">Tiempo de entrega</h4>
                            <p className="text-gray-300 leading-relaxed">
                                El tiempo es importante y por eso nos esforzamos en entregar tu pedido lo más pronto posible.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f48c/512.gif" alt="💌" width="48" height="48" className="mb-4" />
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">Cuidado del producto</h4>
                            <p className="text-gray-300 leading-relaxed">
                                El servicio de delivery maneja cada producto con <span className="font-semibold text-yellow-500"> fragilidad</span> para que llegue en perfectas condiciones.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f198/512.gif" alt="🆘" width="48" height="48" className="mb-4" />
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">Reporte de problemas</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Si tienes algún inconveniente con el producto recibido, visita la sección "Reporte de Problemas" más abajo para recibir ayuda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}