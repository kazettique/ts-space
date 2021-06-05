// react
import React, { ReactElement } from 'react';

// i18n
import useTranslation from 'next-translate/useTranslation';

export default function MachineTranslation(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-8 md:mt-16 p-2 md:p-4 rounded-md bg-yellow-100 text-red-500 font-bold">
      {t(`common:machineTranslationMessage`)}
    </div>
  );
}
