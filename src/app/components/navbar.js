'use client'

import { React, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useRef } from "react";

const logo = "/logo.png";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

const links = [
  { href: "/", label: "home" },
  { href: "/bfos", label: "bfos" },
  { href: "/fusion", label: "fusion" },
  { href: "/gdpr", label: "gdpr" },
];

export default function Navbar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <nav
      ref={navRef}
      className={`${rubik.className} fixed w-full z-20 top-0 left-0 min-w-[318px]`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top bar — backdrop-filter is scoped here so the dropdown below can have its own */}
      <div className="max-w-screen-full h-14 vetro-glass flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center hover:cursor-pointer" aria-label="Go to homepage">
          <Image
            src={logo}
            className="h-8 mr-3"
            alt="DON interactive Logo"
            width={32}
            height={32}
            priority
          />
          <span
            className={`${monomaniac.className} self-center text-gray-800 text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap dark:text-white`}
          >
            DO∩ アントニオ
          </span>
        </Link>
        <div className="flex items-center md:order-2 gap-8">
          {/* Desktop links — inline in the bar */}
          <ul className="hidden md:flex md:flex-row md:space-x-8 font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="uppercase hover:cursor-pointer block py-2 text-gray-900 md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-400 dark:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden={!isVisible}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — sibling to the bar, NOT inside a backdrop-filter ancestor */}
      <div
        id="navbar-dropdown"
        className={`${isVisible ? 'block' : 'hidden'} md:hidden`}
      >
        <ul className="flex flex-col p-4 font-medium vetro-glass rounded-b-xl">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsVisible(false)}
                className="uppercase hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
