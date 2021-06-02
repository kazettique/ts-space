import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component

interface Props {
  children: ReactElement | string;
}

export default function about({ children }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{[t(`common:siteTitle`), t(`common:about`)].join(` | `)}</title>
      </Head>
      <h1 className="text-6xl text-gray-50">this is {t(`common:about`)} page!</h1>
      {children}
    </>
  );
}
