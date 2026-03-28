import Image from "next/image";
import localFont from "next/font/local";

import Card from "@/app/components/vetro/Card";
import Button from "@/app/components/vetro/Button";
import Message from "@/app/components/vetro/Message";
import VerniceShader from "../components/vetro/VerniceShader";
import Telaio from "../components/vetro/Telaio";

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
      <VerniceShader className="fixed inset-0 pointer-events-none z-0" />
      <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 py-10 h-full mx-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]">
        <div
          className="
          col-start-1 col-span-full xl:col-start-2 xl:col-span-5
          row-start-1 md:row-start-1 xl:row-start-1 row-span-2 md:row-span-3
          mx-4 my-16 xl:m-6
          "
        >
          <Card appImageSrc="/fusionimpossible.png" header="Fusion Impossible" backLink>
            <div className="flex flex-row justify-center">
              <a target="_blank" rel="noopener noreferrer">
                <button
                  className="
                    pr-1 md:px-10
                    scale-100 hover:scale-105 transform
                    transition duration-300"
                  type="submit"
                  disabled
                  aria-disabled="true"
                  style={{ opacity: 0.1, pointerEvents: "none" }}
                >
                  <Image
                    src="/googlePlayBadge.png"
                    height={264}
                    width={800}
                    alt="Google Play Store Button"
                    className="max-w-[200px] xs:max-w-[240px] h-auto"
                  />
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <button
                  className="
                    pl-1 md:px-10
                    scale-100 hover:scale-105 transform
                    transition duration-300"
                  type="submit"
                  disabled
                  aria-disabled="true"
                  style={{ opacity: 0.1, pointerEvents: "none" }}
                >
                  <Image
                    src="/Download_on_the_App_Store_Badge_blk.svg"
                    height={264}
                    width={724}
                    alt="Apple App Store Button"
                    className="max-w-[200px] xs:max-w-[240px] h-auto"
                  />
                </button>
              </a>
              <Message>
                available soon!
              </Message>
            </div>
            <p className="text-2xl text-left px-4 2xl:px-28 pt-8 pb-12">
              Step into the shoes of a brilliant scientist, racing against time to solve humanity’s greatest challenge: the global energy crisis.
              In <b>Fusion Impossible</b>, you are tasked with mastering the secrets of nuclear fusion inside a volatile reactor.
              Combine basic elements to create larger, more powerful ones, and trigger spectacular chain reactions to maximize your energy output.
            </p>
            <Button type="link" linkButtonUrl="https://github.com/lombardi-antonio/fusion-impossible">
              <div className="flex items-center justify-center text-black dark:text-white">
                <svg
                  className="w-5 h-5 mr-2 text-black dark:text-white"
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
                view on github
              </div>
            </Button>
            <div className="relative flex items-center pointer-events-none">
              <div className="w-full px-4 py-10 2xl:pl-28 md:w-1/2 absolute md:relative z-10 flex items-center text-left text-2xl">
                Every move is a delicate balance. Fuse elements carefully to avoid overloading the reactor.
                Can you harness the power of fusion and light the way to a brighter future, or will your reactor spiral out of control?
              </div>
              <div className="opacity-30 md:opacity-100 m-auto md:m-0 scale-75 md:mx-auto">
                <Telaio src="/fusionImpossbleScreenShot1.png" />
              </div>
            </div>
            <div className="relative flex items-center pointer-events-none">
              <div className="opacity-30 md:opacity-100 m-auto md:m-0 scale-75 md:mx-auto">
                <Telaio src="/fusionImpossbleScreenShot0.png" />
              </div>
              <div className="w-full px-4 pr-10 2xl:pr-28 md:w-1/2 absolute md:relative z-10 flex items-center text-left text-2xl">
                The fate of the world’s energy supply rests in your hands.
                Chain reactions will reward your ingenuity with bonus points, but push your luck too far and risk a catastrophic meltdown that ends your experiment.
                Will you become the hero who solves the energy crisis, or will your ambitions go up in smoke? The challenge awaits in Fusion Impossible.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
