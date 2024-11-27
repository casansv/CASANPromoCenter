// src\app\not-found.js
import Link from 'next/link';





export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            {/* Texto central */}
            <div className="text-center space-y-4">
                <h1 className="text-8xl font-extrabold tracking-widest text-red-600">
                    404
                </h1>
                <h2 className="text-2xl font-bold text-gray-300">
                    Página no encontrada
                </h2>
                <p className="text-base text-gray-400 max-w-md mx-auto">
                    Parece que la página a la que intentas acceder no existe o ha dejado de existir.
                </p>

                {/* Botón */}
                <Link href="/" legacyBehavior>
                    <a className="inline-block px-6 py-2 bg-red-600 text-white text-base rounded-full shadow-md hover:bg-red-500 transition-all duration-300 ease-in-out">
                        Volver al Inicio
                    </a>
                </Link>
            </div>

            {/* Fondo decorativo simple */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500 to-transparent opacity-30 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-transparent opacity-30 rounded-full"></div>
            </div>
        </div>
    );
}
