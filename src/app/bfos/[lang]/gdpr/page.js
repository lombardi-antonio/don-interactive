import React from "react";
import LanguageSwitcher from "@/app/components/languageSwitcher"
import { getDictionary } from '@/translations/dictionaries'


export default async function Gdpr({ params: { lang } }) {
  const dict = await getDictionary(lang) // en

  return (
    <main className="robot text-black dark:text-white max-w-[1080px] min-w-[512px] px-4 py-10 mx-auto pt-4">
      <div className="pb-8">
        {
          lang === 'de' ?
          <a href="/bfos/en/gdpr" rel="noopener noreferrer">
            <button
              type="button"
              className="text-white bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 font-medium rounded-full text-xs px-4 py-2 text-center mr-3 md:mr-0 hidden md:block dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
            >
              EN
            </button>
          </a>
          :
          <a href="/bfos/de/gdpr" rel="noopener noreferrer">
            <button
              type="button"
              className="text-white bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 font-medium rounded-full text-xs px-4 py-2 text-center mr-3 md:mr-0 hidden md:block dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
            >
              DE
            </button>
          </a>
        }
      </div>
      <div>
        <h1 className="text-4xl pb-8">{dict.gdpr.privacyPolicy}</h1>
        <p className="text-sm pb-8 opacity-60">{dict.gdpr.fromDate}</p>
        <h2 className="text-2xl font-bold pb-4">{dict.gdpr.tableOfContents}</h2>
        <ul className="index pb-8">
          <li>
            <a className="index-link" href="#m3">
              {dict.gdpr.responsiblePerson}
            </a>
          </li>
          <li>
            <a className="index-link" href="#mOverview">
              {dict.gdpr.overviewOfProcessing}
            </a>
          </li>
          <li>
            <a className="index-link" href="#m2427">
            {dict.gdpr.relevantLegalBasis}
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold pb-4" id="m3">{dict.gdpr.responsiblePerson}</h2>
        <p>
          Antonio Lombardi
          <br />
          Wiener Straße 77
          <br />
          70469 Stuttgart
        </p>
          {dict.gdpr.eMailAdress}{" "}
        <p className="pb-8">
          <a href="mailto:a.lombardi@gmail.com">a.lombardi@gmail.com</a>
        </p>
        <h2 className="text-2xl font-bold pb-4" id="m2427">{dict.gdpr.relevantLegalBasis}</h2>
        <p className="pb-8">
          {dict.gdpr.relevantLegalBasisContent}
        </p>
        <h2 className="text-2xl font-bold pb-4" id="mOverview">{dict.gdpr.overviewOfProcessing}</h2>
        <p>
          {dict.gdpr.personalInformationProcessing}
        </p>
        <p>
          {dict.gdpr.sensitivePersonalInformationProcessing}
        </p>
        <p>
          {dict.gdpr.thirdPartiesInformationProcessing}
        </p>
      </div>
    </main>
  );
}
