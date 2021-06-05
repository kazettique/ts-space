import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component
import Page from '@/components/Page';

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
      {children}
      <Page>
        <h1 className="text-3xl lg:text-6xl text-center">{t(`common:about`)}</h1>
      </Page>
    </>
  );
}
