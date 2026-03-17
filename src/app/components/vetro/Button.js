import localFont from "next/font/local";

const monomaniac = localFont({
    src: "../../fonts/MonomaniacOne-Regular.ttf",
    fontFamily: "Monomaniac",
});

function Button({ children, type = "default", linkButtonUrl }) {
    /**
     * Vetro Card Component - A card component that can display a image, header, subheader, and text.
     * Optional buttons can be added to the card.
     *
     * @param {string} children - The text of the card.
     * @param {string} type - Type of button style.
     * @param {string} linkButtonUrl - The url of the link button.
     */
    return (
        <>
            {type === "default" && (
                <a href={linkButtonUrl} >
                    <button
                        className="
                    vetro-glass-button
                    hover:bg-black/50 dark:hover:bg-white/50
                    h-fit animate-fade-in transition ease-in-out duration-100
                    text-gray-800 dark:text-white text-center rounded-3xl
                    hover:scale-110 z-50 hover:text-black"
                        type="submit"
                    >
                        <div className="
                        p-3 h-fit rounded-3xl
                        hover:shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_0_4px_rgba(0,0,0,0.25)]"
                        >
                            {children}
                        </div>
                    </button>
                </a>
            )}
            {type === "link" && (
                <a href={linkButtonUrl} className="flex items-center justify-center">
                    <button
                        className="
                        vetro-rim
                        text-lg m-4 min-w-[25%]
                        bg-gradient-to-tr
                        from-teal-500 via-indigo-500 to-rose-500
                        hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                        animate-fade-in transition ease-in-out duration-100
                        text-white hover:text-indigo-800 text-center rounded-3xl
                        hover:scale-110"
                        type="submit"
                    >
                        <div className="
                            py-3 px-8 h-fit rounded-3xl shadow-[0_0_0_0.5px_rgba(255,255,255,0.35)]
                            hover:shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_0_4px_rgba(0,0,0,0.25)]"
                        >
                            {children}
                        </div>
                    </button>
                </a>
            )}
            {type === "link-navbar" && (
                <a href={linkButtonUrl} className="flex items-center justify-center">
                    <button
                        className="
                        vetro-rim
                        text-xs
                        bg-gradient-to-tr
                        from-teal-500 via-indigo-500 to-rose-500
                        hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                        animate-fade-in transition ease-in-out duration-100
                        text-white hover:text-indigo-800 text-center rounded-3xl
                        hover:scale-110"
                        type="submit"
                    >
                        <div className="
                            py-2 px-4 h-fit rounded-3xl shadow-[0_0_0_0.5px_rgba(255,255,255,0.35)]
                            hover:shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_0_4px_rgba(0,0,0,0.25)]"
                        >
                            {children}
                        </div>
                    </button>
                </a>
            )}
        </>
    )
}

export default Button;