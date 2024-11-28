"use client";
import React, { useState } from 'react';



export default function FAQs() {
    const faqs_online = [
        {
            question: "¿Es seguro comprar en CASAN Promo Center?",
            answer: "Sí, CASAN Promo Center es completamente seguro. Todos los pagos se realizan directamente en las tiendas afiliadas, redirigiéndote a tu cuenta para mayor seguridad.",
        },
        {
            question: "¿Puedo rastrear mi pedido?",
            answer: "Sí, una vez que completes la compra podrás rastrear tu pedido desde tu cuenta en la tienda afiliada como lo haces normalmente.",
        },
        {
            question: "¿Ofrecen productos originales?",
            answer: "Absolutamente. Todos los productos en CASAN Promo Center provienen de proveedores certificados en las tiendas afiliadas.",
        },
        {
            question: "¿Qué pasa si mi producto no llega?",
            answer: "CASAN Promo Center incluye una sección diseñada para ayudarte en este tipo de situaciones. Al final de la página encontrarás el botón 'Problemas con producto recibido', el cual te ofrece una guía personalizada para gestionar cualquier inconveniente directamente desde tu cuenta en las tiendas afiliadas.",
        },
        {
            question: "¿Necesito crear una cuenta en CASAN Promo Center?",
            answer: "No es necesario. Puedes navegar los productos directamente y serás redirigido a la tienda afiliada para completar tu compra. Somos intermediario ideal para los cazadores de ofertas.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-900 text-white py-16 px-6 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                    Preguntas Frecuentes
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    Sobre las compras en línea:
                </p>
                <div className="space-y-6">
                    {faqs_online.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h3 className="text-lg lg:text-xl font-semibold">
                                    {faq.question}
                                </h3>
                                <span className="text-gray-400">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-2 text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
