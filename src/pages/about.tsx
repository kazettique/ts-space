import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component

// utils
import { getCombinedHeadName } from '@/utils';

interface Props {
  children: ReactElement | string;
}

export default function about({ children }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{getCombinedHeadName([t(`common:siteTitle`), t(`common:about`)])}</title>
      </Head>
      <h1 className="text-6xl text-gray-50">this is {t(`common:about`)} page!</h1>
      {children}
    </>
  );
}
