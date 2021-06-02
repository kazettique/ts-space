// next
import { AppProps } from 'next/app';
import Image from 'next/image';
import '@/styles/global.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

// component
import Menu from 'components/Menu';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isHome = pathname === `/`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed h-screen w-screen overflow-hidden filter blur-sm bg-yellow-800" style={{ zIndex: -2 }}>
        {/* <Image src="/images/living-room.jpg" layout="fill" objectFit="cover" quality={100} /> */}
      </div>
      <div className="fixed h-screen w-screen overflow-hidden bg-gray-900 opacity-30" style={{ zIndex: -1 }} />
      <div className="h-screen w-screen flex justify-center items-center z-20">
        <Component {...pageProps}>
          <Menu isHome={isHome} />
        </Component>
      </div>
    </>
  );
}
