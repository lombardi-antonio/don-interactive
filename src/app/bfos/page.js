import Image from "next/image";
import localFont from "next/font/local";

import Card from "@/app/components/vetro/Card";
import Button from "@/app/components/vetro/Button";
import bfos from "/public/beatsFromOuterSpace.png";

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
      <div className="header grid grid-cols-6 w-full fixed">
        <div className="terrazzo-main col-span-6 bg-[url('../../public/TerrazzoLess.png')] dark:bg-[url('../../public/TerrazzoLess.png')] min-h-[512px]"></div>
        <div className="terrazzo-end col-span-6 bg-[url('../../public/TerrazzoLessEnd.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] h-[512px]"></div>
      </div>
      <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full m-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]">
        <div
          className="
          col-start-1 col-span-full xl:col-start-2 xl:col-span-5
          row-start-1 md:row-start-1 xl:row-start-1 row-span-2 md:row-span-3
          m-4 xl:m-6
          "
        >
          <Card appImageSrc={bfos} header="Beats form Outer Space">
            <div className="flex flex-row justify-center">
              <a href="https://apps.apple.com/us/app/beats-from-outer-space/id6467766328" target="_blank" rel="noopener noreferrer">
                <button
                  className="
                  px-10 min-width-[256px]
                  scale-100 hover:scale-105 transform
                  transition duration-300"
                  type="submit"
                >
                  <Image
                    src="/Download_on_the_App_Store_Badge_blk.svg"
                    height={80}
                    width={256}
                    alt="Apple App Store Button"
                  />
                </button>
              </a>
            </div>
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
            <Button type="link" linkButtonUrl="https://github.com/lombardi-antonio/beats-from-outer-space">
              <div className="flex items-center justify-center">
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
              </div>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}
