import Navbar from "./components/navbar";
import StructuredData from "./components/StructuredData";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "DON アントニオ",
  description:
    "DON アントニオ interactive home page. Everything about retro esthetics, games, web development and more.",
  keywords: "interactive design, retro gaming, web development, portfolio, games, fusion impossible, beats from outer space",
  author: "DON アントニオ",
  openGraph: {
    title: "DON アントニオ - Interactive Portfolio",
    description: "Interactive portfolio showcasing retro gaming aesthetics, web development, and creative projects",
    type: "website",
    url: "https://don-interactive.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DON アントニオ - Interactive Portfolio",
    description: "Interactive portfolio showcasing retro gaming aesthetics, web development, and creative projects",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://don-interactive.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <StructuredData type="website" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
