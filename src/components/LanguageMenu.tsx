import React, { ReactElement } from 'react';

// next
import { useRouter } from 'next/router';
import Link from 'next/link';

// component
import { TranslateIcon } from '@heroicons/react/solid';
import MenuItem from '@/components/MenuItem';

type LanguageMenuItem = {
  locale: string;
  languageName: string;
};

const languageMenuList: LanguageMenuItem[] = [
  {
    locale: `en-US`,
    languageName: `English`,
  },
  {
    locale: `zh-TW`,
    languageName: `繁體中文`,
  },
  {
    locale: `zh-CN`,
    languageName: `簡體中文`,
  },
];

interface Props {
  isHome?: boolean;
}

export default function LanguageMenu({ isHome = false }: Props): ReactElement {
  const { locales, asPath } = useRouter();

  return (
    <>
      {isHome && (
        <>
          <div className="bg-gray-700 rounded-md bg-opacity-90 lg:bg-opacity-40 fixed top-5 left-5 h-16 hover:h-64 transform -translate-x-16 lg:translate-x-0 hover:translate-x-0 overflow-hidden duration-500">
            <MenuItem className="p-5">
              <TranslateIcon className="h-5 w-5 lg:min-w-full ml-auto" />
            </MenuItem>
            {languageMenuList.map(
              (item) =>
                locales?.includes(item.locale) && (
                  <MenuItem key={item.locale}>
                    <Link href={asPath} locale={item.locale}>
                      <a className="block w-full p-5">{item.languageName}</a>
                    </Link>
                  </MenuItem>
                ),
            )}
          </div>
        </>
      )}
    </>
  );
}
