import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children?: ReactNode | string;
  className?: string;
}

export default function MenuItem({ children, className }: Props): ReactElement {
  return (
    <div
      className={`hover:bg-gray-500 text-gray-50 hover:text-yellow-300 cursor-pointer rounded-md duration-300 hover:bg-opacity-40 uppercase text-center flex items-center ${className}`}
    >
      {children}
    </div>
  );
}
