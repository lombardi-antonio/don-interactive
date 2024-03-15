import Image from "next/image";
import localFont from "next/font/local";
import styles from "./Card.module.css";

const monomaniac = localFont({
  src: "../../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

function Card({
  appImageSrc,
  hasImageHalo = true,
  header,
  subheader,
  children,
  textPosition = "center",
  linkButtonUrl,
}) {
  /**
   * Vetro Card Component - A card component that can display a image, header, subheader, and text.
   * Optional buttons can be added to the card.
   *
   * @param {string} appImageSrc - The path to the image of the app.
   * @param {string} header - The header of the card.
   * @param {string} subheader - The subheader of the card.
   * @param {string} children - The text of the card.
   * @param {string} textPosition - The position of the text in the card.
   * @param {string} linkButtonUrl - The url of the link button.
   */
  return (
    <div
      id="main-card"
      className={`${styles.gloweffect} relative animate-fade-in max-h-full max-w-full rounded-3xl text-center text-gray-800 shadow-lg shadow-black/60 backdrop-blur-2xl backdrop-brightness-110 transition duration-500 ease-in-out dark:text-white dark:backdrop-brightness-110
      `}
    >
      <svg className={styles.glowcontainer}>
        <filter id="blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <rect rx="24px" filter="url(#blur)" strokeLinecap="round" pathLength={100} className={styles.glowblur}></rect>
        <rect rx="24px" strokeLinecap="round" pathLength={100} className={styles.glowline}></rect>
      </svg>
      <div className="h-full w-full rounded-3xl px-6 py-14 md:px-12 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)]">
        {appImageSrc && (
          <div
            className={
              hasImageHalo
                ? "mx-auto mb-10 h-[128px] w-[128px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:h-[256px] md:w-[256px]"
                : "mx-auto mb-10 h-[128px] w-[128px] md:h-[256px] md:w-[256px]"
            }
          >
            <Image
              src={appImageSrc}
              width={264}
              height={264}
              alt="Beats from Outer Space Game Icon"
              className="rounded-2xl"
            />
          </div>
        )}
        <h1
          className={`${monomaniac.className} text-${textPosition} text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
        >
          {header}
        </h1>
        {subheader && (
          <h2
            className={`${monomaniac.className} text-${textPosition} text-3xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
          >
            {subheader}
          </h2>
        )}
        <div
          className={`text-${textPosition} text-md pt-6 text-gray-900 dark:text-white`}
        >
          {children}
        </div>
        {linkButtonUrl && (
          <form action={linkButtonUrl} className="mt-20">
            <input
              className="
                            w-1/2 scale-100 transform rounded-3xl
                            bg-gradient-to-tr from-teal-500 via-indigo-500
                            to-rose-500 p-2 text-lg
                            text-gray-800 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]
                            transition
                            duration-300 hover:scale-105 hover:from-teal-300
                            hover:via-indigo-300 hover:to-rose-300
                            dark:text-white"
              type="submit"
              value="more..."
            />
          </form>
        )}
      </div>
    </div>
  );
}

module.exports = Card;
