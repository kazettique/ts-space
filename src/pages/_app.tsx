// next
import { AppProps } from 'next/app';
import Image from 'next/image';
import '@/styles/global.css';
import Head from 'next/head';

// tailwind
import 'tailwindcss/tailwind.css';

// component
import Menu from '@/components/Menu';

// i18n
import useTranslation from 'next-translate/useTranslation';

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:siteTitle`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
