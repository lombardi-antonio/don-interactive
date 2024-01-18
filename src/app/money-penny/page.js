import Image from "next/image";
import localFont from "next/font/local";

import moneyPenny from "/public/moneyPenny.png";
import screenShot0 from "/public/moneyPennyScreenShot00.PNG";
import screenShot1 from "/public/moneyPennyScreenShot01.PNG";
import appStoreButton from "public/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import playStoreButton from "public/google-play-badge.png";
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
    <main className={`${rubik.className}`}>
      <div className="w-full h-full absolute bg-repeat bg-[url('../../public/grid.png')]"></div>
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

      <div className="main-card relative grid grid-cols-1 gap-6 h-full m-auto max-w-4xl">
        <div
          id="first-card"
          className="
          animate-fade-in transition ease-in-out duration-500
          col-start-1 col-span-full
          m-4
          text-gray-800 dark:text-white text-center
          rounded-3xl
          backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
          shadow-lg shadow-black/60"
        >
          <div className="rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-6 w-full h-full">
            <div className="grid grid-cols-2">
              <div className="col-start-1 col-span-full row-start-2 md:row-start-1 md:col-span-1">
                <h1 className="text-5xl text-left pt-5 font-bold uppercase">
                  Money Penny
                </h1>
                <h2 className="text-3xl sm:text-4xl text-left pt-5">
                  Deine persönliche
                  <br />
                  Finanzbewertung
                </h2>
                <p className="text-md text-left pt-2 pb-4">
                  Money Penny hilft dir bei deinen Finanzen.
                  Eine Bewertung wie es aktuell mit deinen Finanzen aussieht und wie du dich verbessern kannst.
                </p>
              </div>
              <div className="col-start-1 col-span-full row-start-1 md:col-start-2 md:col-span-1">
                <div className="mx-auto mb-10 w-[256px] h-[256px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  <Image
                    src={moneyPenny}
                    width={264}
                    height={264}
                    alt="Beats from Outer Space Game Icon"
                    className="rounded-2xl"
                  />
                </div>
                <br />
                <div className="flex flex-row justify-center">
                  <a /*href="https://play.google.com/store/apps/details?id=org.doninteractive.beatsfromouterspace" target="_blank" rel="noopener noreferrer"*/>
                    <button
                      className="
                        sm:px-5
                        scale-100 hover:scale-105 transform
                        transition duration-300 opacity-10 hover:opacity-100"
                      type="submit"
                    >
                      <Image
                        className="opacity-10"
                        src={playStoreButton}
                        height={264}
                        alt="Google Play Store Button"
                      />
                      comming soon...
                    </button>
                  </a>
                  <a /*href="https://apps.apple.com/us/app/beats-from-outer-space/id6467766328" target="_blank" rel="noopener noreferrer"*/>
                    <button
                      className="
                        sm:px-5
                        scale-100 hover:scale-105 transform
                        transition duration-300 opacity-10 hover:opacity-100"
                      type="submit"
                    >
                      <Image
                        className="opacity-10"
                        src={appStoreButton}
                        height={264}
                        alt="Apple App Store Button"
                      />
                      comming soon...
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-start-1 col-span-full row-start-4 md:row-start-2 md:col-start-1 md:col-span-1 m-auto">
                <Image
                  src={screenShot0}
                  width={264}
                  alt="Beats from Outer Space Game Icon"
                  className="rounded-2xl drop-shadow-[6px_6px_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[6px_6px_10px_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="col-start-1 col-span-full row-start-3 md:row-start-2 md:col-start-2 md:col-span-1 my-auto md:p-5">
                <h1 className="text-3xl sm:text-4xl text-left pt-10">
                  Maßgeschneiderte
                  <br />
                  Beratung
                </h1>
                <p className="text-md text-left pt-2 pb-4">
                  Beantworte alle Fragen und erhalte ein Liste an Verbesserungsvorschlägen die deiner Situation entsprechen.
                </p>
              </div>
              <div className="col-start-1 col-span-full md:col-start-1 md:col-span-1 my-auto md:p-5">
                <h1 className="text-3xl sm:text-4xl text-left pt-10">
                  Hilfsbereit bei
                  <br />
                  Finanzfragen
                </h1>
                <p className="text-md text-left pt-2 pb-4">
                  Was ist ein Haushaltsbuch?
                  <br />
                  Was sind eigentlich ETFs?
                  <br />
                  Tagesgeld oder Festgeld?
                </p>
              </div>
              <div className="col-start-1 col-span-full md:col-start-2 md:col-span-1 m-auto">
                <Image
                  src={screenShot1}
                  width={264}
                  alt="Beats from Outer Space Game Icon"
                  className="rounded-2xl drop-shadow-[6px_6px_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[6px_6px_10px_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="col-start-1 col-span-full my-auto md:p-5">
                <a href="https://www.iubenda.com/privacy-policy/96483223" target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-4 py-2 text-center mr-3 md:mr-0 hidden md:block dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Datenschutzerklärung
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
