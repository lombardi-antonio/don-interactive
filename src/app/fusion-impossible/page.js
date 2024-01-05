import { sql } from "@vercel/postgres";
import React from "react";

import localFont from "next/font/local";

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

async function loader() {
    const queryResult = await sql`
        SELECT
            name,
            CAST(score AS INTEGER)
            FROM fusionimpossible
        ORDER BY score DESC
        LIMIT 30;
    `;

    const highScores = queryResult.rows;

    return highScores;
}

export default async function FusionImpossible() {
    const highScores = await loader();
    const totalEnergy = await getTotalEnergy();

    return (
        <main>
            <div className="header grid grid-cols-6 w-full fixed">
                <div className="terrazzo-main col-span-6 bg-[url('../../public/BrightTerrazzoLess.png')] dark:bg-[url('../../public/TerrazzoLess.png')] min-h-[512px]"></div>
                <div className="terrazzo-end col-span-6 bg-[url('../../public/BrightTerrazzoLessEnd.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] h-[512px]"></div>
            </div>
            <div className="main-card relative grid auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 h-full m-auto max-w-full lg:max-w-[920px] xl:max-w-[1660px]">
                <div
                className="
                col-start-1 col-span-full xl:col-start-5 xl:col-span-3
                row-start-1 md:row-start-1 xl:row-start-1 row-span-2 md:row-span-3
                m-4 xl:m-6
                "
                >
                    <div className="
                        mb-4 mx-auto w-1/2 min-w-[300px] pb-2
                        animate-fade-in transition ease-in-out duration-500
                        text-gray-800 dark:text-white text-center rounded-full
                        backdrop-brightness-110 dark:backdrop-brightness-110 backdrop-blur-2xl
                        shadow-[0_0_0_1px_rgba(0,0,0,0.25)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
                    >
                        <h1 className={`${monomaniac.className} text-center px-10 py-2 text-[#329f94] dark:text-[#e37276] text-5xl font-bold drop-shadow-[3px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[3px_4px_0_#37D7C5]`}>
                            High Score
                            <br />
                            トップ 30
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
                                        highScores.map((entry, index) => (
                                            <tr
                                                key={index}
                                                className={index === 0 ? 'text-[#beb254] dark:text-[#baac43] bg-opacity-30 bg-gray-300 dark:bg-opacity-30 dark:bg-black' : 'dark:text-gray-200 bg-opacity-30 bg-gray-300 dark:bg-opacity-30 dark:bg-black'}
                                            >
                                                <th className="px-6 py-4 text-center max-w-[100px]">
                                                    {index + 1}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className={index === 0 ? 'px-6 py-4 font-medium whitespace-nowrap text-[#beb254] dark:text-[#baac43]' : 'px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white'}
                                                >
                                                    {entry.name}
                                                </th>
                                                <th className="px-6 py-4">
                                                    {entry.score}
                                                </th>
                                            </tr>
                                        ))
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
        </main>
    )
}