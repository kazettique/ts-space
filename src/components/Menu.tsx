// react
import React, { ReactElement } from 'react';

// next
import Link from 'next/link';
import { useRouter } from 'next/router';

// i18n
import useTranslation from 'next-translate/useTranslation';

import { MenuAlt1Icon, HomeIcon, DocumentTextIcon, UserCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';

// component
import MenuItem from 'components/MenuItem';
// import LangButton from './LangButton';

type MenuItem = {
  pageName: string;
  pageUrl: string;
  iconComponent: any;
};

const menuList: MenuItem[] = [
  {
    pageName: `home`,
    pageUrl: `/`,
    iconComponent: HomeIcon,
  },
  {
    pageName: `rules`,
    pageUrl: `/rules`,
    iconComponent: DocumentTextIcon,
  },
  {
    pageName: `info`,
    pageUrl: `/info`,
    iconComponent: InformationCircleIcon,
  },
  {
    pageName: `about`,
    pageUrl: `/about`,
    iconComponent: UserCircleIcon,
  },
];

interface propTypes {
  isHome: boolean;
}

const getMenuList = (list: MenuItem[], isHome: boolean): MenuItem[] => (isHome ? list.filter((item) => item.pageName !== `home`) : list);

export default function Menu({ isHome }: propTypes): ReactElement {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  return (
    <>
      {isHome ? (
        <div className="bg-gray-700 rounded-md mt-10 bg-opacity-40">
          {getMenuList(menuList, isHome).map((menuItem) => (
            <MenuItem key={menuItem.pageName}>
              {/* <menuItem.iconComponent className="h-5 w-5 cursor-pointer mr-2" /> */}
              <Link href={menuItem.pageUrl}>
                <a className="block w-full p-5">{t(`common:${menuItem.pageName}`)}</a>
              </Link>
            </MenuItem>
          ))}
          <MenuItem>
            <TranslateIcon className="h-5 w-5 min-w-full m-5" />
          </MenuItem>
        </div>
      ) : (
        <div className="bg-gray-700 rounded-md bg-opacity-90 lg:bg-opacity-40 fixed top-5 right-5 h-16 hover:h-80 transform translate-x-16 lg:translate-x-0 hover:translate-x-0 overflow-hidden duration-500">
          <MenuItem className="p-5">
            <MenuAlt1Icon className="h-5 w-5 lg:min-w-full" />
          </MenuItem>
          {getMenuList(menuList, isHome).map((menuItem) => (
            <MenuItem key={menuItem.pageName} className={menuItem.pageUrl === asPath ? `text-green-300` : ``}>
              <div className="flex items-center">
                <menuItem.iconComponent className="h-5 w cursor-pointer mr-2 absolute left-2" />
                <Link href={menuItem.pageUrl}>
                  <a className="block w-full p-5 pl-9">{t(`common:${menuItem.pageName}`)}</a>
                </Link>
              </div>
            </MenuItem>
          ))}
          {/* <MenuItem>
            <TranslateIcon className="h-5 w-5 min-w-full m-5" />
          </MenuItem> */}
        </div>
      )}
    </>
  );
}
