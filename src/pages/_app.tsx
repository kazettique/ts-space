// next
import { AppProps } from 'next/app';
import Image from 'next/image';
import '@/styles/global.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

// component
import Menu from 'components/Menu';
import LanguageMenu from '@/components/LanguageMenu';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isHome = pathname === `/`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed h-screen w-screen overflow-hidden filter blur-sm" style={{ zIndex: -2 }}>
        <Image src="/images/living-room.jpg" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="fixed h-screen w-screen overflow-hidden bg-gray-900 opacity-30" style={{ zIndex: -1 }} />
      <div className="overflow-y-scroll h-screen z-20 p-5 lg:p-16">
        <Component {...pageProps}>
          <LanguageMenu isHome={isHome} />
          <Menu isHome={isHome} />
        </Component>
      </div>
    </>
  );
}
