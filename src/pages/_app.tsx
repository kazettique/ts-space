// next
import { AppProps } from 'next/app';
import Image from 'next/image';
import '@/styles/global.css';
import Head from 'next/head';

// tailwind
import 'tailwindcss/tailwind.css';

// component
import Menu from '@/components/Menu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TS Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
