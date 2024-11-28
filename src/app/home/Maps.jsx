// src\app\home\Maps.jsx
"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Cargar Leaflet dinámicamente en el lado del cliente
const MapContainerNoSSR = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), {
    ssr: false,
});
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), {
    ssr: false,
});
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), {
    ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), {
    ssr: false,
});

// Datos GeoJSON para los países (ejemplo reducido de coordenadas)
const countries = [
    /* América */
    { name: "United States", lat: 37.0902, lon: -95.7129 },
    { name: "Canada", lat: 56.1304, lon: -106.3468 },
    { name: "Mexico", lat: 23.6345, lon: -102.5528 },
    { name: "Brazil", lat: -14.2350, lon: -51.9253 },
    { name: "Chile", lat: -35.6751, lon: -71.5430 },
    { name: "Colombia", lat: 4.5709, lon: -74.2973 },
    { name: "Peru", lat: -9.1900, lon: -75.0152 },
    { name: "Argentina", lat: -38.4161, lon: -63.6167 },
    { name: "Bolivia", lat: -16.2902, lon: -63.5887 },
    { name: "Venezuela", lat: 6.4238, lon: -66.5897 },
    { name: "Ecuador", lat: -1.8312, lon: -78.1834 },
    { name: "Paraguay", lat: -23.4425, lon: -58.4438 },
    { name: "Uruguay", lat: -32.5228, lon: -55.7658 },
    { name: "Guyana", lat: 4.8604, lon: -58.9302 },
    { name: "Suriname", lat: 3.9193, lon: -56.0278 },
    { name: "French Guiana", lat: 3.9339, lon: -53.1258 },
    { name: "Panama", lat: 8.5380, lon: -80.7821 },
    { name: "Costa Rica", lat: 9.7489, lon: -83.7534 },
    { name: "Nicaragua", lat: 12.8654, lon: -85.2072 },
    { name: "Honduras", lat: 15.1999, lon: -86.2419 },
    { name: "El Salvador", lat: 13.7942, lon: -88.8965 },
    { name: "Guatemala", lat: 15.7835, lon: -90.2308 },
    { name: "Belize", lat: 17.1899, lon: -88.4976 },

    /* Europa */
    { name: "United Kingdom", lat: 55.3781, lon: -3.4360 },
    { name: "Germany", lat: 51.1657, lon: 10.4515 },
    { name: "France", lat: 46.2276, lon: 2.2137 },
    { name: "Italy", lat: 41.8719, lon: 12.5674 },
    { name: "Spain", lat: 40.4637, lon: -3.7492 },
    { name: "Portugal", lat: 39.3999, lon: -8.2245 },
    { name: "Ireland", lat: 53.1424, lon: -7.6921 },
    { name: "Netherlands", lat: 52.1326, lon: 5.2913 },
    { name: "Belgium", lat: 50.8503, lon: 4.3517 },
    { name: "Switzerland", lat: 46.8182, lon: 8.2275 },
    { name: "Austria", lat: 47.5162, lon: 14.5501 },
    { name: "Sweden", lat: 60.1282, lon: 18.6435 },
    { name: "Norway", lat: 60.4720, lon: 8.4689 },
    { name: "Denmark", lat: 56.2639, lon: 9.5018 },
    { name: "Finland", lat: 61.9241, lon: 25.7482 },
    { name: "Iceland", lat: 64.9631, lon: -19.0208 },
    { name: "Poland", lat: 51.9194, lon: 19.1451 },
    { name: "Romania", lat: 45.9432, lon: 24.9668 },
    { name: "Ukraine", lat: 48.3794, lon: 31.1656 },
    { name: "Greece", lat: 39.0742, lon: 21.8243 },
    { name: "Hungary", lat: 47.1625, lon: 19.5033 },
    { name: "Czech Republic", lat: 49.8175, lon: 15.4730 },
    { name: "Slovakia", lat: 48.6690, lon: 19.6990 },
    { name: "Bulgaria", lat: 42.7339, lon: 25.4858 },
    { name: "Croatia", lat: 45.1000, lon: 15.2000 },
    { name: "Serbia", lat: 44.0165, lon: 21.0059 },
    { name: "Slovenia", lat: 46.1512, lon: 14.9955 },
    { name: "Estonia", lat: 58.5953, lon: 25.0136 },
    { name: "Latvia", lat: 56.8796, lon: 24.6032 },
    { name: "Lithuania", lat: 55.1694, lon: 23.8813 },
    { name: "Albania", lat: 41.1533, lon: 20.1683 },
    { name: "Moldova", lat: 47.4116, lon: 28.3699 },
    { name: "Macedonia", lat: 41.6086, lon: 21.7453 },
    { name: "Bosnia and Herzegovina", lat: 43.9159, lon: 17.6791 },
    { name: "Montenegro", lat: 42.7087, lon: 19.3744 },
    { name: "Luxembourg", lat: 49.8153, lon: 6.1296 },
    { name: "Malta", lat: 35.9375, lon: 14.3754 },
    { name: "Cyprus", lat: 35.1264, lon: 33.4299 },
    { name: "Monaco", lat: 43.7384, lon: 7.4246 },
    { name: "Liechtenstein", lat: 47.1660, lon: 9.5554 },
    { name: "San Marino", lat: 43.9424, lon: 12.4578 },
    { name: "Vatican City", lat: 41.9029, lon: 12.4534 },
    { name: "Andorra", lat: 42.5063, lon: 1.5218 },

    /* Oceanía */
    { name: "Australia", lat: -25.2744, lon: 133.7751 },
    { name: "New Zealand", lat: -40.9006, lon: 174.8860 },
    { name: "Papua New Guinea", lat: -6.314993, lon: 143.95555 },
    { name: "Fiji", lat: -17.713371, lon: 178.065032 },
    { name: "Solomon Islands", lat: -9.6457, lon: 160.1562 },
    { name: "Vanuatu", lat: -15.3767, lon: 166.9592 },
    { name: "New Caledonia", lat: -20.9043, lon: 165.6180 },
    { name: "French Polynesia", lat: -17.6797, lon: -149.4068 },
    { name: "Samoa", lat: -13.7590, lon: -172.1046 },
    { name: "Tonga", lat: -21.1789, lon: -175.1982 },
    { name: "Micronesia", lat: 7.4256, lon: 150.5508 },
    { name: "Palau", lat: 7.5150, lon: 134.5825 },
    { name: "Marshall Islands", lat: 7.1315, lon: 171.1845 },
    { name: "Kiribati", lat: -3.3704, lon: -168.7340 }
];

