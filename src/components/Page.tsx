import React, { ReactElement, ReactNode, CSSProperties } from 'react';

interface Props {
  children?: ReactNode | string;
  className?: string;
  style?: CSSProperties;
}

export default function Page({ children, className = ``, style }: Props): ReactElement {
  return (
    <div
      className={`w-full lg:w-4/5 bg-yellow-50 shadow-sm rounded-md p-5 lg:p-16 text-gray-700 h-auto mx-auto bg-opacity-80 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
