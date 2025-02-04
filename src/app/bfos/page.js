import Image from "next/image";
import localFont from "next/font/local";

import BfosModel from "@/app/bfos/BfosModel";
import Card from "@/app/components/vetro/Card";
import bfos from "/public/beatsFromOuterSpace.png";
import appStoreButton from "public/appStoreBadgeDark.svg";
import playStoreButton from "public/googlePlayBadge.png";
import bgElement00 from "/public/bgElement00.svg";
import bgElement01 from "/public/bgElement01.svg";
import bgElement02 from "/public/bgElement02.svg";
import bgElement03 from "/public/bgElement03.svg";
import grainy from "@/app/components/grainy/noise.svg";

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
      <div
        className={`absolute h-auto min-h-screen w-full bg-repeat bg-[linear-gradient(0deg, rgba(255,255,255,.9), rgba(255,255,255,.9)),url(${grainy.src})] dark:bg-[linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.9)),url(${grainy.src})]`}
      >
        <div
          className={`h-auto min-h-screen bg-[url('../../public/grid.png')] bg-repeat`}
        >
          <div className="header fixed grid w-full grid-cols-6 blur-[200px]">
            <div className="terrazzo-main col-span-6 min-h-[512px] w-full animate-[spin_14s_linear_infinite]">
              <Image src={bgElement00} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_18s_linear_infinite]">
              <Image src={bgElement01} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image src={bgElement02} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_12s_linear_infinite]">
              <Image src={bgElement03} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main right-50 absolute top-20 col-span-6 h-0 w-full animate-[spin_16s_linear_infinite]">
              <Image
                src={bgElement00}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end absolute right-10 top-20 col-span-6 h-0 w-full animate-[spin_22s_linear_infinite]">
              <Image
                src={bgElement01}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-main absolute left-10 top-4 col-span-6 h-0 w-full animate-[spin_12s_linear_infinite]">
              <Image
                src={bgElement02}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end top-50 right-30 absolute col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image
                src={bgElement03}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="main-card relative m-auto grid h-full max-w-full auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 lg:max-w-[920px] xl:max-w-[2160px]">
            <div
              id="three-logo"
              className="
            animate-fade-in-model h-xl col-span-full col-start-1
            row-span-3 row-start-1 transition
            duration-[0.8s] ease-in-out
            xl:col-start-5 xl:h-full"
            >
              <BfosModel />
            </div>
            <div
              className="
            col-span-full col-start-1 row-span-2
            row-start-1 m-4 md:row-span-3 md:row-start-1 xl:col-span-4
            xl:row-start-1 xl:m-6
            "
            >
              <Card appImageSrc={bfos} header="Beats form Outer Space">
                <div className="flex flex-row justify-center space-x-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.doninteractive.beatsfromouterspace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="
                      scale-100
                      transform transition duration-300
                      hover:scale-105 focus:scale-105 md:px-10"
                      type="submit"
                    >
                      <Image
                        src={playStoreButton}
                        height={264}
                        alt="Google Play Store Button"
                      />
                    </button>
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/beats-from-outer-space/id6467766328"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="
                    scale-100
                    transform transition duration-300
                    hover:scale-105 focus:scale-105 md:px-10"
                      type="submit"
                    >
                      <Image
                        src={appStoreButton}
                        height={264}
                        alt="Apple App Store Button"
                      />
                    </button>
                  </a>
                </div>
                <p className="text-md py-4 text-red-800 dark:text-red-300">
                  please deactivate silent mode for the sound!
                </p>
                <p className="text-md pb-4 pt-2 text-left">
                  Hello there, Terrarians! I am your mysterious radio host,
                  Midnight, and I have a story to share with you. It is the tale
                  of a brave space hero, who pilots the magnificent Vapor Falcon
                  in a battle against the body snatching aliens from outer
                  space.
                  <br />
                  <br />
                  As you may know, the aliens have set their sights on Terra,
                  our beloved home planet. They want to take over our bodies and
                  use us as their own personal puppets. But our hero, with the
                  help of the Vapor Falcon, is determined to stop them at all
                  costs.
                  <br />
                  <br />
                  Our hero will face many challenges and obstacles. They must
                  navigate through treacherous asteroid fields, dodge laser
                  blasts from enemy ships, and outsmart the cunning alien
                  invaders. But with their quick reflexes and sharp shooting
                  skills, our hero is more than capable of taking on whatever
                  comes their way.
                  <br />
                  <br />
                  In the end, it all comes down to a final showdown between the
                  Vapor Falcon and the Mother Ship of the alien invaders. Will
                  our hero be able to save Terra and protect the human race from
                  being enslaved? Tune in to find out! Until then, stay safe out
                  there and keep your eyes peeled for any signs of the menacing
                  aliens.
                  <br />
                  <br />
                  This is Midnight signing off.
                </p>
                <form
                  action="https://github.com/lombardi-antonio/beats-from-outer-space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="submit"
                    className="mb-2 mr-2 inline-flex scale-100 transform items-center rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:scale-105 focus:scale-105 hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300 hover:text-black focus:from-teal-300 focus:via-indigo-300 focus:to-rose-300 focus:text-black"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
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
                <a
                  href="/bfos/en/gdpr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="mr-3 hidden rounded-full bg-indigo-600 px-4 py-2 text-center text-xs font-medium text-white hover:bg-indigo-800 focus:outline-none md:mr-0 md:block dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:bg-indigo-200 focus:text-black"
                  >
                    General Data Protection Regulation (GDPR)
                  </button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