// Configuración del icono personalizado para Leaflet (camión de entrega 🚚)
const thumbUpIcon = new L.DivIcon({
    className: "custom-icon",
    html: "<span style='font-size: 24px;'>🚚</span>",
});

export default function Maps() {
    const [isMounted, setIsMounted] = useState(false);

    // Asegurarse de que el componente esté montado en el cliente
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // No renderiza nada en el servidor
    }

    return (
        <React.Fragment>
            {/* Div contenedor que centra el mapa */}
            <div className="flex flex-col justify-center items-center h-screen bg-gray-900">

                {/* Título responsive, encima del mapa */}
                <div className="text-center mb-4 mt-8 px-4">
                    <div className="flex justify-center items-center space-x-2">
                        <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                            ¿Envío hasta donde vivo?
                        </h2>
                        {/* Gif a poner al lado */}
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6b2/512.gif"
                            alt="🚲"
                            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                        />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        Por supuesto, se hacen envíos a todos estos paises:
                    </p>
                </div>

                {/* Mapa con proporción 16:9, z-index bajo */}
                <div className="relative w-full max-w-4xl h-auto aspect-video border-2 border-gray-600 rounded-lg shadow-lg z-0">
                    <MapContainerNoSSR center={[20, 0]} zoom={3} scrollWheelZoom={false} className="h-full w-full">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* Marcadores de camión de entrega 🚚 en cada país */}
                        {countries.map((country, idx) => (
                            <Marker
                                key={idx}
                                position={[country.lat, country.lon]}
                                icon={thumbUpIcon}
                            >
                                <Popup>
                                    {country.name}: Disponible para envío
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainerNoSSR>
                </div>
            </div>
        </React.Fragment>
    );
}
