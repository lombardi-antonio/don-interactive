"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

import bfos from "/public/beatsFromOuterSpace.png";
import moneyPenny from "/public/moneyPenny.png";
import Card from "../components/vetro/Card";
import githubGlyph from "/public/githubMarkWhite.svg";
import redditGlyph from "/public/redditGlyph.svg";
import instagramGlyph from "/public/instagramGlyph.svg";
import bgElement00 from "/public/bgElement00.svg";
import bgElement01 from "/public/bgElement01.svg";
import bgElement02 from "/public/bgElement02.svg";
import bgElement03 from "/public/bgElement03.svg";
import bgElement04 from "/public/bgElement04.svg";
import grainy from "@/app/components/grainy/noise.svg";

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  fontFamily: "Rubik",
});

const images = require.context("/public/logo-frames/", true);
const logoAnimated = images.keys().map((image) => images(image).default);

export default function Home() {
  let [currentImage, setCurrentImage] = useState(0);

  document.addEventListener("keydown", (keyEvent) => {
    if (
      keyEvent.key.toLowerCase() === "j"
    ) {navigateTo}
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage++ % logoAnimated.length);
    }, 42)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div
        className={`absolute h-auto min-h-screen w-full bg-repeat bg-[linear-gradient(0deg, rgba(255,255,255,.9), rgba(255,255,255,.9)),url(${grainy.src})] dark:bg-[linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.9)),url(${grainy.src})]`}
      >
        <div
          className={`h-auto min-h-screen bg-[url('../../public/grid.png')] bg-repeat`}
        >
          <div className="header fixed grid w-full grid-cols-6 blur-[200px]">
            <div className="terrazzo-main col-span-6 min-h-[512px] w-full animate-[spin_14s_linear_infinite]">
              <Image priority={true} src={bgElement00} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_18s_linear_infinite]">
              <Image priority={true} src={bgElement01} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image priority={true} src={bgElement02} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_12s_linear_infinite]">
              <Image priority={true} src={bgElement03} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[0] w-full animate-[spin_10s_linear_infinite]">
              <Image priority={true} src={bgElement04} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main right-50 absolute top-20 col-span-6 h-0 w-full animate-[spin_16s_linear_infinite]">
              <Image priority={true}
                src={bgElement00}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end absolute right-10 top-20 col-span-6 h-0 w-full animate-[spin_22s_linear_infinite]">
              <Image priority={true}
                src={bgElement01}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-main absolute left-10 top-4 col-span-6 h-0 w-full animate-[spin_12s_linear_infinite]">
              <Image priority={true}
                src={bgElement02}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end top-50 right-30 absolute col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image priority={true}
                src={bgElement03}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="main-card relative m-auto grid h-full auto-cols-fr auto-rows-fr grid-cols-7 gap-6 px-4 lg:max-w-[920px] xl:max-w-[2160px]">
            <div className="col-span-full col-start-1 row-span-1 row-start-2 md:row-span-3 md:row-start-1 xl:col-start-5 xl:h-full mx-auto">
              {logoAnimated.map((image, index) => (
                <Image priority={true}
                  key={index}
                  src={image}
                  alt="DON Interactive Logo"
                  className={`'my-auto h-[70%] md:h-[50%] 2xl:h-[70%] object-cover transition duration-300 ease-in-out' ${currentImage === index ? "block" : "hidden"}`}
                />
              ))}
            </div>
            <div className="xs:mx-12 col-span-full col-start-1 row-span-1 row-start-1 mx-0 mt-6 xl:col-span-4 xl:mx-6">
              <Card header="DO∩ アントニオ" subheader="interactive">
                Welcome to DON interactive, the home of innovative and immersive
                media experiences. We are a team of passionate and creative
                developers, designers, and storytellers who love to create
                engaging and fun digital products. Whether it’s a game, an app,
                or a website, we have the skills and the vision to make it
                happen.
                <br />
                <br />
                Consider following us on:
                <br />
                <br />
                <div className="flex flex-row justify-center space-x-2">
                  <form
                    action="https://www.instagram.com/don_interactive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="mb-2 mr-2 inline-flex scale-100 transform items-center rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:scale-105 hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300 focus:scale-105 focus:from-teal-300 focus:via-indigo-300 focus:to-rose-300"
                    >
                      <Image priority={true}
                        src={instagramGlyph}
                        alt="Instagram Glyph"
                        height={24}
                        width={24}
                        className="xs:-ml-2 xs:mr-2"
                      />
                      <p className="xs:inline hidden">Instagram</p>
                    </button>
                  </form>
                  <form
                    action="https://github.com/lombardi-antonio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="mb-2 focus:ring-6 focus:ring-emerald-500 mr-2 inline-flex scale-100 transform items-center rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:scale-105 hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300 focus:scale-105 focus:from-teal-300 focus:via-indigo-300 focus:to-rose-300"
                    >
                      <Image priority={true}
                        src={githubGlyph}
                        alt="Github Glyph"
                        height={24}
                        width={24}
                        className="xs:-ml-2 xs:mr-2"
                      />
                      <p className="xs:inline hidden">Github</p>
                    </button>
                  </form>
                  <form
                    action="https://www.reddit.com/r/don_interactive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="mb-2 focus:ring-6 focus:ring-emerald-500 mr-2 inline-flex scale-100 transform items-center rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:scale-105 hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300 focus:scale-105 focus:from-teal-300 focus:via-indigo-300 focus:to-rose-300"
                    >
                      <Image priority={true}
                        src={redditGlyph}
                        alt="Reddit Glyph"
                        height={24}
                        width={24}
                        className="xs:-ml-2 xs:mr-2"
                      />
                      <p className="xs:inline hidden">Reddit</p>
                    </button>
                  </form>
                </div>
              </Card>
            </div>
            <div className="ml:0 xs:ml-12 xs:mr-12 col-span-full col-start-1 row-span-1 row-start-4 mb-6 mr-0 md:row-span-2 md:row-start-4 xl:col-span-2 xl:col-start-3 xl:row-start-2 xl:mb-0 xl:ml-0 xl:mr-6">
              <Card
                appImageSrc={bfos}
                header="Beats from Outer Space"
                textPosition="left"
                linkButtonUrl="/bfos"
              >
                Hello there, Terrarians! I am your mysterious radio host,
                Midnight, and I have a story to share with you. It is the tale
                of a brave space hero, who pilots the magnificent Vapor Falcon
                in a battle against the body snatching aliens from outer space.
              </Card>
            </div>
            <div className="ml:0 xs:ml-12 xs:mr-12 col-span-full col-start-1 row-span-1 row-start-3 mb-0 mr-0 md:row-span-2 md:row-start-2 xl:col-span-2 xl:col-start-1 xl:row-start-2 xl:ml-6 xl:mr-0">
              <Card
                appImageSrc={moneyPenny}
                header="Money Penny"
                textPosition="left"
                linkButtonUrl="/money-penny"
              >
                <p>
                  Money Penny ist deine persönliche Finanzbewertungs-App, die
                  dir dabei hilft, deine Finanzen intelligent und mühelos zu
                  organisieren.
                </p>
                <br />
                <p>
                  Money Penny fragt dich nach deinem aktuellen Finanzstatus ab
                  und erstellt dir einen Finanzbericht, der dir hilft, deine
                  Finanzen zu verstehen und zu verbessern.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
