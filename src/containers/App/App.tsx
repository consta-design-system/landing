import './App.css';
import './wtpr.css';

import React, { useEffect } from 'react';
import { cnTheme, Theme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/react';

import { SnackBarContainer } from '@/containers/SnackBarContainer/SnackBarContainer';
import { themeAtom } from '@/modules/theme';
import { cn } from '@/utils/bem';
// закоментировал условие на проверку браузеров
// как сделаем это https://github.com/gazprom-neft/consta-uikit/issues/1156
// обратно раскоментируем
// import { getBrowserCompatibility } from '@/utils/helpers';

const cnApp = cn('App');

// const { browserName, browserVersion, isCompatible } = getBrowserCompatibility();

export const App: React.FC = ({ children }) => {
  const theme = useAtom(themeAtom);

  useEffect(() => {
    const mods = {
      ...theme,
      color: theme.color.primary,
    };

    document.querySelector('html')?.setAttribute('class', cnTheme(mods));
  }, [theme]);

  return (
    <Theme className={cnApp(null, ['theme_gap_large'])} preset={theme}>
      {children}
      <SnackBarContainer />{' '}
    </Theme>
  );

  // return isCompatible ? (
  //   <Theme className={cnApp(null, ['theme_gap_large'])} preset={theme}>
  //     {children}
  //     <SnackBarContainer />
  //   </Theme>
  // ) : (
  //   <div className={cnApp('UpdateBrowser')}>
  //     Ваш браузер {browserName} {browserVersion} устарел и не обеспечивает полноценную и безопасную
  //     работу с сайтом. Пожалуйста, обновите браузер.
  //   </div>
  // );
};
