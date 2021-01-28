import './Header.css';

import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { IconProps } from '@consta/uikit/Icon';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnHeader = cn('Header');

export type HeaderProps = PropsWithHTMLAttributesAndRef<
  {
    logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    menu: {
      label: string;
      icon: React.FC<IconProps>;
      link: string;
      onlyIcon: boolean;
    }[];
    children?: never;
  },
  HTMLDivElement
>;

export type Header = (props: HeaderProps) => React.ReactElement | null;

export const Header: Header = React.forwardRef((props, ref) => {
  const { logo: Logo, menu, className, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className={cnHeader(null, [className])}>
      <div className={cnHeader('Logo')}>
        <Logo />
      </div>
      <ul className={cnHeader('Menu')}>
        {menu.map(({ link, label, onlyIcon, icon: Icon }, index) => {
          return (
            <li key={index} className={cnHeader('Item')}>
              <Text
                as="a"
                size="m"
                view="primary"
                href={link}
                className={cnHeader('Link', { onlyIcon: onlyIcon })}
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
