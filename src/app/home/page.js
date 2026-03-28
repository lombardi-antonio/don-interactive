import localFont from "next/font/local";
import Card from "@/app/components/vetro/Card";
import TerrazzoShader from "@/app/components/vetro/TerrazzoShader";
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
      <TerrazzoShader />

      <section className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 py-16 h-full mx-auto max-w-full lg:max-w-[920px] xl:max-w-[2160px]" aria-labelledby="main-content">
        <article className="col-start-1 col-end-8 xl:col-start-2 xl:col-end-7 row-start-1 row-span-1">
          <Card header="DO∩ アントニオ" subheader="interactive" textPosition="left">
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
                <span className="mr-2 text-xl">@</span>
                contact me
              </div>
            </Button>
          </Card>
        </article>

        <article className="col-start-1 col-end-8 xl:col-start-2 xl:col-end-7 row-start-2 row-span-2" itemScope itemType="https://schema.org/Game">
          <Card available={false} appImageSrc="/fusionimpossible.png" header="Fusion Impossible" textPosition="left" linkButtonUrl="/fusion">
            <p itemProp="description">
              <span itemProp="name">Fusion Impossible</span> is a fast-paced puzzle game where you must fuse elements inside a reactor.
              Trigger chain reactions to rack up higher scores, but be careful—if the elements overflow, you lose!
              Strategically combine pieces, plan your moves, and see how long you can keep the fusion going.
            </p>
          </Card>
        </article>

        <article className="col-start-1 col-end-8 xl:col-start-2 xl:col-end-7 row-start-4 row-span-2" itemScope itemType="https://schema.org/Game">
          <Card appImageSrc="/beatsFromOuterSpace.png" header="Beats from Outer Space" textPosition="left" linkButtonUrl="/bfos">
            <p itemProp="description">
              Hello there, Terrarians! I am your mysterious radio host, Midnight,
              and I have a story to share with you. It is the tale of a brave
              space hero, who pilots the magnificent <span itemProp="name">Vapor Falcon</span> in a battle
              against the body snatching aliens from outer space.
            </p>
          </Card>
        </article>
      </section>
    </div>
  );
}
