import './HeaderFlexible.css';

import React from 'react';

import { Header, HeaderProps } from '@/components/Header/Header';
import { cn } from '@/utils/bem';

export type HeaderFlexibleProps = {
  fixed: boolean;
  fixebleLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & HeaderProps;

const cnHeaderFlexible = cn('HeaderFlexible');

export const HeaderFlexible: React.FC<HeaderFlexibleProps> = (props) => {
  const { logo, menu, fixed, fixebleLogo, className, ...otherProps } = props;
  return (
    <>
      <Header
        {...otherProps}
        className={cnHeaderFlexible('Visible', [className])}
        logo={logo}
        menu={menu}
      />
      <Header
        {...otherProps}
        className={cnHeaderFlexible('Fixeble', { fixed }, [className])}
        logo={fixebleLogo || logo}
        menu={menu}
      />
    </>
  );
};
