export const dynamic = "force-dynamic";

import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import Card from "@/app/components/vetro/Card";
import fusionimpossible from "/public/fusionimpossible.png";
import appStoreButton from "/public/appStoreBadgeDark.svg";
import playStoreButton from "/public/googlePlayBadge.png";
import bgElement00 from "/public/bgElement00.svg";
import bgElement01 from "/public/bgElement01.svg";
import bgElement02 from "/public/bgElement02.svg";
import bgElement03 from "/public/bgElement03.svg";
import grainy from "@/app/components/grainy/noise.svg";

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
      <div
        className={`absolute h-auto min-h-screen w-full bg-repeat`}
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,.9), rgba(0,0,0,.9)),url(${grainy.src})`,
        }}
      >
        <div
          className={`h-auto min-h-screen bg-[url('../../public/grid.png')] bg-repeat`}
        >
          <div className="header fixed grid w-full grid-cols-6 blur-[200px]">
            <div className="terrazzo-main col-span-6 min-h-[512px] w-full animate-[spin_14s_linear_infinite]">
              <Image src={bgElement00} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_18s_linear_infinite]">
              <Image src={bgElement01} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image src={bgElement02} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-end col-span-6 h-[512px] w-full animate-[spin_12s_linear_infinite]">
              <Image src={bgElement03} alt="Terrazzo Background" />
            </div>
            <div className="terrazzo-main right-50 absolute top-20 col-span-6 h-0 w-full animate-[spin_16s_linear_infinite]">
              <Image
                src={bgElement00}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end absolute right-10 top-20 col-span-6 h-0 w-full animate-[spin_22s_linear_infinite]">
              <Image
                src={bgElement01}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-main absolute left-10 top-4 col-span-6 h-0 w-full animate-[spin_12s_linear_infinite]">
              <Image
                src={bgElement02}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
            <div className="terrazzo-end top-50 right-30 absolute col-span-6 h-0 w-full animate-[spin_10s_linear_infinite]">
              <Image
                src={bgElement03}
                alt="Terrazzo Background"
                height={500}
                width={500}
              />
            </div>
          </div>

          <div className="main-card relative m-auto grid h-full max-w-full auto-cols-fr auto-rows-fr grid-cols-7 grid-rows-3 gap-6 lg:max-w-[920px] xl:max-w-[1660px]">
            <div className="col-span-full col-start-1 row-span-1 row-start-1 m-4 md:row-span-1 md:row-start-1 xl:col-span-4 xl:row-start-1 xl:m-6">
              <Card
                appImageSrc={fusionimpossible}
                hasImageHalo={false}
                header="Fusion Impossible"
              >
                <div className="flex flex-row justify-center">
                  <a href="add link" target="_blank" rel="noopener noreferrer">
                    <button
                      disabled
                      className="scale-100 transform pl-2 pr-4 transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:scale-100 md:px-10"
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
                      className="scale-100 transform pl-2 pr-4 transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:scale-100"
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
                <p className="text-md pb-4 pt-2 text-left">
                  Fusion Impossible is a puzzle game where you must fuse
                  elements to create new, bigger elements. The goal is to create
                  as many elements as possible before the board fills up. The
                  game is over when there are no more possible moves.
                </p>
                <form
                  action="https://github.com/lombardi-antonio/fusion-impossible"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    disabled
                    type="submit"
                    className="mb-2 mr-2 inline-flex scale-100 transform items-center rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-rose-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:scale-105 hover:from-teal-300 hover:via-indigo-300 hover:to-rose-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-20 disabled:transition-none disabled:hover:scale-100"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
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
            <div className="col-span-full col-start-1 row-span-2 row-start-2 m-4 md:row-span-3 md:row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:m-6">
              <div className="animate-fade-in mx-auto mb-4 w-1/2 min-w-[300px] pb-2 text-center transition duration-500 ease-in-out">
                <h1
                  className={`${monomaniac.className} px-10 py-2 text-center text-5xl font-bold text-[#4F46E5] drop-shadow-[6px_6px_0_#FFFFFF] dark:text-[#cecece] dark:drop-shadow-[6px_6px_0_#000000]`}
                >
                  High Score
                  <br />
                  トップ 25
                </h1>
              </div>
              {/* High Score Table */}
              <div className="animate-fade-in relative overflow-x-auto rounded-3xl text-center text-gray-800 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-brightness-110 transition duration-500 ease-in-out dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] dark:backdrop-brightness-110">
                <div className="h-full w-full rounded-3xl">
                  <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="bg-transparent text-xs uppercase text-gray-700 dark:bg-gray-200 dark:bg-opacity-30 dark:text-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="w-10 p-2 pl-4 sm:px-6 sm:py-3"
                        >
                          Place
                        </th>
                        <th scope="col" className="p-2 sm:px-6 sm:py-3">
                          Name
                        </th>
                        <th scope="col" className="p-2 sm:px-6 sm:py-3">
                          Energy
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {highScores != null ? (
                        highScores.map((entry, index) => (
                          <tr
                            key={index}
                            className={
                              index === 0
                                ? "text-md bg-gray-300 bg-opacity-50 text-[#a09540] sm:text-2xl dark:bg-black dark:bg-opacity-50 dark:text-[#baac43]"
                                : index === 1
                                  ? "bg-gray-300 bg-opacity-50 text-sm text-[#8b8996] sm:text-xl dark:bg-black dark:bg-opacity-50 dark:text-[#a2a0ad]"
                                  : "bg-gray-300 bg-opacity-50 text-xs sm:text-lg dark:bg-black dark:bg-opacity-50 dark:text-gray-200"
                            }
                          >
                            <th className="max-w-[100px] p-2 text-center sm:px-6 sm:py-3">
                              {index + 1}
                            </th>
                            <th
                              scope="row"
                              className={
                                index === 0
                                  ? "whitespace-nowrap p-2 text-lg font-medium text-[#a09540] sm:px-6 sm:py-3 sm:text-2xl dark:text-[#baac43]"
                                  : index === 1
                                    ? "whitespace-nowrap p-2 text-sm font-medium text-[#8b8996] sm:px-6 sm:py-3 sm:text-xl dark:text-[#a2a0ad]"
                                    : "whitespace-nowrap p-2 text-xs font-medium text-gray-900 sm:px-6 sm:py-3 sm:text-lg dark:text-white"
                              }
                            >
                              {entry.name}
                            </th>
                            <th className="p-2 sm:px-6 sm:py-3">
                              {entry.score}
                            </th>
                          </tr>
                        ))
                      ) : (
                        <p>error...</p>
                      )}
                    </tbody>
                    <tfoot>
                      <tr className="font-semibold text-gray-900 dark:text-white">
                        <th
                          scope="row"
                          className="max-w-[100px] p-2 text-base sm:px-6 sm:py-3"
                        ></th>
                        <th
                          scope="row"
                          className="p-2 text-base sm:px-6 sm:py-3"
                        >
                          Total Energy Produced
                        </th>
                        <th className="p2 sm:px-6 sm:py-3">{totalEnergy}</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
