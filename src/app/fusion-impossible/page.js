export const dynamic = 'force-dynamic'

import Image from "next/image";
import { sql } from "@vercel/postgres";
import React from "react";
import localFont from "next/font/local";

import Card from "@/app/components/vetro/Card";
import fusionImpossible from "/public/fusionImpossible.png";
import appStoreButton from "public/appStoreBadgeDark.svg";
import playStoreButton from "public/googlePlayBadge.png";
import bgElement00 from "/public/bgElement00.svg";
import bgElement01 from "/public/bgElement01.svg";
import bgElement02 from "/public/bgElement02.svg";
import bgElement03 from "/public/bgElement03.svg";

const monomaniac = localFont({
    src: "../fonts/MonomaniacOne-Regular.ttf",
    fontFamily: "Monomaniac",
});

async function getTotalEnergy() {
    const queryResult = await sql`
        SELECT SUM(
            CAST(score AS INTEGER)
            ) AS total_score FROM fusionimpossible;
    `;

    const totalEnergy = queryResult.rows[0].total_score;

    return totalEnergy;
}

export async function loader() {
    const queryResult = await sql`
        SELECT
            name,
            CAST(score AS INTEGER)
            FROM fusionimpossible
        ORDER BY score DESC
        LIMIT 25;
    `;

    const highScores = queryResult.rows;

    return highScores;
}

