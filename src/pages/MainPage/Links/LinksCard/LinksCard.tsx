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
    hrefKit: string;
    hrefWidgets: string;
    target: string;
  },
  'div'
>;

export const LinksCard: React.FC<Props> = (props) => {
  const {
    className,
    view,
    title,
    description,
    icon: Icon,
    hrefKit,
    hrefWidgets,
    ...otherProps
  } = props;
  const toClipboard = useAction(toClipboardAction);
  const copyLink: ((event: React.MouseEvent<Element, MouseEvent>) => void) | undefined = hrefKit
    ? (e) => {
        e.preventDefault();
        toClipboard({ copiedText: hrefKit, message: 'Ссылка скопирована' });
      }
    : undefined;
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
            Kit
            <IconForward
              className={cnLinksCard('Arrow', ['decorator decorator_indent-l_m'])}
              size="m"
              view="primary"
            />
          </Text>
        </a>
        <a className={cnLinksCard('Brick')} href={hrefWidgets} target="_blank">
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
            Widgets
            <IconForward
              className={cnLinksCard('Arrow', ['decorator decorator_indent-l_m'])}
              size="m"
              view="primary"
            />
          </Text>
        </a>
      </div>
    </div>
  );
};
