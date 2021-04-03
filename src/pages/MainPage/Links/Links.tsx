import './Links.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';

import { LinksCard } from './LinksCard/LinksCard';

import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import IconStorybook from '@/icons/Storybook.icon.svg';
import {
  constaFigma,
  constaGitHub,
  constaUikitButton,
  constaWidgetsBarChart,
  constaWidgetsFigma,
  constaWidgetsGitHub,
} from '@/modules/api/links';
import { cn } from '@/utils/bem';

export const cnLinks = cn('Links');

export const Links: React.FC = () => {
  const { themeClassNames } = useTheme();

  return (
    <section className={cnLinks(null, ['Container', 'Section'])}>
      <Text
        className={cnLinks('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Берите и пользуйтесь
      </Text>
      <div className={cnLinks('List')}>
        <div className="tpl-grid tpl-grid_m-ratio_1-1-1">
          <LinksCard
            className={themeClassNames.color.accent}
            view="storybook"
            icon={IconStorybook}
            title="Витрина компонентов и документация"
            hrefKit={constaUikitButton}
            hrefWidgets={constaWidgetsBarChart}
            target="_blank"
            description="Посмотрите, как выглядят компоненты, как они меняются и прочитайте, где и когда их лучше использовать."
          />
          <LinksCard
            className={themeClassNames.color.invert}
            view="figma"
            icon={IconFigma}
            title="Библиотека в Figma"
            hrefKit={constaFigma}
            hrefWidgets={constaWidgetsFigma}
            target="_blank"
            description="Набор компонентов для создания макетов проекта в Figma Community. Отправьте эту ссылку дизайнеру — он разберётся."
          />
          <LinksCard
            className={themeClassNames.color.invert}
            view="github"
            icon={IconGithub}
            title="React-библиотека"
            hrefKit={constaGitHub}
            hrefWidgets={constaWidgetsGitHub}
            target="_blank"
            description="NPM-пакет с библиотекой на React, TypeScript и PostCSS. Отправьте эту ссылку фронтенд разработчику — он знает, что с ней делать."
          />
        </div>
      </div>
    </section>
  );
};
