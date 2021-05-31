// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>TS Space | Home</title>
      </Head>
      <h1>{t(`home:greeting`)}</h1>
    </>
  );
}
