'use client'

import {React, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import logo from "/public/logo.png";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

export default function Navbar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav
      className={`${rubik.className} backdrop-blur-xl backdrop-brightness-150 dark:backdrop-brightness-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div className="max-w-screen-xl h-12 backdrop-blur-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a onClick={() => router.push("/")} className="flex items-center hover:cursor-pointer">
          <Image
            src={logo}
            height={32}
            width={32}
            className="h-8 mr-3"
            alt="DON interactive Logo"
          />
          <span
            className={`${monomaniac.className} self-center text-gray-800 text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap dark:text-white`}
          >
            DO∩ アントニオ
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => router.push("/bfos")}
            className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-4 py-2 text-center mr-3 md:mr-0 hidden md:block dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            what is new?
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
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
        <div
          className={`${isVisible ? 'visible' : 'invisible'} items-center justify-between w-full  md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-0 font-medium border border-gray-100 rounded-lg backdrop-blur-xl backdrop-brightness-150 dark:backdrop-brightness-50 md:backdrop-blur-0 md:backdrop-brightness-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                onClick={() => router.push("/")}
                className="uppercase hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                home
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/bfos")}
                className="uppercase hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                bfos
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/gdpr")}
                className="uppercase hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                gdpr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
