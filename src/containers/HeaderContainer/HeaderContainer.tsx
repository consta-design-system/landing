import './HeaderContainer.css';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/react';

import { HeaderFlexible } from '@/components/HeaderFlexible/HeaderFlexible';
import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import IconStorybook from '@/icons/Storybook.icon.svg';
import IconTelegram from '@/icons/Telegram.icon.svg';
import ConstaLogo from '@/images/ConstaLogo2.image.svg';
import GPNLogo from '@/images/GPNLogo.image.svg';
import {
  constaGitHub,
  constaTelegram,
  constaUikitButton,
  contsaCommunityFigma,
  gazPromNeft,
} from '@/modules/api/links';
import { fixedAtom } from '@/modules/header';
import { cn } from '@/utils/bem';

const cnHeaderContainer = cn('HeaderContainer');

const mapLogoConstaColors: { [key: string]: string } = {
  gpnDefault: 'var(--color-typo-link)',
  gpnDark: 'var(--color-typo-primary)',
  gpnDisplay: 'var(--color-typo-primary)',
  altDefault: 'var(--color-typo-link)',
  altDark: 'var(--color-typo-primary)',
  altDisplay: 'var(--color-typo-primary)',
  alt2Default: 'var(--color-typo-link)',
  alt2Dark: 'var(--color-typo-primary)',
  alt2Display: 'var(--color-typo-primary)',
};

const logoMap: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
} = {
  gpnDefault: GPNLogo,
  altDefault: GPNLogo,
  alt2Default: GPNLogo,
};

export const HeaderContainer: React.FC = () => {
  const fixed = useAtom(fixedAtom);
  const { theme } = useTheme();
  const visibleHeadrerRef = useRef<HTMLDivElement>(null);
  const fixebleHeadrerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fixebleHeadrerRef.current?.style.setProperty(
      '--logo-color',
      mapLogoConstaColors[theme.color.primary],
    );
  }, [theme]);

  const VisibleHeadrerLogo = logoMap[theme.color.primary];

  return (
    <HeaderFlexible
      className={cnHeaderContainer()}
      logo={VisibleHeadrerLogo}
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
          link: contsaCommunityFigma,
          icon: IconFigma,
          onlyIcon: false,
        },
        {
          label: 'GitHub',
          link: constaGitHub,
          icon: IconGithub,
          onlyIcon: false,
        },
        {
          label: 'Новости в Telegram',
          link: constaTelegram,
          icon: IconTelegram,
          onlyIcon: false,
        },
      ]}
      fixed={fixed}
      visibleHeadrer={{ ref: visibleHeadrerRef, logoLink: gazPromNeft }}
      fixebleHeadrer={{ ref: fixebleHeadrerRef }}
    />
  );
};
