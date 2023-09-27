"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";

import BfosModel from "@/app/bfos/BfosModel";
import bfos from "/public/beatsFromOuterSpace.png";
import appStoreButton from "public/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import playStoreButton from "public/google-play-badge.png";
import githubButton from "public/github-mark-white.svg";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

export default function Home() {
  useEffect(() => {
    const elements = [
      document.getElementById("first-card"),
      document.getElementById("three-logo"),
    ];

    elements.forEach((element) => {
      element.classList.remove("-translate-x-96", "opacity-0");
      element.classList.add("opacity-100");
    });
  });

  return (
    <main className={`${rubik.className}`}>
      <div className="header grid grid-cols-6 w-full fixed">
        <div className="terrazzo-main col-span-6 bg-[url('../../public/BrightTerrazzoLess.png')] dark:bg-[url('../../public/TerrazzoLess.png')] min-h-[512px]"></div>
        <div className="terrazzo-end col-span-6 bg-[url('../../public/BrightTerrazzoLessEnd.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] h-[512px]"></div>
      </div>
      <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full m-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]">
        <div
          id="three-logo"
          className="
          opacity-0 transition-opacity ease-in-out duration-[0.8s]
          col-start-1 xl:col-start-5 col-span-full
          row-start-1 row-span-3
          h-xl xl:h-full"
        >
          <BfosModel />
        </div>
        <div
          id="first-card"
          className="
          opacity-0 -translate-x-96 transition ease-in-out duration-500
          col-start-1 col-span-full xl:col-span-4
          row-start-1 md:row-start-1 xl:row-start-1 row-span-2 md:row-span-3
          m-4 xl:m-6
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
            <h1 className="text-xl text-center font-bold uppercase">
              Beats form <br /> Outer Space
            </h1>
            <br />
            <p className="text-md text-left pt-2 pb-4">
              Hello there, Terrarians! I am your mysterious radio host,
              Midnight, and I have a story to share with you. It is the tale of
              a brave space hero, who pilots the magnificent Vapor Falcon in a
              battle against the body snatching aliens from outer space.
              <br />
              <br />
              As you may know, the aliens have set their sights on Terra, our
              beloved home planet. They want to take over our bodies and use us
              as their own personal puppets. But our hero, with the help of the
              Vapor Falcon, is determined to stop them at all costs.
              <br />
              <br />
              Our hero will face many challenges and obstacles. They must
              navigate through treacherous asteroid fields, dodge laser blasts
              from enemy ships, and outsmart the cunning alien invaders. But
              with their quick reflexes and sharp shooting skills, our hero is
              more than capable of taking on whatever comes their way.
              <br />
              <br />
              In the end, it all comes down to a final showdown between the
              Vapor Falcon and the Mother Ship of the alien invaders. Will our
              hero be able to save Terra and protect the human race from being
              enslaved? Tune in to find out! Until then, stay safe out there and
              keep your eyes peeled for any signs of the menacing aliens.
              <br />
              <br />
              This is Midnight signing off.
            </p>
            <form action="https://github.com/lombardi-antonio/beats-from-outer-space">
              <button
                type="submit"
                className="text-center text-white hover:text-black
                scale-100 hover:scale-105 transform
                transition duration-300 bg-gradient-to-tr
                from-teal-500 via-indigo-500 to-rose-500
                hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                  font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                View in Github
              </button>
            </form>
            <p className="p-10 text-xl">coming soon...</p>
            <form action="">
              <button
                className="
                  w-1/3
                  scale-100 hover:scale-105 transform
                  transition duration-300"
                type="submit"
                disabled
              >
                <Image
                  src={playStoreButton}
                  height={264}
                  alt="Google Play Store Button"
                  className="opacity-[0.05]"
                />
              </button>
            </form>
            <form action="">
              <button
                className="
                  w-1/3
                  scale-100 hover:scale-105 transform
                  transition duration-300"
                type="submit"
                disabled
              >
                <Image
                  src={appStoreButton}
                  height={264}
                  alt="Apple App Store Button"
                  className="opacity-[0.05]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
