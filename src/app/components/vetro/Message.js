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
        overflow-hidden
        absolute my-1 md:my-6 flex items-center justify-center
        animate-fade-in transition ease-in-out duration-500
        text-gray-800 dark:text-white text-center
        rounded-3xl vetro-glass
        z-50
        ">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/[0.18] to-transparent" aria-hidden="true" />
            <p className="text-center text-red-500 dark:text-[rgb(255,78,78)] px-4 py-3">
                {children}
            </p>
        </div>
    )
}

export default Message;