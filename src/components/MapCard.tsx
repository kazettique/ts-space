// react
import React, { ReactElement, CSSProperties } from 'react';

// i18n
import useTranslation from 'next-translate/useTranslation';

interface Props {
  title?: string;
  address?: string;
  time?: string;
  mapUrl?: string;
  navUrl?: string;
  className?: string;
  style?: CSSProperties;
}

export default function MapCard({ title = ``, address = ``, time = ``, mapUrl = ``, navUrl = ``, className = ``, style }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <div className={`rounded-md shadow-lg bg-green-50 p-6 m-4 ${className}`} style={style}>
      {title && <p className="text-lg font-semibold mb-4">{title}</p>}
      {address && <p className="text-green-700 mb-4">{address}</p>}
      {time && <p className="text-green-700 mb-4">{time}</p>}
      {mapUrl && (
        <div className="shadow-md my-2">
          <iframe
            title="googleMap1"
            src={mapUrl}
            width="auto"
            height="300"
            style={{ border: 0, width: `100%` }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      )}
      {navUrl && (
        <div className="bg-green-800 hover:bg-green-600 duration-300 cursor-pointer mt-6 rounded-lg shadow-md text-center text-lg text-gray-100">
          <a className="block w-full py-2" href={navUrl} target="_blank" rel="noreferrer">
            {t(`common:navigate`)}
          </a>
        </div>
      )}
    </div>
  );
}
