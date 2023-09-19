import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DON アントニオ",
  description:
    "DON アントニオ interactive home page. Everything about retro esthetics, games, web development and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <br />
        <br />
        {children}
      </body>
    </html>
  );
}
