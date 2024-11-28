// src\app\oops\Components\Oops.jsx
"use client";
import React from 'react';





// Componente de fondo animado
function BackgroundAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <div className="w-full h-full bg-gradient-to-r from-purple-800 to-pink-600 opacity-30 blur-2xl animate-pulse"></div>
        </div>
    );
}

// Componente para las tarjetas interactivas
function DetailCard({ title, description }) {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}


export default function Oops() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col justify-center items-center text-white">
            {/* Fondo animado con partículas */}
            <BackgroundAnimation />

            {/* Título principal */}
            <div className="text-center z-10 px-4 mt-7">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse mb-6">
                    Sitio en desarrollo
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
                    Esta página está en mantenimiento para traerte un mejor servicio. ¡Dentro de poco disfrutarás una mejor experiencia!
                </p>
            </div>

            {/* Cartas interactivas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-8 z-10">
                <DetailCard
                    title="Mejora de Velocidad"
                    description="Se está optimizando el rendimiento para que puedas disfrutar de tiempos de carga más rápidos."
                />
                <DetailCard
                    title="Actualización de Seguridad"
                    description="Se están reforzando nuestros sistemas para ofrecerte una experiencia más segura."
                />
                <DetailCard
                    title="Nueva Funcionalidad"
                    description="Se están añadiendo nuevas características para mejorar tu experiencia en la plataforma."
                />
            </div>
        </div>
    );
}


