// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 43,
    "name": "Laptop ASUS Chromebook CM14, 14 Pulgadas, Gris Gravedad",
    "category": "Laptops y Accesorios de Alto Rendimiento 💻⚡",
    "price": 279.99,
    "description": "Con la ASUS Chromebook CM14, la productividad y el estilo van de la mano. Este portátil ligero y elegante, en color gris gravedad, está equipado con un procesador MediaTek Kompanio 520 y sistema operativo ChromeOS, ofreciendo un rendimiento ágil y confiable para todas tus tareas diarias. Su pantalla HD NanoEdge antirreflejos de 14 Pulgadas garantiza una experiencia visual cómoda, mientras que su diseño resistente a derrames y certificado con estándares militares asegura durabilidad para el uso diario. Con 4 GB de RAM, 64 GB de almacenamiento eMMC, conectividad avanzada WiFi 6 y Bluetooth 5.3, y características como protección antimicrobiana y cámara web con escudo de privacidad, este Chromebook es ideal para quienes buscan tecnología avanzada con un enfoque sostenible.",
    "review": "La ASUS Chromebook CM14 es más que un portátil; es tu compañero confiable para el día a día. Desde la comodidad de su pantalla antirreflejos hasta la seguridad de su diseño antimicrobiano y resistente a derrames, cada detalle está pensado para adaptarse a tu ritmo de vida. Con un rendimiento rápido gracias a su procesador MediaTek y su conectividad de última generación, es perfecto para estudiantes, profesionales o usuarios en movimiento. Además, su fabricación sostenible y certificación EPEAT Silver lo convierten en una opción responsable con el medio ambiente.",
    "features": [
        "Pantalla HD de 14 Pulgadas: Diseño NanoEdge antirreflejos para mayor comodidad visual.",
        "Protección Antimicrobiana ASUS: Inhibe el crecimiento bacteriano en un 99% para mayor higiene.",
        "Teclado Resistente a Derrames: Capaz de soportar hasta 13 onzas de agua sin daños.",
        "Conectividad Avanzada: WiFi 6 y Bluetooth 5.3 para una conexión rápida y estable.",
        "Certificación Militar y Sostenibilidad: Durabilidad de grado militar MIL-STD 810H y certificación EPEAT Silver."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/616aCuRtnpL._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/61JgeK8ZUKL._AC_SY355_.jpg",
        "https://m.media-amazon.com/images/I/71G-iUuufeL._AC_SY355_.jpg",
        "https://m.media-amazon.com/images/I/71R5nGq9VnL._AC_SY355_.jpg"
    ],
    "link": "https://amzn.to/3Vg7pgW"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 30,
        "name": "PC de Escritorio Dell Optiplex 7050 SFF Reacondicionado con Intel i7 y 32GB RAM",
        "price": 231.89,
        "description": "Renueva tu experiencia informática con el PC de Escritorio Dell Optiplex 7050 SFF, un equipo...",
        "image": "https://m.media-amazon.com/images/I/61FVIijQp2L._AC_SX425_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/pc-de-escritorio-dell-optiplex-7050-sff-reacondicionado-con-intel-i7-y-32gb-ram30"
    },
    {
        "id": 37,
        "name": "HP Laptop 14 HD Microborde con Intel Celeron N4020 y Windows 11 Home",
        "price": 209.99,
        "description": "La HP Laptop 14 es la combinación perfecta de portabilidad y rendimiento para el día...",
        "image": "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SY450_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/hp-laptop-14-hd-microborde-con-intel-celeron-n4020-y-windows-11-home37"
    },
    {
        "id": 42,
        "name": "Chromebook Lenovo Slim 3, 14 Pulgadas, Azul Ligero, 2024",
        "price": 219.99,
        "description": "Descubre la combinación perfecta entre estilo, rendimiento y portabilidad con el Chromebook Lenovo Slim 3....",
        "image": "https://m.media-amazon.com/images/I/61BRKJYlOSL._AC_SX425_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/chromebook-lenovo-slim-3-14-pulgadas-azul-ligero-202442"
    },
    {
        "id": 7,
        "name": "Portátil Acer Chromebook 314 de 14 pulgadas con ChromeOS y SSD de 64 GB",
        "price": 270.45,
        "description": "El Acer Chromebook 314 combina rendimiento, ligereza y eficiencia, siendo la herramienta ideal para estudiantes,...",
        "image": "https://m.media-amazon.com/images/I/41Y3jkOcEKL._AC_SX569_.jpg",
        "link": "/online/categoria/laptops-y-accesorios-de-alto-rendimiento/portatil-acer-chromebook-314-de-14-pulgadas-con-chromeos-y-ssd-de-64-gb7"
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