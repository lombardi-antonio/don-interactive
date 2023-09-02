import Image from "next/image";
import localFont from "next/font/local";
import LogoModel from "@/app/home/LogoModel";

import bfos from "../../../public/BeatsFromOuterSpace.png";
import wip from "../../../public/workInProgress.png";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

export default async function Home() {
  return (
    <main className={rubik.className}>
      <div className="header grid grid-cols-6 absolute w-full">
        <div className="terrazzo-main col-span-6 bg-[url('./assets/TerrazzoLess.png')] min-h-[512px]"></div>
        <div className="terrazzo-end col-span-6 bg-[url('./assets/TerrazzoLessEnd.png')] h-[512px]"></div>
      </div>
      <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full m-auto max-w-full lg:max-w-[920px] xl:max-w-[1080px] 2xl:max-w-[2160px]">
        <div className="col-start-1 2xl:col-start-5 col-span-full row-start-1 row-span-full">
          <LogoModel />
        </div>
        <div className="col-start-1 col-span-full 2xl:col-span-4 row-start-1 row-span-1 mx-12 2xl:mx-6 mt-6 text-white text-center rounded-3xl border-2 border-black backdrop-brightness-75 backdrop-blur-2xl shadow-xl">
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-14 h-full w-full">
            <h1 className={`${monomaniac.className} text-7xl font-bold`}>
              DO∩ アントニオ
            </h1>
            <h2 className={`${monomaniac.className} text-5xl`}>interactive</h2>
            <p className="text-xl pt-6">
              Welcome to DON interactive, the home of innovative and immersive
              media experiences. We are a team of passionate and creative
              developers, designers, and storytellers who love to create
              engaging and fun digital products. Whether it’s a game, an app, or
              a website, we have the skills and the vision to make it happen.
            </p>
          </div>
        </div>
        <div
          className="
          col-start-1 col-span-full 2xl:col-span-2
          row-start-2 md:row-start-2 row-span-1 md:row-span-2
          ml-12 2xl:ml-6 mr-12 2xl:mr-0 mb-0 2xl:mb-6
          text-white text-center
          rounded-3xl border-2 border-black
          backdrop-brightness-75 backdrop-blur-2xl
          shadow-xl"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-12 w-full h-full">
            <div className="mx-auto mb-10 w-[132px] h-[132px] md:w-[264px] md:h-[264px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 shadow-xl">
              <Image
                src={bfos}
                width={264}
                height={264}
                alt="Beats from Outer Space Game Icon"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-3xl font-bold uppercase">
              Beats form <br /> Outer Space
            </h1>
            <p className="text-xl py-4">
              Hello there, Terrarians! I am your mysterious radio host,
              Midnight, and I have a story to share with you. It is the tale of
              a brave space hero, who pilots the magnificent Vapor Falcon in a
              battle against the body snatching aliens from outer space.
            </p>
            <form action="https://github.com/lombardi-antonio/beats-from-outer-space">
              <input
                className="
                  text-xl text-white hover:text-black
                  w-1/2 p-2 rounded-3xl
                  scale-100 hover:scale-105 transform
                  transition duration-300
                  bg-gradient-to-tr
                  from-teal-500 via-indigo-500 to-rose-500
                  hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                  shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
                type="submit"
                value="more..." />
            </form>
          </div>
        </div>
        <div
          className="
          col-start-1 2xl:col-start-3 col-span-full 2xl:col-span-2
          row-start-3 md:row-start-4 2xl:row-start-2 row-span-1 md:row-span-2
          ml-12 2xl:ml-0 mr-12 2xl:mr-6 mb-6
          text-white text-center
          rounded-3xl border-2 border-black
          backdrop-brightness-75 backdrop-blur-2xl
          shadow-xl"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-12 w-full h-full items-center">
            <div className="mx-auto mb-10 w-[132px] h-[132px] md:w-[264px] md:h-[264px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 shadow-xl">
              <Image
                src={wip}
                width={264}
                height={264}
                alt="Work in Progress Icon"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-3xl font-bold uppercase">
              Work in <br /> progress
            </h1>
            <p className="text-xl py-4">
              There will be more to come soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
