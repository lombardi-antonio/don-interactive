'use client';

import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import Button from "@/app/components/vetro/Button";
import Message from "@/app/components/vetro/Message";

const monomaniac = localFont({
    src: "../../fonts/MonomaniacOne-Regular.ttf",
    fontFamily: "Monomaniac",
});

function Card({ appImageSrc, header, subheader, children, textPosition = "center", available = true, linkButtonUrl, backLink }) {
    const router = useRouter();
    /**
     * Vetro Card Component - A card component that can display a image, header, subheader, and text.
     * Optional buttons can be added to the card.
     *
     * @param {string} appImageSrc - The path to the image of the app.
     * @param {string} header - The header of the card.
     * @param {string} subheader - The subheader of the card.
     * @param {string} children - The text of the card.
     * @param {string} textPosition - The position of the text in the card.
     * @param {boolean} available - Whether the app is available or not.
     * @param {string} linkButtonUrl - The url of the link button.
     * @param {string} backLink - Button to navigate back.
     */
    return (
        <div
            id="main-card"
            className="
            relative overflow-hidden
            max-w-full max-h-full h-full
            animate-fade-in transition ease-in-out duration-500
            text-gray-800 dark:text-white text-center
            rounded-3xl vetro-glass"
        >
            {backLink && (
                <div className="absolute top-4 left-4 z-10 cursor-pointer" onClick={() => router.back()}>
                    <Button type="info">
                        <div className="flex items-center -mx-1 my-1 text-black dark:text-white">
                            <svg className="w-8 h-8 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Button>
                </div>
            )}
            {/* Edge refraction — stronger blur+saturation masked to the border region only */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backdropFilter: 'blur(8px) brightness(1.1) saturate(2.5)',
                    WebkitBackdropFilter: 'blur(8px) brightness(1.1) saturate(2.5)',
                    maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 78%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 78%, black 100%)',
                }}
                aria-hidden="true"
            />
            {/* Specular highlight — simulates light refracting at the glass surface */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/[0.18] to-transparent" aria-hidden="true" />
            <div className="rounded-3xl px-4 py-5 md:px-14 md:py-14 h-full w-full">
                {!available &&
                    <Message>available soon!</Message>
                }
                {appImageSrc &&
                    <div className="mx-auto mb-10 w-[180px] h-[180px] md:w-[256px] md:h-[256px] rounded-3xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
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
                    <Button type="link" linkButtonUrl={linkButtonUrl}>more...</Button>
                }
            </div>
        </div>
    )
}

export default Card;