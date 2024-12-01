// src\BACKSTATE\Online\Product\Product.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Datos del producto principal
const product = {
    "id": 10,
    "name": "OPPO A60 4G - Smartphone Libre 256GB, Pantalla HD+ 6.7 Pulgadas y Carga Rápida",
    "category": "Smartphones y Tablets Innovadores 📱💻",
    "price": 210.5,
    "description": "Descubre el equilibrio perfecto entre diseño, rendimiento y funcionalidad con el OPPO A60 4G. Este smartphone, con su pantalla HD+ LCD de 6.7 pulgadas, ofrece una experiencia visual inmersiva gracias a su brillo de 950 nits y tasa de refresco de 90Hz, ideal para disfrutar tus películas, juegos y contenidos favoritos con colores vibrantes y nitidez impresionante. El exclusivo sistema OReality Audio y el Modo Ultra Volumen 300% garantizan un sonido estéreo envolvente para una experiencia auditiva excepcional. El diseño elegante y funcional del OPPO A60 4G incorpora el acabado Particle Magnetic con OPPO Glow, que lo hace resistente a arañazos y libre de huellas. Su ligereza de 186g y grosor de 7.68mm lo convierten en el compañero perfecto para llevarlo cómodamente en cualquier situación. Equipado con una batería de 5,000 mAh y tecnología de carga rápida de 45W SUPERVOOC, este dispositivo asegura hasta dos días de uso continuo, con una carga del 50% en solo 30 minutos. Además, su procesador Qualcomm Snapdragon 680 y 8GB de RAM (ampliables) garantizan un rendimiento fluido, mientras que sus 256GB de almacenamiento interno, expandibles hasta 1TB, te permiten guardar todo lo que necesitas sin preocupaciones. La cámara triple de 50+2+8 MP del OPPO A60 4G está diseñada para capturar fotos y videos de alta calidad en cualquier condición de luz, permitiéndote explorar tu creatividad y compartir tus mejores momentos fácilmente.",
    "review": "El OPPO A60 4G es ideal para quienes buscan un smartphone potente, elegante y funcional. Su pantalla vibrante, batería de larga duración y rendimiento eficiente lo convierten en una excelente opción tanto para el entretenimiento como para la productividad. Además, su diseño ligero y resistente asegura comodidad y estilo en cada uso. Es perfecto para capturar momentos inolvidables y disfrutar de un desempeño impecable en todas tus actividades.",
    "features": [
        "Pantalla HD+ LCD de 6.7 pulgadas: Brillo de 950 nits y 90Hz para una experiencia visual inmersiva.",
        "Diseño resistente y elegante: Acabado OPPO Glow resistente a arañazos y libre de huellas.",
        "Batería duradera: 5,000 mAh con carga rápida de 45W, perfecta para el día a día.",
        "Rendimiento confiable: Procesador Qualcomm Snapdragon 680 y RAM ampliable hasta 16GB.",
        "Cámara avanzada: Triple cámara de 50+2+8 MP para fotos nítidas y creativas."
    ],
    "images": [
        "https://m.media-amazon.com/images/I/81hygajaQnL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Jm9At5dLL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71hOlj81D1L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61-JAmJor8L._AC_SX569_.jpg"
    ],
    "link": "https://amzn.to/3B6i2MM"
};

// Datos de productos relacionados con enlaces únicos
const related_products = [
        {
        "id": 2,
        "name": "Teléfono móvil para personas mayores con botón SOS y pantalla a color",
        "price": 39.99,
        "description": "El teléfono Panasonic KX-TU400EXG está diseñado pensando en la comodidad y seguridad de los adultos...",
        "image": "https://m.media-amazon.com/images/I/61dgkB6MmVL._AC_SX679_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/telefono-movil-para-personas-mayores-con-boton-sos-y-pantalla-a-color2"
    },
    {
        "id": 9,
        "name": "iPhone 11 Pro de 64 GB en Plata - Tecnología Avanzada y Elegancia",
        "price": 1109.07,
        "description": "Experimenta la perfección tecnológica con el iPhone 11 Pro de 64 GB, un dispositivo diseñado...",
        "image": "https://m.media-amazon.com/images/I/81vZCv9kA0L._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/iphone-11-pro-de-64-gb-en-plata-tecnologia-avanzada-y-elegancia9"
    },
    {
        "id": 6,
        "name": "Tablet HUAWEI MatePad SE 11 Pulgadas con M-Pen Lite y Superbatería de 7700 mAh",
        "price": 210.18,
        "description": "La HUAWEI MatePad SE 11 Pulgadas es la combinación perfecta entre diseño elegante y tecnología...",
        "image": "https://m.media-amazon.com/images/I/61sBnhuQxaL._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/tablet-huawei-matepad-se-11-pulgadas-con-mpen-lite-y-superbateria-de-7700-mah6"
    },
    {
        "id": 24,
        "name": "Samsung Galaxy Tab A9+ con pantalla de 11 Pulgadas y 128 GB de almacenamiento",
        "price": 316.37,
        "description": "La Samsung Galaxy Tab A9+ es la tablet ideal para quienes buscan combinar estilo, rendimiento...",
        "image": "https://m.media-amazon.com/images/I/51tmXn9ZiEL._AC_SX569_.jpg",
        "link": "/online/categoria/smartphones-y-tablets-innovadores/samsung-galaxy-tab-a9-con-pantalla-de-11-pulgadas-y-128-gb-de-almacenamiento24"
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