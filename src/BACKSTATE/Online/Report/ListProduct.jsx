// src/app/BACKSTATE/Online/Report/ListProduct.jsx
"use client";
import React, { useState, useEffect } from "react";

export default function ListProduct() {
    const [searchName, setSearchName] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // Cantidad de productos visibles
    const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
    const [reportLink, setReportLink] = useState(""); // Enlace para el reporte

    // Lista de productos con nombre, imagen y enlace de reporte
    const productos = [
        /* {PRODUCTOS_REPORTES} */
    ];

    // Filtrar productos según el nombre buscado
    const filteredProducts = productos
        .filter((product) =>
            product.Nombre.toLowerCase().includes(searchName.toLowerCase())
        )
        .slice(0, visibleCount);

    useEffect(() => {
        if (selectedProduct) {
            setReportLink(selectedProduct.Enlace);
        }
    }, [selectedProduct]);

    const handleOpenReportLink = () => {
        if (reportLink) {
            window.open(reportLink, "_blank");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
                    Buscar Producto para Reportar
                </h1>

                {/* Barra de búsqueda y selector de cantidad de productos */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 max-w-3xl mx-auto">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Buscar por nombre de producto..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {searchName && (
                            <button
                                onClick={() => setSearchName("")}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div>
                        <label className="text-white font-bold mr-2">
                            Mostrar cantidad de productos:
                        </label>
                        <select
                            value={visibleCount}
                            onChange={(e) => setVisibleCount(Number(e.target.value))}
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg"
                        >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={48}>48</option>
                            <option value={96}>96</option>
                        </select>
                    </div>
                </div>

                {!searchName && (
                    <p className="text-center text-gray-400">
                        Escribe el nombre del producto para mostrar resultados
                    </p>
                )}

                {searchName && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 p-4 rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={product.Imagen}
                                            alt={product.Nombre}
                                            className="w-full h-48 object-contain mb-4"
                                        />
                                        <h3 className="text-xl font-bold mb-2">{product.Nombre}</h3>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedProduct(product);
                                                    setShowModal(true);
                                                }}
                                                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                                            >
                                                Reportar este producto
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-400 w-full">
                                    No se encontraron productos.
                                </p>
                            )}
                        </div>
                    </>
                )}

                {showModal && selectedProduct && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
                        <div className="bg-gray-900 rounded-lg shadow-lg w-full h-full sm:max-w-lg sm:h-auto p-6 sm:p-8 overflow-y-auto sm:overflow-visible text-center relative transition-all duration-300 ease-out">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Instrucciones para el reporte
                            </h2>

                            <div className="flex flex-col items-center mb-4 sm:mb-6">
                                <img
                                    src={selectedProduct.Imagen}
                                    alt={selectedProduct.Nombre}
                                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-3"
                                />
                                <h3 className="text-xl sm:text-2xl font-bold">{selectedProduct.Nombre}</h3>
                            </div>

                            <p className="text-gray-400 mb-4 sm:mb-6 px-2 sm:px-4">
                                Estás a punto de ser redireccionado a la guia oficial para obtener asistencia de un reporte formal de tu producto.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 text-left">
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">1. Prepárate</h3>
                                    <p className="text-gray-400 text-sm">
                                        Asegúrate de tener fotos claras del producto y del empaque.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">2. Sé claro</h3>
                                    <p className="text-gray-400 text-sm">
                                        Explica de manera detallada el problema con el producto.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">3. Documenta</h3>
                                    <p className="text-gray-400 text-sm">
                                        Si es posible, proporciona un recibo o comprobante de compra.
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <h3 className="font-bold text-white mb-1">4. Reporta a tiempo</h3>
                                    <p className="text-gray-400 text-sm">
                                        Es importante que el reporte se haga tan pronto como sea posible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg sm:mr-auto"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={handleOpenReportLink}
                                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg sm:ml-auto"
                                >
                                    Ver cómo realizar el reporte
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
