import './HeaderContainer.css';

import React from 'react';
import { useAtom } from '@reatom/react';

import { HeaderFlexible } from '@/components/HeaderFlexible/HeaderFlexible';
import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import IconStorybook from '@/icons/Storybook.icon.svg';
import IconTelegram from '@/icons/Telegram.icon.svg';
import ConstaLogo from '@/images/ConstaLogo2.image.svg';
import GPNLogo from '@/images/GPNLogo.image.svg';
import { constaFigma, constaGitHub, constaTelegram, constaUikitButton } from '@/modules/api/links';
import { fixedAtom } from '@/modules/header';
import { cn } from '@/utils/bem';

const cnHeaderContainer = cn('HeaderContainer');

export const HeaderContainer: React.FC = () => {
  const fixed = useAtom(fixedAtom);
  return (
    <HeaderFlexible
      className={cnHeaderContainer()}
      logo={GPNLogo}
      fixebleLogo={ConstaLogo}
      menu={[
        {
          label: 'Компоненты',
          link: constaUikitButton,
          icon: IconStorybook,
          onlyIcon: false,
        },
        {
          label: 'Figma',
          link: constaFigma,
          icon: IconFigma,
          onlyIcon: false,
        },
        {
          label: 'Github',
          link: constaGitHub,
          icon: IconGithub,
          onlyIcon: false,
        },
        {
          label: 'Telegram',
          link: constaTelegram,
          icon: IconTelegram,
          onlyIcon: true,
        },
      ]}
      fixed={fixed}
    />
  );
};
