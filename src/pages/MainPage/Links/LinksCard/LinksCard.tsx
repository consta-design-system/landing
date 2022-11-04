import './LinksCard.css';

import React from 'react';
import { PropsWithJsxAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithJsxAttributes';
import { IconProps } from '@consta/uikit/Icon';
import { IconOpenInNew } from '@consta/uikit/IconOpenInNew';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

export const cnLinksCard = cn('LinksCard');

type Props = PropsWithJsxAttributes<
  {
    view: 'storybook' | 'figma' | 'github';
    title: string;
    description: string;
    icon: React.FC<IconProps>;
    children?: never;
    hrefKit: string;
  },
  'div'
>;

export const LinksCard: React.FC<Props> = (props) => {
  const { className, view, title, description, icon: Icon, hrefKit, ...otherProps } = props;

  return (
    <div {...otherProps} className={cnLinksCard({ view }, [className])}>
      <div className={cnLinksCard('Content')}>
        <Icon size="m" view="primary" className={cnLinksCard('Logo')} />
        <Text
          className={cnLinksCard('Title', ['decorator decorator_indent-b_s'])}
          size="xl"
          weight="bold"
          lineHeight="s"
        >
          {title}
        </Text>
        <Text
          className={cnLinksCard('Description', ['decorator decorator_indent-b_xl'])}
          size="l"
          as="p"
        >
          {description}
        </Text>
      </div>
      <div className={cnLinksCard('Footer')}>
        <a className={cnLinksCard('Brick')} href={hrefKit} target="_blank">
          <Text
            className={cnLinksCard('More', [
              'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
            ])}
            size="l"
            as="span"
          >
            Consta Kit
          </Text>
          <IconOpenInNew className={cnLinksCard('Arrow')} size="m" view="primary" />
        </a>
      </div>
    </div>
  );
};
