import Image from "next/image";
import localFont from "next/font/local";
import { Suspense } from "react";

import LogoModel from "@/app/home/LogoModel";
import bfos from "/public/beatsFromOuterSpace.png";
import moneyPenny from "/public/moneyPenny.png";
import wip from "/public/workInProgress.png";
import Card from "../components/vetro/Card";
import githubGlyph from "/public/githubMarkWhite.svg";
import redditGlyph from "/public/redditGlyph.svg";
import instagramGlyph from "/public/instagramGlyph.svg";
import bgElement00 from "/public/bgElement00.svg";
import bgElement01 from "/public/bgElement01.svg";
import bgElement02 from "/public/bgElement02.svg";
import bgElement03 from "/public/bgElement03.svg";


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
    <main>
      <div className={`${rubik.className} absolute w-full h-auto min-h-screen bg-repeat bg-[url('../../public/grid.png')]`}>
        <div className="header grid grid-cols-6 w-full fixed blur-[200px]">
          <div className="terrazzo-main col-span-6 min-h-[512px] w-full animate-[spin_14s_linear_infinite]">
            <Image src={bgElement00} alt="Terrazzo Background"/>
          </div>
          <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_18s_linear_infinite]">
            <Image src={bgElement01} alt="Terrazzo Background" />
          </div>
          <div className="terrazzo-main col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
            <Image src={bgElement02} alt="Terrazzo Background"/>
          </div>
          <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_12s_linear_infinite]">
            <Image src={bgElement03} alt="Terrazzo Background"/>
          </div>
          <div className="terrazzo-main col-span-6 absolute top-20 right-50 h-0 w-full animate-[spin_16s_linear_infinite]">
            <Image src={bgElement00} alt="Terrazzo Background" height={500} width={500}/>
          </div>
          <div className="terrazzo-end col-span-6 absolute top-20 right-10 h-0 w-full animate-[spin_22s_linear_infinite]">
            <Image src={bgElement01} alt="Terrazzo Background" height={500} width={500} />
          </div>
          <div className="terrazzo-main col-span-6 absolute top-4 left-10 h-0 w-full animate-[spin_12s_linear_infinite]">
            <Image src={bgElement02} alt="Terrazzo Background" height={500} width={500}/>
          </div>
          <div className="terrazzo-end col-span-6 absolute top-50 right-30 h-0 w-full animate-[spin_10s_linear_infinite]">
            <Image src={bgElement03} alt="Terrazzo Background" height={500} width={500}/>
          </div>
        </div>

        <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full mx-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]">
          <div
            id="three-logo"
            className="
            animate-fade-in-model transition ease-in-out duration-[0.8s]
            col-start-1 xl:col-start-5 col-span-full
            row-start-2 row-span-1 md:row-start-1 md:row-span-full
            h-[400px] md:h-auto md:mt-0 xl:h-full"
          >
            <LogoModel />
          </div>
          <div className="col-start-1 col-span-full xl:col-span-4
            row-start-1 row-span-1 mx-0 xs:mx-12 xl:mx-6 mt-6">
            <Card header="DO∩ アントニオ" subheader="interactive">
              Welcome to DON interactive, the home of innovative and immersive
              media experiences. We are a team of passionate and creative
              developers, designers, and storytellers who love to create
              engaging and fun digital products. Whether it’s a game, an app, or
              a website, we have the skills and the vision to make it happen.
              <br />
              <br />
              Consider following us on:
              <br />
              <br />
              <div className="flex flex-row space-x-2 justify-center">
                <form action="https://www.instagram.com/don_interactive" target="_blank" rel="noopener noreferrer">
                  <button
                    type="submit"
                    className="text-center text-white hover:text-black
                    scale-100 hover:scale-105 transform
                    transition duration-300 bg-gradient-to-tr
                    from-teal-500 via-indigo-500 to-rose-500
                    hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                      font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
                  >
                    <Image src={instagramGlyph} alt="Instagram Glyph" height={24} width={24} className="mr-2 -ml-2" />
                    Instagram
                  </button>
                </form>
                <form action="https://github.com/lombardi-antonio" target="_blank" rel="noopener noreferrer">
                  <button
                    type="submit"
                    className="text-center text-white hover:text-black
                    scale-100 hover:scale-105 transform
                    transition duration-300 bg-gradient-to-tr
                    from-teal-500 via-indigo-500 to-rose-500
                    hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                      font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
                  >
                    <Image src={githubGlyph} alt="Github Glyph" height={24} width={24} className="mr-2 -ml-2" />
                    Github
                  </button>
                </form>
                <form action="https://www.reddit.com/r/don_interactive" target="_blank" rel="noopener noreferrer">
                  <button
                    type="submit"
                    className="text-center text-white hover:text-black
                    scale-100 hover:scale-105 transform
                    transition duration-300 bg-gradient-to-tr
                    from-teal-500 via-indigo-500 to-rose-500
                    hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                      font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2"
                  >
                    <Image src={redditGlyph} alt="Reddit Glyph" height={24} width={24} className="mr-2 -ml-2" />
                    Reddit
                  </button>
                </form>
              </div>
            </Card>
          </div>
          <div
            className="col-start-1 col-span-full xl:col-start-3 xl:col-span-2
            row-start-5 md:row-start-4 xl:row-start-2 row-span-2 md:row-span-2
            ml:0 xs:ml-12 xl:ml-0 mr-0 xs:mr-12 xl:mr-6 mb-6 xl:mb-0
          ">
            <Card appImageSrc={bfos} header="Beats from Outer Space" textPosition="left" linkButtonUrl="/bfos">
              Hello there, Terrarians! I am your mysterious radio host, Midnight,
              and I have a story to share with you. It is the tale of a brave
              space hero, who pilots the magnificent Vapor Falcon in a battle
              against the body snatching aliens from outer space.
            </Card>
          </div>
          <div
            className="col-start-1 xl:col-start-1 col-span-full xl:col-span-2
            row-start-3 md:row-start-2 xl:row-start-2 row-span-2 md:row-span-2
            ml:0 xs:ml-12 xl:ml-6 mr-0 xs:mr-12 xl:mr-0 mb-0
          ">
            <Card appImageSrc={moneyPenny} header="Money Penny" textPosition="left" linkButtonUrl="/money-penny">
              <p>
                Money Penny ist deine persönliche Finanzbewertungs-App, die dir
                dabei hilft, deine Finanzen intelligent und mühelos zu organisieren.
              </p>
              <br />
              <p>
                Money Penny fragt dich nach deinem aktuellen Finanzstatus ab und erstellt dir einen Finanzbericht, der dir hilft, deine Finanzen zu verstehen und zu verbessern.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
