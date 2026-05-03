import localFont from "next/font/local";

import Card from "@/app/components/vetro/Card";
import Button from "@/app/components/vetro/Button";
import DownloadDropdownButton from "@/app/components/vetro/DownloadDropdownButton";
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
            <div className="relative flex justify-center mt-14">
              <Message absolute>available soon!</Message>
              <DownloadDropdownButton
                items={[
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1Zm-7.2-15.5C12.38 2.66 14 1.5 15.5 1.5c.08 1.46-.42 2.93-1.37 3.97-.93 1.03-2.35 1.75-3.75 1.65-.1-1.44.56-2.99 1.13-3.62Z" />
                      </svg>
                    ),
                    name: "App Store",
                    disabled: true,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-10C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A6.959 6.959 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                      </svg>
                    ),
                    name: "Play Store",
                    disabled: true,
                  },
                ]}
              />
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
