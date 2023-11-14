import Image from "next/image";
import localFont from "next/font/local";
import { Suspense } from "react";

import LogoModel from "@/app/home/LogoModel";
import bfos from "/public/beatsFromOuterSpace.png";
import wip from "/public/workInProgress.png";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

export default function Home() {
  return (
    <main className={rubik.className}>
      <div className="header grid grid-cols-6 w-full fixed">
        <div className="terrazzo-main col-span-6 bg-[url('../../public/BrightTerrazzoLess.png')] dark:bg-[url('../../public/TerrazzoLess.png')] min-h-[512px]"></div>
        <div className="terrazzo-end col-span-6 bg-[url('../../public/BrightTerrazzoLessEnd.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] h-[512px]"></div>
      </div>

      <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full mx-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]">
        <div
          id="three-logo"
          className="
          animate-fade-in-model transition ease-in-out duration-[0.8s]
          col-start-1 xl:col-start-5 col-span-full
          row-start-1 row-span-full
          h-xl xl:h-full"
        >
          <LogoModel />
        </div>
        <div
          id="main-card"
          className="
          animate-fade-in
          transition ease-in-out duration-500
          col-start-1 col-span-full xl:col-span-4
          row-start-1 xl:row-start-1 row-span-1
          mx-0 xs:mx-12 xl:mx-6 mt-6
          text-gray-800 dark:text-white text-center
          rounded-3xl  backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
          shadow-lg shadow-black/60"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-14 h-full w-full">
            <h1
              className={`${monomaniac.className} text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              DO∩ アントニオ
            </h1>
            <h2
              className={`${monomaniac.className} text-3xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              interactive
            </h2>
            <p className="text-gray-900 dark:text-white text-md pt-6">
              Welcome to DON interactive, the home of innovative and immersive
              media experiences. We are a team of passionate and creative
              developers, designers, and storytellers who love to create
              engaging and fun digital products. Whether it’s a game, an app, or
              a website, we have the skills and the vision to make it happen.
            </p>
          </div>
        </div>
        <div
          id="first-card"
          className="
          animate-fade-in
          transition ease-in-out duration-500
          col-start-1 col-span-full xl:col-span-2
          row-start-2 md:row-start-2 xl:row-start-2 row-span-1 md:row-span-2
          ml:0 xs:ml-12 xl:ml-6 mr-0 xs:mr-12 xl:mr-0 mb-0 xl:mb-6
          text-gray-800 dark:text-white text-center
          rounded-3xl
          backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
          shadow-lg shadow-black/60"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-6 w-full h-full">
            <div className="mx-auto mb-10 w-[128px] h-[128px] md:w-[256px] md:h-[256px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              <Image
                src={bfos}
                width={264}
                height={264}
                alt="Beats from Outer Space Game Icon"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-lg text-left font-bold uppercase">
              Beats form <br /> Outer Space
            </h1>
            <p className="text-md text-left pt-2 pb-4">
              Hello there, Terrarians! I am your mysterious radio host,
              Midnight, and I have a story to share with you. It is the tale of
              a brave space hero, who pilots the magnificent Vapor Falcon in a
              battle against the body snatching aliens from outer space.
            </p>
            <form action="/bfos">
              <input
                className="
                  text-lg text-gray-800 dark:text-white hover:text-black
                  w-1/2 p-2 rounded-3xl
                  scale-100 hover:scale-105 transform
                  transition duration-300
                  bg-gradient-to-tr
                  from-teal-500 via-indigo-500 to-rose-500
                  hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                  shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
                type="submit"
                value="more..."
              />
            </form>
          </div>
        </div>
        <div
          id="second-card"
          className="
          animate-fade-in
          transition ease-in-out duration-500
          col-start-1 xl:col-start-3 col-span-full xl:col-span-2
          row-start-3 md:row-start-4 xl:row-start-2 row-span-1 md:row-span-2
          ml:0 xs:ml-12 xl:ml-0 mr-0 xs:mr-12 xl:mr-6 mb-6
          text-gray-800 dark:text-white text-center
          rounded-3xl 
          backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
          shadow-lg shadow-black/60"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-6 w-full h-full items-center">
            <div className="mx-auto mb-10 w-[128px] h-[128px] md:w-[256px] md:h-[256px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              <div className=" shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] rounded-2xl backdrop-brightness-50 dark:backdrop-brightness-[0.2] backdrop-blur-2xl">
                <Image
                  src={wip}
                  width={264}
                  height={264}
                  alt="Work in Progress Icon"
                  className="rounded-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
            <h1 className="text-lg text-left font-bold uppercase">
              Work in <br /> progress
            </h1>
            <p className="text-md text-left py-4">
              There will be more to come soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
