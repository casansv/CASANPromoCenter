// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 12,
    "name": "Motorola Moto g24 128GB Dual SIM con Cámara 50MP y Pantalla HD+ 90Hz",
    "category": "Smartphones y Tablets Innovadores 📱💻",
    "price": 115.3,
    "description": "El Motorola Moto g24 combina estilo, rendimiento y funcionalidad a un precio accesible. Este smartphone cuenta con una pantalla HD+ de 6,56 pulgadas y tasa de refresco de 90Hz, diseñada para ofrecer una experiencia visual fluida y agradable, incluso bajo luz solar intensa gracias a su Modo Alto Brillo. Con materiales de calidad y un diseño optimizado, es cómodo de sostener y usar durante todo el día. Captura momentos únicos con su sistema de cámara dual de 50 MP + 2 MP, que incluye un objetivo Macro Vision especializado para explorar los detalles más pequeños. Ya sea de día o de noche, tus fotos tendrán calidad profesional. Además, el sonido Dolby Atmos con altavoces estéreo te sumerge en un audio multidimensional con voces nítidas y graves potentes para disfrutar de tu entretenimiento favorito. Equipado con hasta 8 GB de RAM gracias a la función Expansión de Memoria, este dispositivo te permite realizar multitareas de manera fluida y abrir aplicaciones al instante. Su batería de 5000 mAh con carga TurboPower de 15W garantiza un rendimiento duradero, ideal para quienes buscan productividad y diversión sin interrupciones. Además, incluye funda y cargador, para que lo tengas todo desde el primer momento.",
    "review": "El Moto g24 es perfecto para quienes buscan un smartphone accesible sin comprometer calidad. Ideal para fotos detalladas, multitarea fluida y entretenimiento inmersivo, este dispositivo combina funcionalidad y diseño práctico. Su batería de larga duración y tecnología de carga rápida lo convierten en un aliado confiable para el día a día.",
    "features": [
        "Pantalla HD+ de 6,56 pulgadas y 90Hz: Visualización fluida y clara incluso bajo luz solar directa.",
        "Cámara dual de 50 MP + 2 MP: Captura imágenes detalladas y explora de cerca con Macro Vision.",
        "Dolby Atmos y altavoces estéreo: Sonido multidimensional con voces nítidas y graves profundos.",
        "Rendimiento eficiente: Hasta 8 GB de RAM con Expansión de Memoria para multitarea sin esfuerzo.",
        "Batería de larga duración: 5000 mAh con carga TurboPower de 15W para mantenerte conectado todo el día."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/61GkKd1A0GL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/71q+6rA+MOL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61kCRWUA-0L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61qJqJ81gGL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71kh5gi4NNL._AC_SX569_.jpg"
    ],
    "link": "https://amzn.to/414Apfz"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 17,
        "name": "HAMMER 6 LTE - Teléfono Resistente IP68 con Botón SOS y Batería de 2500mAh",
        "price": 73.0,
        "description": "El HAMMER 6 LTE es un teléfono diseñado para resistir los entornos más exigentes, combinando...",
        "image": "https://m.media-amazon.com/images/I/31eYwWm1X-L._AC_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/hammer-6-lte-telefono-resistente-ip68-con-boton-sos-y-bateria-de-2500mah17"
    },
    {
        "id": 5,
        "name": "Tablet Lenovo Tab M9 de 9 Pulgadas HD con Dolby Atmos y Android 12",
        "price": 94.0,
        "description": "La Lenovo Tab M9 está diseñada para ofrecerte experiencias digitales inigualables. Su pantalla HD de...",
        "image": "https://m.media-amazon.com/images/I/617atwaJKLL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/tablet-lenovo-tab-m9-de-9-pulgadas-hd-con-dolby-atmos-y-android-125"
    },
    {
        "id": 10,
        "name": "OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida",
        "price": 210.5,
        "description": "Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este...",
        "image": "https://m.media-amazon.com/images/I/81hygajaQnL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/oppo-a60-4g-smartphone-libre-256gb-pantalla-hd-67-pulgadas-y-carga-rapida10"
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