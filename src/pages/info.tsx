import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component
import Page from '@/components/Page';
import MapCard from '@/components/MapCard';
import Card from '@/components/Card';

// utils
import { getCombinedHeadName } from '@/utils';

interface Props {
  children: ReactElement | string;
}

export default function info({ children }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{getCombinedHeadName([t(`common:siteTitle`), t(`common:info`)])}</title>
      </Head>
      <Page title={t(`common:info`)}>
        {children}

        {/* Garbage collection location section */}
        <div className="my-4">
          <h3 className="text-lg lg:text-3xl font-semibold">{t(`info:garbageCollection.locationTitle`)}</h3>
        </div>
        <div className="block lg:flex">
          <MapCard
            title={t(`info:garbageCollection.place.no1.place`)}
            address={t(`info:garbageCollection.place.no1.address`)}
            time={t(`info:garbageCollection.place.no1.time`)}
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2820500923403!2d121.52914921545901!3d25.024500544825155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9860a635c79%3A0x9fdd2b7bf40f3ae0!2sNo.%2038%2C%20Taishun%20Street%2C%20Da%E2%80%99an%20District%2C%20Taipei%20City%2C%20106!5e0!3m2!1sen!2stw!4v1622867233532!5m2!1sen!2stw"
            navUrl="https://goo.gl/maps/CkVkA5h3WZfL5jRt8"
          />
          <MapCard
            title={t(`info:garbageCollection.place.no2.place`)}
            address={t(`info:garbageCollection.place.no2.address`)}
            time={t(`info:garbageCollection.place.no2.time`)}
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.6369496739456!2d121.53111660488399!3d25.02226122078823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98f3561b13f%3A0x8633b74d645a3368!2zNy1FTEVWRU4g6ZGr5rOw6ZaA5biC!5e0!3m2!1sen!2stw!4v1622869767057!5m2!1sen!2stw"
            navUrl="https://goo.gl/maps/ppSGNp99xq1T58vPA"
          />
        </div>
        <div className="m-4 font-semibold">
          {t(`info:garbageCollection.latestInfo`)}
          <a className="text-green-500 underline" href="http://www.dep-in.gov.taipei/epb/iframe/trash.aspx" target="_blank" rel="noreferrer">
            {t(`info:garbageCollection.govSite`)}
          </a>
        </div>

        {/* Garbage collection date time section */}
        <div className="my-8">
          <h3 className="text-lg lg:text-3xl font-semibold my-4">{t(`info:garbageCollection.dateTimeTitle`)}</h3>
        </div>
        <div className="block lg:flex">
          <Card header={t(`info:sortType.flammable.name`)} className="w-auto lg:w-1/2">
            <p>{t(`info:sortType.flammable.day`)}</p>
          </Card>
          <Card header={t(`info:sortType.recyclable.name`)} className="w-auto lg:w-1/2">
            <ul className="list-square ml-6">
              <li>
                {t(`info:sortType.recyclable.type1.name`)}: {t(`info:sortType.recyclable.type1.day`)}
              </li>
              <li>
                {t(`info:sortType.recyclable.type2.name`)}: {t(`info:sortType.recyclable.type2.day`)}
              </li>
            </ul>
          </Card>
        </div>

        {/* Cleaning squadron info section */}
        <div className="my-8">
          <h3 className="text-lg lg:text-3xl font-semibold my-4">{t(`info:cleaningSquadron.title`)}</h3>
        </div>
        <MapCard
          title={t(`info:cleaningSquadron.name`)}
          time={t(`info:cleaningSquadron.dateTime`)}
          address={t(`info:cleaningSquadron.address`)}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.343895381705!2d121.5321899154589!3d25.02240089490915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f390111eef6f6ad!2z5Y-w5YyX5biC5aSn5a6J5Y2A5riF5r2U6ZqK5Y-w5aSn5YiG6ZqK!5e0!3m2!1sen!2stw!4v1622881991944!5m2!1sen!2stw"
          navUrl="https://goo.gl/maps/y6EXfMQRF21bnDkY9"
        />

        {/* Wifi info section */}
        <div className="my-8">
          <h3 className="text-lg lg:text-3xl font-semibold my-4">{t(`info:wifi.title`)}</h3>
          <ul className="list-disc ml-4">
            <li>
              <span className="font-semibold">{t(`info:wifi.nameTitle`)}:</span> {t(`info:wifi.name`)}
            </li>
            <li>
              <span className="font-semibold">{t(`info:wifi.passwordTitle`)}:</span> {t(`info:wifi.password`)}
            </li>
          </ul>
        </div>
      </Page>
    </>
  );
}
