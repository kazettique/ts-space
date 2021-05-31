import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

export default function about(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:about`)}</title>
      </Head>
      <h1>this is {t(`common:about`)} page!</h1>
    </>
  );
}
