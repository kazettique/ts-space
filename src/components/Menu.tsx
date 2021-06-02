// react
import React, { ReactElement, useState } from 'react';

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isHome ? (
        <div className="bg-gray-700 rounded-md mt-10 bg-opacity-40">
          {getMenuList(menuList, isHome).map((menuItem) => (
            <MenuItem key={menuItem.pageName} isHome>
              <Link href={menuItem.pageUrl}>
                <a className="min-w-full p-5">{t(`common:${menuItem.pageName}`)}</a>
              </Link>
            </MenuItem>
          ))}
          {/* <MenuItem>
            <TranslateIcon className="h-5 w-5 min-w-full m-5" />
          </MenuItem> */}
        </div>
      ) : (
        <div className="bg-gray-700 rounded-md bg-opacity-40 fixed top-5 right-5 h-16 hover:h-80 overflow-hidden duration-500">
          <MenuItem>
            <MenuAlt1Icon className="h-5 w-5 min-w-full m-5" />
          </MenuItem>
          {getMenuList(menuList, isHome).map((menuItem) => (
            <MenuItem
              key={menuItem.pageName}
              isHome={false}
              className={menuItem.pageUrl === asPath ? `text-green-300` : ``}
              IconComponent={menuItem.iconComponent}
            >
              <Link href={menuItem.pageUrl}>
                <a className="min-w-full p-5">{t(`common:${menuItem.pageName}`)}</a>
              </Link>
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