export default async function FusionImpossible() {
    const highScores = await loader();
    const totalEnergy = await getTotalEnergy();

    return (
        <main>
            <div className={`absolute w-full h-auto min-h-screen bg-repeat bg-[url('../../public/grid.png')]`}>
                <div className="header grid grid-cols-6 w-full fixed blur-[200px]">
                <div className="terrazzo-main col-span-6 min-h-[512px] w-full animate-[spin_14s_linear_infinite]">
                    <Image src={bgElement00} alt="Terrazzo Background"/>
                </div>
                <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_18s_linear_infinite]">
                    <Image src={bgElement01} alt="Terrazzo Background" />
                </div>
                <div className="terrazzo-main col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
                    <Image src={bgElement02} alt="Terrazzo Background"/>
                </div>
                <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_12s_linear_infinite]">
                    <Image src={bgElement03} alt="Terrazzo Background"/>
                </div>
                <div className="terrazzo-main col-span-6 absolute top-20 right-50 h-0 w-full animate-[spin_16s_linear_infinite]">
                    <Image src={bgElement00} alt="Terrazzo Background" height={500} width={500}/>
                </div>
                <div className="terrazzo-end col-span-6 absolute top-20 right-10 h-0 w-full animate-[spin_22s_linear_infinite]">
                    <Image src={bgElement01} alt="Terrazzo Background" height={500} width={500} />
                </div>
                <div className="terrazzo-main col-span-6 absolute top-4 left-10 h-0 w-full animate-[spin_12s_linear_infinite]">
                    <Image src={bgElement02} alt="Terrazzo Background" height={500} width={500}/>
                </div>
                <div className="terrazzo-end col-span-6 absolute top-50 right-30 h-0 w-full animate-[spin_10s_linear_infinite]">
                    <Image src={bgElement03} alt="Terrazzo Background" height={500} width={500}/>
                </div>
                </div>

                <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full m-auto max-w-full lg:max-w-[920px] xl:max-w-[1660px]">
                    <div className="col-start-1 col-span-full xl:col-span-4 row-start-3 md:row-start-4 xl:row-start-1 row-span-2 md:row-span-3 m-4 xl:m-6">
                        <Card appImageSrc={fusionImpossible} hasImageHalo={false} header="Fusion Impossible">
                            <div className="flex flex-row justify-center">
                            <a href="add link" target="_blank" rel="noopener noreferrer">
                                <button
                                    disabled
                                    className="
                                        md:px-10
                                        scale-100 hover:scale-105 transform
                                        transition duration-300
                                        disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    <Image
                                        src={playStoreButton}
                                        height={264}
                                        alt="Google Play Store Button"
                                    />
                                </button>
                            </a>
                            <a href="add link" target="_blank" rel="noopener noreferrer">
                                <button
                                    disabled
                                    className="
                                        px-10 min-width-[256px]
                                        scale-100 hover:scale-105 transform
                                        transition duration-300
                                        disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    <Image
                                        src={appStoreButton}
                                        height={264}
                                        alt="Apple App Store Button"
                                    />
                                </button>
                            </a>
                            </div>
                            <p className="text-md text-left pt-2 pb-4">
                                Fusion Impossible is a puzzle game where you must fuse elements to create new, bigger elements.
                                The goal is to create as many elements as possible before the board fills up.
                                The game is over when there are no more possible moves.
                            </p>
                            <form action="https://github.com/lombardi-antonio/fusion-impossible" target="_blank" rel="noopener noreferrer">
                            <button
                                disabled
                                type="submit"
                                className="text-center text-white hover:text-black
                                scale-100 hover:scale-105 transform
                                transition duration-300 bg-gradient-to-tr
                                from-teal-500 via-indigo-500 to-rose-500
                                hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300
                                font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center mr-2 mb-2
                                disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed disabled:transition-none"
                            >
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
                            </button>
                            </form>
                        </Card>
                    </div>
                    <div className="col-start-1 col-span-full xl:col-start-5 xl:col-span-3 row-start-1 md:row-start-1 xl:row-start-1 row-span-2 md:row-span-3 m-4 xl:m-6">
                        <div className="
                            mb-4 mx-auto w-1/2 min-w-[300px] pb-2
                            animate-fade-in transition ease-in-out duration-500 text-center"
                        >
                            <h1 className={`${monomaniac.className} text-center px-10 py-2 text-[#4F46E5] dark:text-[#cecece] text-5xl font-bold drop-shadow-[6px_6px_0_#FFFFFF] dark:drop-shadow-[6px_6px_0_#000000]`}>
                                High Score
                                <br />
                                トップ 25
                            </h1>
                        </div>
                        {/* High Score Table */}
                        <div className="
                            relative overflow-x-auto
                            animate-fade-in transition ease-in-out duration-500
                            text-gray-800 dark:text-white text-center
                            rounded-3xl backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
                            shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
                        >
                            <div className="rounded-3xl h-full w-full">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-transparent dark:bg-opacity-30 dark:bg-gray-200 dark:text-gray-200">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 w-10">
                                                Place
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Energy
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            highScores != null ? highScores.map((entry, index) => (
                                                <tr
                                                    key={index}
                                                    className={
                                                        index === 0 ? 'text-2xl text-[#a09540] dark:text-[#baac43] bg-opacity-50 bg-gray-300 dark:bg-opacity-50 dark:bg-black' :
                                                        index === 1 ? 'text-xl text-[#8b8996] dark:text-[#a2a0ad] bg-opacity-50 bg-gray-300 dark:bg-opacity-50 dark:bg-black' :
                                                        'dark:text-gray-200 bg-opacity-50 bg-gray-300 dark:bg-opacity-50 dark:bg-black'
                                                    }
                                                >
                                                    <th className="px-6 py-4 text-center max-w-[100px]">
                                                        {index + 1}
                                                    </th>
                                                    <th
                                                        scope="row"
                                                        className={
                                                            index === 0 ? 'text-2xl px-6 py-4 font-medium whitespace-nowrap text-[#a09540] dark:text-[#baac43]' :
                                                            index === 1 ? 'text-xl px-6 py-4 font-medium whitespace-nowrap text-[#8b8996] dark:text-[#a2a0ad]' :
                                                            'px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white'}
                                                    >
                                                        {entry.name}
                                                    </th>
                                                    <th className="px-6 py-4">
                                                        {entry.score}
                                                    </th>
                                                </tr>
                                            )) : <p>error...</p>
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr className="font-semibold text-gray-900 dark:text-white">
                                            <th scope="row" className="px-6 py-3 text-base max-w-[100px]"></th>
                                            <th scope="row" className="px-6 py-3 text-base">Total Energy Produced</th>
                                            <th className="px-6 py-3">{totalEnergy}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
