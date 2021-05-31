// react
import React, { ReactElement } from 'react';

// next
import Link from 'next/link';

// component
import useTranslation from 'next-translate/useTranslation';
import LangButton from './LangButton';

// i18n

type MenuItem = {
  pageName: string;
  pageUrl: string;
};

const MenuList: MenuItem[] = [
  {
    pageName: `home`,
    pageUrl: `/`,
  },
  {
    pageName: `rules`,
    pageUrl: `/rules`,
  },
  {
    pageName: `info`,
    pageUrl: `/info`,
  },
  {
    pageName: `about`,
    pageUrl: `/about`,
  },
];

export default function Menu(): ReactElement {
  const { t } = useTranslation();

  return (
    <div style={{ display: `flex` }}>
      {MenuList.map((menuItem) => (
        <Link key={menuItem.pageName} href={menuItem.pageUrl}>
          <a>{t(`common:${menuItem.pageName}`)}</a>
        </Link>
      ))}
      <LangButton />
    </div>
  );
}
