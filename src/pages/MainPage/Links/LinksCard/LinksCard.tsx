import './LinksCard.css';

import React from 'react';
import { PropsWithJsxAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithJsxAttributes';
import { Button } from '@consta/uikit/Button';
import { IconProps } from '@consta/uikit/Icon';
import { IconCopy } from '@consta/uikit/IconCopy';
import { IconForward } from '@consta/uikit/IconForward';
import { Text } from '@consta/uikit/Text';
import { withTooltip } from '@consta/uikit/withTooltip';
import { useAction } from '@reatom/react';

import { toClipboardAction } from '@/modules/clipboard';
import { cn } from '@/utils/bem';

export const cnLinksCard = cn('LinksCard');

const ButtonCopyLink = withTooltip({ content: 'Копировать ссылку' })(Button);

type Props = PropsWithJsxAttributes<
  {
    view: 'storybook' | 'figma' | 'github';
    title: string;
    description: string;
    icon: React.FC<IconProps>;
    children?: never;
  },
  'a'
>;

export const LinksCard: React.FC<Props> = (props) => {
  const { className, view, title, description, icon: Icon, href, ...otherProps } = props;
  const toClipboard = useAction(toClipboardAction);
  const copyLink: ((event: React.MouseEvent<Element, MouseEvent>) => void) | undefined = href
    ? (e) => {
        e.preventDefault();
        toClipboard({ copiedText: href, message: 'Ссылка скопирована' });
      }
    : undefined;
  return (
    <a {...otherProps} href={href} className={cnLinksCard({ view }, [className])}>
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
        <ButtonCopyLink
          size="s"
          view="clear"
          iconLeft={IconCopy}
          iconSize="m"
          onlyIcon
          onClick={copyLink}
        />
        <Text
          className={cnLinksCard('More', [
            'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
          ])}
          size="l"
          as="span"
        >
          Смотреть
          <IconForward
            className={cnLinksCard('Arrow', ['decorator decorator_indent-l_m'])}
            size="m"
            view="primary"
          />
        </Text>
      </div>
    </a>
  );
};
