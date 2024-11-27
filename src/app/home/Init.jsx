// src\app\home\Init.jsx
'use client';
import React, { useEffect, useState } from 'react';

import Data from "../sconstants.json";





const RotatingIcon = ({ icon, index, totalIcons }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const angle = (360 / totalIcons) * index + rotation;
    const radius = 70; // Ajustado el radio para mejor visualización
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return (
        <div
            className="absolute w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 ease-in-out"
            style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
            }}
        >
            <img
                src={icon}
                alt="Feature icon"
                className="w-full h-full object-contain"
                style={{
                    transform: `rotate(-${angle}deg)`,
                }}
            />
        </div>
    );
};

const ProductSection = () => {
    return (
        <div className="space-y-16 md:space-y-24 py-8 md:py-12">
            {/* Elemento 1 */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 md:px-8">
                <div className="w-full md:w-1/2 space-y-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                        Tecnología de Última Generación
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                        Si buscas los últimos smartphones y tablets 📱💻, potentes laptops y accesorios de alto rendimiento 💻⚡, o deseas modernizar tu espacio con soluciones inteligentes para el hogar 🏠📲, ¡aquí lo encontrarás todo!
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 relative flex items-center justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                        {[Data.menu_icon_01, Data.menu_icon_02, Data.menu_icon_03].map((icon, index) => (
                            <RotatingIcon
                                key={index}
                                icon={icon}
                                index={index}
                                totalIcons={3}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Elemento 2 */}
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-8 px-4 md:px-8">
                <div className="w-full md:w-1/2 space-y-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Moda y Estilo Personal
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                        Para los amantes de la moda, explora nuestra impresionante colección de moda femenina 👗✨, atrevida lencería 💋🔥, o elegantes accesorios para hombres 👔💼 que elevarán tu estilo. Y porque todos merecen comodidad, no te pierdas nuestra selección de ropa cómoda masculina 🩲💪.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 relative flex items-center justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                        {[Data.menu_icon_04, Data.menu_icon_05, Data.menu_icon_06, Data.menu_icon_07].map((icon, index) => (
                            <RotatingIcon
                                key={index}
                                icon={icon}
                                index={index}
                                totalIcons={4}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Elemento 3 */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 md:px-8">
                <div className="w-full md:w-1/2 space-y-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500">
                        Hogar y Bienestar
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                        Además, ofrecemos una gama de herramientas y productos para mejorar tu hogar 🛠️🏡, productos premium de salud, belleza y bienestar 💅🌿, y divertidos accesorios para mascotas 🐾🎾 que tu compañero peludo adorará.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 relative flex items-center justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                        {[Data.menu_icon_08, Data.menu_icon_09, Data.menu_icon_10].map((icon, index) => (
                            <RotatingIcon
                                key={index}
                                icon={icon}
                                index={index}
                                totalIcons={3}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Elemento 4 */}
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-8 px-4 md:px-8">
                <div className="w-full md:w-1/2 space-y-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                        Accesorios Automotrices
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                        Para los entusiastas de los autos, tenemos repuestos y accesorios para automóviles y motos 🚗🏍️ para que tu vehículo siempre esté en perfectas condiciones.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 relative flex items-center justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                        {[Data.menu_icon_11, Data.menu_icon_11_02].map((icon, index) => (
                            <RotatingIcon
                                key={index}
                                icon={icon}
                                index={index}
                                totalIcons={2}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Init() {
    const roles = [
        '¡Descubre las últimas novedades en tecnología! 📱💻',
        'Estilo y elegancia en cada prenda, ¡compra ahora! 👗✨',
        'Accesorios para tu auto y moto, ¡impecables y funcionales! 🚗🏍️',
        'Haz de tu hogar un lugar más inteligente hoy mismo! 🏠📲',
        'Ofertas irresistibles en laptops de alto rendimiento 💻⚡',
        'Comodidad y estilo en lencería para ellos y ellas 💋🩲🔥',
        '¡Mejora tu bienestar con nuestros productos de belleza y salud! 💅🌿',
        'Accesorios para mascotas que harán feliz a tu compañero peludo 🐾🎾',
        'Herramientas para cada proyecto en casa, ¡llévalas ya! 🛠️🏡',
        'Sorprende con la moda más actual, ¡solo para ti! 👔💼',
        'Tu estilo, tu momento, ¡elige lo mejor ahora! 🛍️✨',
        'Productos innovadores al mejor precio, ¡no te lo pierdas! 🚀',
        'Tu hogar inteligente comienza aquí, ¡descúbrelo! 🏠⚡',
        'Tecnología avanzada a un clic de distancia 📱💻',
        'Lo mejor en moda, tecnología y bienestar, ¡todo en un solo lugar! 🌟'
    ];

    const TYPING_SPEED = 150;
    const DELETING_SPEED = 75;
    const PAUSE_DELAY = 2000;

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

    const maxLength = Math.max(...roles.map(role => role.length));

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                    setTypingSpeed(TYPING_SPEED);
                }
            }, DELETING_SPEED);
        } else {
            typingTimeout = setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText === currentRole) {
                    setIsDeleting(true);
                    setTypingSpeed(PAUSE_DELAY);
                } else {
                    setTypingSpeed(TYPING_SPEED);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-gray-100 min-h-screen">
            <div className="container mx-auto px-4 md:px-5 py-8 md:py-16">
                <section className="text-center mb-8 md:mb-16">
                    {/* Contenedor con altura mínima fija para evitar saltos */}
                    <div className="min-h-[4rem] md:min-h-[6rem] flex items-center justify-center mb-6">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                            {displayText}
                            <span className="text-gray-400">|</span>
                        </h1>
                    </div>


                    <div className="text-center py-8">
                        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-800 flex flex-wrap items-center justify-center gap-2">
                            ¿Qué encontrarás aquí?
                            <span className="inline-flex items-center gap-0.5">
                                <img
                                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.gif"
                                    alt="👀"
                                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                                />
                                <img
                                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_fe0f/512.gif"
                                    alt="☝"
                                    className="w-6 h-6 md:w-8 md:h-8 object-contain rotate-180 scale-x-[-1]"
                                />
                            </span>
                        </h2>
                    </div>
                    <ProductSection />
                </section>
            </div>
        </div>
    );
}
