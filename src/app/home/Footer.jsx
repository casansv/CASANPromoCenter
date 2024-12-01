"use client";
import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';





export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-12">
            <div className="container mx-auto px-6 flex flex-col items-center">
                {/* Título principal con GIF y subtítulo */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide flex items-center justify-center">
                        Con las mejores ofertas
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                            alt="🔥"
                            width="32"
                            height="32"
                            className="ml-2 md:ml-3 inline-block"
                        />
                    </h1>
                    <p className="mt-4 text-base md:text-base text-gray-300 max-w-2xl mx-auto">
                        El sitio ideal para emprendedores que buscan revender productos y obtener buenas ganancias.
                    </p>
                </div>

                {/* Secciones de contacto y reporte de problemas */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    {/* Contacto */}
                    <div className="flex flex-col items-center text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-semibold mb-5 text-white">Contacto</h2>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.instagram.com/casan.sv/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-56 md:w-64 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <FaInstagram className="mr-2 md:mr-3 text-lg" />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/50379683144"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-56 md:w-64 py-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <FaWhatsapp className="mr-2 md:mr-3 text-lg" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/casansv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-56 md:w-64 py-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <FaTelegram className="mr-2 md:mr-3 text-lg" />
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:dm.casansv@gmail.com"
                                    className="flex items-center justify-center w-56 md:w-64 py-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <FaEnvelope className="mr-2 md:mr-3 text-lg" />
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Reporte de Problemas */}
                    <div className="flex flex-col items-center text-center md:text-left w-full md:w-auto">
                        <h2 className="text-xl md:text-2xl font-semibold mb-5 text-white">Reporte de Problemas</h2>
                        <ul className="space-y-3 w-full md:w-auto">
                            <li className="w-full md:w-auto px-4 md:px-0">
                                <Link
                                    href="/reportes"
                                    className="flex items-center justify-center w-full md:w-60 px-6 py-2.5 md:py-1.5 bg-white text-gray-800 text-base md:text-sm border-2 border-gray-500 font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-lg hover:scale-100"
                                >
                                    Problemas con producto recibido
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Texto de pie de página */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-500">
                        Desarrollado con ❤️ por CASAN Promo Center
                    </p>
                </div>
            </div>
        </footer>
    );
}