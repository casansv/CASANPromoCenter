// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 5,
    "name": "Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12",
    "category": "Smartphones y Tablets Innovadores 📱💻",
    "price": 94.0,
    "description": "La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de 9 pulgadas, combinada con altavoces estéreo duales mejorados con Dolby Atmos, crea una experiencia cinematográfica envolvente en la palma de tu mano. Potenciada por el procesador MediaTek Helio G80 y 3 GB de RAM, esta tablet garantiza un rendimiento fluido, ya sea para jugar, navegar o realizar tareas cotidianas. Además, cuenta con 32 GB de almacenamiento interno, ampliables hasta 2 TB mediante tarjeta microSD (se vende por separado), para que nunca te quedes sin espacio para tus aplicaciones, fotos o videos. La batería de larga duración te permite disfrutar de tus series y películas favoritas sin interrupciones, mientras el modo de lectura envolvente y la certificación TUV protegen tu vista, haciéndola perfecta para largas sesiones de lectura. Incluye funda y película protectora para mayor practicidad y protección.",
    "review": "La Lenovo Tab M9 es la combinación perfecta entre estilo, rendimiento y versatilidad. Ideal para quienes buscan una tablet confiable para entretenimiento, juegos y productividad, su diseño compacto y funciones avanzadas la hacen una excelente opción tanto para el hogar como para viajes. Su capacidad ampliable y batería de larga duración la convierten en un dispositivo preparado para cualquier desafío.",
    "features": [
        "Pantalla HD de 9 pulgadas: Imágenes claras y envolventes con altavoces Dolby Atmos.",
        "Procesador MediaTek Helio G80: Fluidez para juegos, navegación y multitarea.",
        "Almacenamiento ampliable: Hasta 2 TB mediante tarjeta microSD para espacio adicional.",
        "Modo de lectura envolvente: Protección ocular y sonidos ambientales para un ambiente relajante.",
        "WiFi y Bluetooth 5.1: Conectividad avanzada para una experiencia siempre conectada."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/617atwaJKLL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/71zv-5QJYML._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/61ovTxz041L._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/71UxybKC7WL._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/71wPlX5X7lL._AC_SX425_.jpg"
    ],
    "link": "https://amzn.to/4g8Hmk1"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 3,
        "name": "Tablet Android Google Pixel con Pantalla de 11 Pulgadas, IA integrada y batería de larga duración",
        "price": 619.0,
        "description": "Descubre la innovación con la Google Pixel Tablet, diseñada para transformar tu experiencia digital. Equipada...",
        "image": "https://m.media-amazon.com/images/I/71yATvhR3OL._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/tablet-android-google-pixel-con-pantalla-de-11-pulgadas-ia-integrada-y-bateria-de-larga-duracion3"
    },
    {
        "id": 29,
        "name": "Tableta PRITOM M10 de 10 Pulgadas - Diseño Versátil y Seguro para Toda la Familia",
        "price": 80.4,
        "description": "La PRITOM M10 es una tableta Android 12 que combina rendimiento, funcionalidad y diseño pensado...",
        "image": "https://m.media-amazon.com/images/I/61dCzmCA+AL._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/tableta-pritom-m10-de-10-pulgadas-diseno-versatil-y-seguro-para-toda-la-familia29"
    },
    {
        "id": 11,
        "name": "Google Pixel 8a - Smartphone Android 128GB con Cámara Inteligente y Diseño Resistente",
        "price": 580.82,
        "description": "El Google Pixel 8a redefine lo que esperas de un smartphone. Equipado con la innovadora...",
        "image": "https://m.media-amazon.com/images/I/71JTIdBUvYL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/google-pixel-8a-smartphone-android-128gb-con-camara-inteligente-y-diseno-resistente11"
    },
    {
        "id": 27,
        "name": "Xiaomi Pad 6 – Tablet WQHD+ de 11 Pulgadas con Snapdragon 870 y batería de 8840 mAh",
        "price": 253.89,
        "description": "La Xiaomi Pad 6 es la tablet diseñada para quienes buscan un equilibrio entre rendimiento,...",
        "image": "https://m.media-amazon.com/images/I/61CXBT8IXtL._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/xiaomi-pad-6-tablet-wqhd-de-11-pulgadas-con-snapdragon-870-y-bateria-de-8840-mah27"
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