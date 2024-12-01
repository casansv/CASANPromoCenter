// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 14,
    "name": "HUAWEI Pura 70 Ultra 512GB Verde con Cámara Emergente y SuperCharge de 100W",
    "category": "Smartphones y Tablets Innovadores 📱💻",
    "price": 1585.92,
    "description": "El HUAWEI Pura 70 Ultra es la combinación perfecta de tecnología avanzada y diseño artístico. Con una Cámara Emergente con Ultrailuminación y un sensor de 1 pulgada, este smartphone captura detalles impresionantes, incluso en condiciones de poca luz. Su teleobjetivo macro con zoom de 35 aumentos y apertura F2.1 te permite descubrir el mundo desde nuevas perspectivas, mientras que el XD Motion Engine asegura imágenes nítidas, incluso a velocidades ultraaltas. Este dispositivo destaca por su resistente Cristal Kunlun Superduradero, diseñado para soportar caídas y arañazos, brindando tranquilidad y confiabilidad. Además, su elegante Diseño de Patrón Estrellado con texturas en relieve convierte al HUAWEI Pura 70 Ultra en un espectáculo visual único que combina innovación y estilo. Con una batería de 5200 mAh y la función de Doble SuperCharge de 100W, obtendrás energía suficiente para todo el día en solo minutos. Además, cuenta con carga inversa de hasta 20W para mantener tus otros dispositivos funcionando en cualquier momento. Con 16GB de RAM y 512GB de almacenamiento, este smartphone ofrece un rendimiento inigualable para multitarea y almacenamiento de archivos de gran tamaño.",
    "review": "El HUAWEI Pura 70 Ultra es el dispositivo perfecto para quienes buscan innovación y diseño. Su cámara emergente de ultrailuminación, batería de carga rápida y resistencia a caídas lo hacen ideal para usuarios exigentes. Además, su diseño de patrón estrellado lo convierte en una obra maestra tecnológica y estética, diseñada para destacar en cualquier situación.",
    "features": [
        "Cámara Emergente con Ultrailuminación: Sensor de 1 pulgada, teleobjetivo macro con zoom de 35 aumentos y apertura F2.1.",
        "XD Motion Engine: Captura imágenes claras incluso en movimiento a velocidades extremas.",
        "Cristal Kunlun Superduradero: Resistencia mejorada en un 300% contra arañazos y 100% contra caídas.",
        "Doble SuperCharge de 100W: Carga rápida y función de carga inversa de hasta 20W.",
        "Diseño de Patrón Estrellado: Textura elegante y artística con un exclusivo símbolo de avance XMAGE."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/71-W9YVyc5L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/712wA2aVdzL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71awobk-FIL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61lcTOAQ1VL._AC_SX569_.jpg"
    ],
    "link": "https://amzn.to/3Zug8yM"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 16,
        "name": "Panasonic KX-TU400EXC Teléfono para Mayores con Botón SOS y Cámara - Turquesa",
        "price": 52.88,
        "description": "El Panasonic KX-TU400EXC es un teléfono móvil diseñado especialmente para personas mayores, combinando facilidad de...",
        "image": "https://m.media-amazon.com/images/I/41NgNigFmbL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/panasonic-kxtu400exc-telefono-para-mayores-con-boton-sos-y-camara-turquesa16"
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
    },
    {
        "id": 25,
        "name": "Acer Iconia Tab M10 con pantalla WUXGA de 10,1 Pulgadas y funda incluida",
        "price": 199.96,
        "description": "La Acer Iconia Tab M10 es una tablet diseñada para ofrecer rendimiento, calidad visual y...",
        "image": "https://m.media-amazon.com/images/I/71XKX8Z5QBL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/acer-iconia-tab-m10-con-pantalla-wuxga-de-101-pulgadas-y-funda-incluida25"
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