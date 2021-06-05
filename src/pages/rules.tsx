import React, { ReactElement } from 'react';

// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component
import MachineTranslation from '@/components/MachineTranslation';

// utils
import { getParagraphList, getCombinedHeadName } from '@/utils';

interface Props {
  children: ReactElement | string;
}

const showMachineTranslationMessage = (locale: string | undefined): boolean => {
  if (locale === undefined) return false;

  const machineTranslatedLanguage = [`en-US`, `zh-CN`];
  return machineTranslatedLanguage.includes(locale);
};

export default function rules({ children }: Props): ReactElement {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const ruleList = [1, 2, 3, 4, 5];

  return (
    <>
      <Head>
        <title>{getCombinedHeadName([t(`common:siteTitle`), t(`common:rules`)])}</title>
      </Head>
      <div className="w-full lg:w-4/5 bg-yellow-50 shadow-sm rounded-md p-5 lg:p-16 text-gray-700 h-auto mx-auto">
        <h1 className="text-3xl lg:text-6xl text-center">{t(`rules:rulesTitle`)}</h1>
        {children}
        {ruleList.map((item) => (
          <div key={item} className="m-3">
            <h3 className="text-lg lg:text-3xl font-semibold my-4">{t(`rules:p${item}_title`)}</h3>
            <ul className="list-disc my-2">
              {getParagraphList(t(`rules:p${item}`)).map((listItem) => (
                <li key={`${t(`rules:p${item}_title`)}-${listItem}`} className="my-2">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {showMachineTranslationMessage(locale) && <MachineTranslation />}
      </div>
    </>
  );
}
