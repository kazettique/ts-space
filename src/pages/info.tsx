import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component

interface Props {
  children: ReactElement | string;
}

export default function info({ children }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:info`)}</title>
      </Head>
      <h1 className="text-6xl text-gray-50">this is {t(`common:info`)} page!</h1>
      {children}
    </>
  );
}
