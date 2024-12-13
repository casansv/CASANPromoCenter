// src\app\layout.js
import React from "react";
import Head from "next/head";

import "./globals.css";
import Data from "./sconstants.json";

import Navigation from "./home/Navigation";
import Footer from "./home/Footer";



// Metadata para sitio
export const metadata = {
  title: "Con las mejores ofertas 🔥 | CASAN Promo Center",
  description:
    "Descubre la mejor selección en Smartphones, Tablets, Laptops de alto rendimiento, Hogar Inteligente, y más. También ofrecemos lo último en Moda masculina y femenina, Lencería, accesorios para el hogar, salud, mascotas, y vehículos. ¡Calidad, innovación y estilo en un solo lugar! 🛒✨",
  keywords:
    "ofertas, productos para revender, hogar inteligente, smartphones, laptops, moda masculina, moda femenina, accesorios para mascotas, salud y belleza, repuestos para autos, lencería femenina, lencería masculina, herramientas para el hogar, CASAN Promo Center, compras al por mayor, tienda para emprendedores",
  icons: {
    icon: Data.favicon,
  },
  openGraph: {
    title: "Con las mejores ofertas 🔥 | CASAN Promo Center",
    description:
      "Descubre la mejor selección en Smartphones, Tablets, Laptops de alto rendimiento, Hogar Inteligente, y más. También ofrecemos lo último en Moda masculina y femenina, Lencería, accesorios para el hogar, salud, mascotas, y vehículos. ¡Calidad, innovación y estilo en un solo lugar! 🛒✨",
    url: "https://casanpromocenter.vercel.app/",
    type: "website",
    images: [
      {
        url: Data.favicon,
        width: 1024,
        height: 1024,
        alt: "CASAN Promo Center",
      },
    ],
    site_name: "CASAN Promo Center",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CASAN Promo Center",
    title: "Con las mejores ofertas 🔥 | CASAN Promo Center",
    description:
      "Descubre la mejor selección en Smartphones, Tablets, Laptops de alto rendimiento, Hogar Inteligente, y más. También ofrecemos lo último en Moda masculina y femenina, Lencería, accesorios para el hogar, salud, mascotas, y vehículos. ¡Calidad, innovación y estilo en un solo lugar! 🛒✨",
    image: Data.favicon,
  },
  robots: "index, follow",
  canonical: "https://casanpromocenter.vercel.app/",
  other: {
    "google-site-verification":"V67iJIMQ4huEnaT_QKtv42c8xnYxlYhQRtjztO342wk",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta
          name="google-site-verification"
          content="V67iJIMQ4huEnaT_QKtv42c8xnYxlYhQRtjztO342wk"
        />
      </Head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
