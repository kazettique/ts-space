import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component
import Menu from 'components/Menu';

interface Props {
  children: ReactElement | string;
}

export default function Home({ children }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:siteTitle`)}</title>
      </Head>
      <div className="text-center">
        <h1 className="text-6xl text-gray-50">
          {t(`home:greeting`)}
          <br />
          👋
        </h1>
        {children}
      </div>
    </>
  );
}
