import localFont from "next/font/local";
import Card from "@/app/components/vetro/Card";
import Telaio from "@/app/components/vetro/Telaio";
import TerrazzoShader from "@/app/components/vetro/TerrazzoShader";
import VerniceShader from "../components/vetro/VerniceShader";
import Button from "../components/vetro/Button";

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
    <div className={rubik.className}>
      <VerniceShader className="fixed inset-0 pointer-events-none z-0" color="#bf7fe2" targetColor="#fe787d" />

      <section className="main-card relative grid auto-cols-fr auto-rows-auto grid-cols-8 gap-6 py-16 mx-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]" aria-labelledby="main-content">
        <article className="col-start-1 col-end-9 xl:col-start-2 xl:col-end-8">
          <Card header="DO∩ アントニオ" subheader="interactive" textPosition="left">
            <div className="absolute top-0 right-0 md:right-20 -rotate-6 pointer-events-none -z-10">
              <div className="dark:hidden opacity-50 sm:opacity-100"><Telaio src="/LoadingScreenLight.png" /></div>
              <div className="hidden dark:block opacity-50 sm:opacity-100">
                <Telaio src="/LoadingScreenDark.png" />
              </div>
            </div>
            <div className="sm:w-1/2">
              <p>
                This is a mock business created by me to showcase my skills and passion
                for all things interactive. Here you&#39;ll find examples of my work in
                digital media, design, and development.
                My goal is to demonstrate creativity, technical ability,
                and a love for building engaging interactive experiences.
              </p>
              <div className="h-6"></div>
              <Button type="info" linkButtonUrl="mailto:doninteract@gmail.com">
                <div className="flex items-center justify-center text-black dark:text-white">
                  <span className="mr-2">@</span>
                  contact me
                </div>
              </Button>
            </div>
          </Card>
        </article>

        <article className="col-start-1 col-end-9 xl:col-start-2 xl:col-end-8 2xl:col-start-2 2xl:col-end-5" itemScope itemType="https://schema.org/Game">
          <Card available={false} appImageSrc="/fusionimpossible.png" header="Fusion Impossible" textPosition="left" linkButtonUrl="/fusion">
            <div className="">
              <p itemProp="description">
                <span itemProp="name">Fusion Impossible</span> is a fast-paced puzzle game where you must fuse elements inside a reactor.
                Trigger chain reactions to rack up higher scores, but be careful—if the elements overflow, you lose!
                Strategically combine pieces, plan your moves, and see how long you can keep the fusion going.
              </p>
            </div>
          </Card>
        </article>

        <article className="col-start-1 col-end-9 xl:col-start-2 xl:col-end-8 2xl:col-start-5 2xl:col-end-8" itemScope itemType="https://schema.org/Game">
          <Card appImageSrc="/beatsFromOuterSpace.png" header="Beats from Outer Space" textPosition="left" linkButtonUrl="/bfos">

            <div className="">
              <p itemProp="description">
                Hello there, Terrarians! I am your mysterious radio host, Midnight,
                and I have a story to share with you. It is the tale of a brave
                space hero, who pilots the magnificent <span itemProp="name">Vapor Falcon</span> in a battle
                against the body snatching aliens from outer space.
              </p>
            </div>
          </Card>
        </article>
      </section>
    </div>
  );
}
