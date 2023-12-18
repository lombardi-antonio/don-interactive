import Image from "next/image";
import localFont from "next/font/local";

const monomaniac = localFont({
    src: "../../fonts/MonomaniacOne-Regular.ttf",
    fontFamily: "Monomaniac",
});

function Card({appImageSrc, header, subheader, children, textPosition = "center", linkButtonUrl}) {
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
          className="
          max-w-full max-h-full h-full
          animate-fade-in transition ease-in-out duration-500
          text-gray-800 dark:text-white text-center
          rounded-3xl  backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
          shadow-lg shadow-black/60"
        >
            <div className="rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] p-14 h-full w-full">
                {appImageSrc &&
                    <div className="mx-auto mb-10 w-[128px] h-[128px] md:w-[256px] md:h-[256px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                      <Image
                        src={appImageSrc}
                        width={264}
                        height={264}
                        alt="Beats from Outer Space Game Icon"
                        className="rounded-2xl"
                      />
                    </div>
                }
                <h1 className={`${monomaniac.className} text-${textPosition} text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                    {header}
                </h1>
                {subheader &&
                    <h2 className={`${monomaniac.className} text-${textPosition} text-3xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                        {subheader}
                    </h2>
                }
                <div className={`text-${textPosition} text-gray-900 dark:text-white text-md pt-6`}>
                    {children}
                </div>
                {linkButtonUrl &&
                    <form action={linkButtonUrl} className="mt-20">
                        <input
                            className="
                            text-lg text-gray-800 dark:text-white hover:text-black
                            w-1/2 p-2 rounded-3xl
                            scale-100 hover:scale-105 transform
                            transition duration-300
                            bg-gradient-to-tr
                            from-teal-500 via-indigo-500 to-rose-500
                            hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                            shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
                            type="submit"
                            value="more..."
                        />
                    </form>
                }
            </div>
        </div>
    )
}

module.exports = Card;