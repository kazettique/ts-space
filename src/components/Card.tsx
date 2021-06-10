import React, { ReactElement, ReactNode, CSSProperties } from 'react';

interface Props {
  header?: ReactNode | string;
  body?: ReactNode | string;
  footer?: ReactNode | string;
  children?: ReactNode | string;
  className?: string;
  style?: CSSProperties;
}

export default function Card({ header, body, footer, children, className, style = {} }: Props): ReactElement {
  return (
    <div className={`rounded-md shadow-lg bg-green-50 p-6 m-4 flex flex-col ${className}`} style={style}>
      {header && <div className="text-lg font-semibold mb-4">{header}</div>}
      {body && <div className="text-green-700 mb-4 flex-grow">{body}</div>}
      {children && <div className="text-green-700 mb-4 flex-grow">{children}</div>}
      {footer && <div className="text-green-700">{footer}</div>}
    </div>
  );
}
