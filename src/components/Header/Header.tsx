import './Header.css';

import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { IconProps } from '@consta/uikit/Icon';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnHeader = cn('Header');

export type HeaderProps = PropsWithHTMLAttributesAndRef<
  {
    logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    logoLink?: string;
    menu?: {
      label: string;
      icon: React.FC<IconProps>;
      link: string;
    }[];
    children?: never;
  },
  HTMLDivElement
>;

export type Header = (props: HeaderProps) => React.ReactElement | null;

export const Header: Header = React.forwardRef((props, ref) => {
  const { logo: Logo, menu, className, logoLink, ...otherProps } = props;

  return (
    <header {...otherProps} ref={ref} className={cnHeader(null, [className])}>
      {Logo &&
        (logoLink ? (
          <a className={cnHeader('Logo')} href={logoLink} target="_blank">
            <Logo />
          </a>
        ) : (
          <div className={cnHeader('Logo')}>
            <Logo />
          </div>
        ))}

      <ul className={cnHeader('Menu')}>
        {menu &&
          menu.map(({ link, label, icon: Icon }, index) => {
            return (
              <li key={index} className={cnHeader('Item')}>
                <Text
                  as="a"
                  size="m"
                  view="primary"
                  href={link}
                  target="_blank"
                  className={cnHeader('Link')}
                >
                  <Icon size="m" className={cnHeader('Icon')} />
                  {label}
                </Text>
              </li>
            );
          })}
      </ul>
    </header>
  );
});
