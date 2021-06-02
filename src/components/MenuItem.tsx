import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement | string;
  isHome?: boolean;
  className?: string;
  IconComponent?: any;
}

export default function MenuItem({ children, isHome = false, className, IconComponent = null }: Props): ReactElement {
  return (
    <div
      className={`hover:bg-gray-500 text-gray-50 hover:text-yellow-300 cursor-pointer rounded-md duration-300 hover:bg-opacity-40 uppercase text-center flex justify-center ${className}`}
    >
      {/* {IconComponent && <IconComponent className="h-5 w-5 m-5 text-green-300" />} */}
      {children}
    </div>
  );
}
