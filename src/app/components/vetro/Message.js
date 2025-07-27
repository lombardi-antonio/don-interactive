import localFont from "next/font/local";

const monomaniac = localFont({
    src: "../../fonts/MonomaniacOne-Regular.ttf",
    fontFamily: "Monomaniac",
});

function Message({ type = "info", children }) {
    /**
     * Vetro Card Component - A card component that can display a image, header, subheader, and text.
     * Optional buttons can be added to the card.
     *
     * @param {string} type - Type of the message.
     * @param {string} children - The text of the card.
     */
    return (
        <div className="
        absolute h-12 my-1 md:my-6 flex items-center justify-center
        animate-fade-in transition ease-in-out duration-500
        text-gray-800 dark:text-white text-center bg-white/70 dark:bg-black/70
        rounded-3xl backdrop-brightness-110 dark:backdrop-brightness-50 backdrop-blur-2xl shadow-lg shadow-black/60
        z-50
        ">
            <div className="rounded-3xl border-2 border-red-500 dark:border-red-300 p-3">
                <p className="text-center text-red-500 dark:text-red-300 my-auto h-full flex items-center justify-center w-full">
                    {children}
                </p>
            </div>
        </div>
    )
}

module.exports = Message;