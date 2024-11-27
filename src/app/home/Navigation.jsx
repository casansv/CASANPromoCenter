"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

import Data from "../sconstants.json";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpenDesktop, setIsShopOpenDesktop] = useState(false);
    const [isShopOpenMobile, setIsShopOpenMobile] = useState(false);
    const [maxHeight, setMaxHeight] = useState("auto");

    const shopMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const dropdownRef = useRef(null);

    // Estructura de datos para las categorías
    const categories = {
        tech: {
            title: "Tecnología de Última Generación",
            icon: "1.",
            items: [
                {
                    href: "/online/categoria/smartphones-y-tablets-innovadores",
                    text: "📱💻 Smartphones y Tablets Innovadores"
                },
                {
                    href: "/online/categoria/laptops-y-accesorios-de-alto-rendimiento",
                    text: "💻⚡ Laptops y Accesorios de Alto Rendimiento"
                },
                {
                    href: "/online/categoria/hogar-inteligente-y-domotica",
                    text: "🏠📲 Hogar Inteligente y Domótica"
                }
            ]
        },
        fashion: {
            title: "Moda y Estilo Personal",
            icon: "2.",
            items: [
                {
                    href: "/online/categoria/moda-y-accesorios-femeninos",
                    text: "👗✨ Moda y Accesorios Femeninos"
                },
                {
                    href: "/online/categoria/lenceria-femenina",
                    text: "💋🔥 Lencería Femenina"
                },
                {
                    href: "/online/categoria/moda-y-accesorios-masculinos",
                    text: "👔💼 Moda y Accesorios Masculinos"
                },
                {
                    href: "/online/categoria/lenceria-masculina",
                    text: "🩲💪 Lencería Masculina"
                }
            ]
        },
        home: {
            title: "Hogar y Bienestar",
            icon: "3.",
            items: [
                {
                    href: "/online/categoria/herramientas-y-proyectos-para-el-hogar",
                    text: "🛠️🏡 Herramientas y Proyectos para el Hogar"
                },
                {
                    href: "/online/categoria/salud-belleza-y-bienestar",
                    text: "💅🌿 Salud, Belleza y Bienestar"
                },
                {
                    href: "/online/categoria/accesorios-para-mascotas",
                    text: "🐾🎾 Accesorios para Mascotas"
                }
            ]
        },
        auto: {
            title: "Accesorios Automotrices",
            icon: "4.",
            items: [
                {
                    href: "/online/categoria/repuestos-y-accesorios-para-automoviles-y-motos",
                    text: "🚗🏍️ Repuestos y Accesorios para Automóviles y Motos"
                }
            ]
        }
    };

    // Efecto para calcular la altura máxima del menú desplegable
    useEffect(() => {
        const calculateMaxHeight = () => {
            if (dropdownRef.current && isShopOpenDesktop) {
                const navHeight = dropdownRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const maxAllowedHeight = windowHeight - navHeight - 20; // 20px de margen
                setMaxHeight(`${maxAllowedHeight}px`);
            }
        };

        calculateMaxHeight();
        window.addEventListener('resize', calculateMaxHeight);

        return () => window.removeEventListener('resize', calculateMaxHeight);
    }, [isShopOpenDesktop]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'unset' : 'hidden';
    };

    const toggleShopMenuDesktop = () => setIsShopOpenDesktop(!isShopOpenDesktop);
    const toggleShopMenuMobile = () => setIsShopOpenMobile(!isShopOpenMobile);

    const handleClickOutside = (event) => {
        if (shopMenuRef.current && !shopMenuRef.current.contains(event.target)) {
            setIsShopOpenDesktop(false);
        }
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setIsShopOpenMobile(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, []);

    const closeAllMenus = () => {
        setIsShopOpenDesktop(false);
        setIsShopOpenMobile(false);
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    const CategorySection = ({ title, icon, items, isMobile = false }) => (
        <div className={`${isMobile ? 'w-full' : ''}`}>
            <div className="px-4 py-2 bg-gray-700 text-gray-200 font-semibold flex items-center space-x-2 border-b border-gray-600">
                <span className="text-lg">{icon}</span>
                <span>{title}</span>
            </div>
            <ul className={`${isMobile ? 'space-y-1' : ''} py-2`}>
                {items.map((item, index) => (
                    <li key={index} className="group">
                        <Link
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-300 transition-all duration-200"
                        >
                            <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg fixed w-full z-50">
                <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <div className="text-white text-3xl font-bold tracking-wide">
                        <Link href="/" onClick={closeAllMenus}>
                            <img
                                src={Data.favicon}
                                alt="CASAN.sv"
                                className="h-8 hover:opacity-80 transition-opacity duration-200"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" onClick={closeAllMenus}>
                            <span className="text-white hover:text-blue-400 transition duration-300">
                                Inicio
                            </span>
                        </Link>

                        <div className="relative" ref={shopMenuRef}>
                            <button
                                onClick={toggleShopMenuDesktop}
                                className="flex items-center text-white hover:text-blue-400 transition duration-300 focus:outline-none"
                            >
                                <span>Comprar en línea</span>
                                {isShopOpenDesktop ? (
                                    <FaChevronUp className="ml-2 transition-transform duration-200" />
                                ) : (
                                    <FaChevronDown className="ml-2 transition-transform duration-200" />
                                )}
                            </button>

                            {isShopOpenDesktop && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute right-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden divide-y divide-gray-700 border border-gray-600"
                                    style={{
                                        maxHeight: maxHeight,
                                        overflowY: 'auto',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#4B5563 #1F2937'
                                    }}
                                >
                                    {Object.entries(categories).map(([key, category]) => (
                                        <CategorySection key={key} {...category} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-400 transition duration-300 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:hidden bg-gray-900 max-h-[calc(100vh-5rem)] overflow-y-auto`}
                >
                    <div className="flex flex-col items-center py-4" ref={mobileMenuRef}>
                        <Link
                            href="/"
                            onClick={closeAllMenus}
                            className="w-full text-center py-2 text-white hover:bg-gray-800 transition duration-300"
                        >
                            Inicio
                        </Link>

                        <div className="w-full px-4 mt-4">
                            <button
                                onClick={toggleShopMenuMobile}
                                className="flex items-center justify-between w-full text-white hover:text-blue-400 transition duration-300 px-4 py-2 bg-gray-800 rounded-lg"
                            >
                                <span>Comprar en línea</span>
                                {isShopOpenMobile ? (
                                    <FaTimes className="ml-2" />
                                ) : (
                                    <FaChevronDown className="ml-2" />
                                )}
                            </button>

                            {isShopOpenMobile && (
                                <div className="mt-2 bg-gray-800 rounded-lg overflow-hidden divide-y divide-gray-700">
                                    {Object.entries(categories).map(([key, category]) => (
                                        <CategorySection key={key} {...category} isMobile />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-16"></div>
        </>
    );
}