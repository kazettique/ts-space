import React, { ReactElement } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

// next
import Head from 'next/head';
import Image from 'next/image';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component
import Page from '@/components/Page';
import Card from '@/components/Card';

// utils
import { getCombinedHeadName } from '@/utils';

interface Props {
  children: ReactElement | string;
}

const MY_MAIL = `kazettique@gmail.com`;
const AVATAR = `https://avatars.githubusercontent.com/u/42999338?v=4`;
const GITHUB_URL = `https://github.com/kazettique`;

export default function about({ children }: Props): ReactElement {
  const { t } = useTranslation();

  const MAIL_SUBJECT = `[${t(`common:siteTitle`)}] ${t(`about:mailSubject`)}`;
  const MAIL_BODY = t(`about:mailBody`);

  return (
    <>
      <Head>
        <title>{getCombinedHeadName([t(`common:siteTitle`), t(`common:about`)])}</title>
      </Head>
      {children}
      <Page title={t(`common:about`)}>
        <p>{t(`about:greeting`)}</p>
        <p>{t(`about:greeting2`)}</p>
        <div className="my-8 block lg:flex items-center">
          <ExclamationIcon className="h-8 w-8 mx-auto lg:mr-0 text-red-600" />
          <h4 className="text-2xl capitalize">{t(`about:translatorRequest.title`)}</h4>
          <ExclamationIcon className="h-8 w-8 mx-auto lg:ml-0 text-red-600" />
        </div>
        <p>{t(`about:translatorRequest.content`)}</p>
        <div className="font-semibold">
          <span>
            Email:<span>&nbsp;</span>
          </span>
          <a className="text-green-500 underline" href={`mailto:${MY_MAIL}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`}>
            {MY_MAIL}
          </a>
        </div>
        <div className="w-full lg:w-1/2 mx-auto mt-8">
          <Card className="text-center" header="Woody Chang">
            <Image
              className="rounded-full mx-auto duration-300 transform hover:rotate-12 cursor-pointer"
              src={AVATAR}
              alt="avatar"
              height={200}
              width={200}
            />
            <div className="mt-6">
              <a href={GITHUB_URL} target="_blank" className="text-green-500 underline font-semibold" rel="noreferrer">
                My GitHub Profile
              </a>
            </div>
          </Card>
        </div>
      </Page>
    </>
  );
}
