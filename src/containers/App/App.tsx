import './App.css';
import './wtpr.css';

import React, { useEffect } from 'react';
import { cnTheme, Theme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/react';

import { SnackBarContainer } from '@/containers/SnackBarContainer/SnackBarContainer';
import { themeAtom } from '@/modules/theme';
import { cn } from '@/utils/bem';

const cnApp = cn('App');

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
      <SnackBarContainer />
    </Theme>
  );
};
