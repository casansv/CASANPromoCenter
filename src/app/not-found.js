// src\app\not-found.js
"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';





export default function Custom404() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-neutral-900 text-gray-100 overflow-hidden pb-24">
            {/* Fondo animado sutil optimizado */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{
                    duration: 3,
                    repeat: 0,
                    type: "tween"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-black/30 to-emerald-900/20 blur-2xl"
            />

            {/* Fondo de cuadrícula geométrica */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            {/* Contenido principal */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    type: "tween"
                }}
                className="relative z-10 text-center space-y-8 px-6 max-w-4xl mx-auto"
            >
                {/* Código de error brillante */}
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        type: "tween"
                    }}
                    className="text-[10rem] md:text-[15rem] font-black tracking-wide text-transparent bg-clip-text 
                    bg-gradient-to-r from-indigo-400 via-emerald-500 to-teal-300 
                    drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                    404
                </motion.h1>

                {/* Error Message */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-tight">
                        Página no encontrada
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        El sitio al que intentas acceder no existe o ha dejado de existir.
                    </p>
                </div>

                {/* Botones de navegación */}
                <div className="flex justify-center pt-6">
                    <Link href="/" className="group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "tween" }}
                            className="flex items-center space-x-2 px-6 py-3 
                            bg-gradient-to-tr from-indigo-600 to-emerald-600 
                            text-white rounded-full shadow-xl 
                            hover:shadow-emerald-500/50 transition-all duration-300 
                            group-hover:ring-2 group-hover:ring-emerald-400/50"
                        >
                            <Home className="w-5 h-5" />
                            <span className="font-semibold">Volver al Inicio</span>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* Elementos decorativos simplificados */}
            <div
                className="absolute bottom-12 right-12 w-32 h-32 
                bg-gradient-to-tr from-indigo-600/20 to-emerald-600/20 
                rounded-full blur-xl opacity-30"
            />
            <div
                className="absolute top-12 left-12 w-24 h-24 
                bg-gradient-to-bl from-teal-600/10 to-purple-600/10 
                rounded-full blur-xl opacity-20"
            />
        </div>
    );
}