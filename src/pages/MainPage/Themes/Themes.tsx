import './Themes.css';

import React from 'react';
import { IconInfo } from '@consta/uikit/IconInfo';
import { Text } from '@consta/uikit/Text';

import { ThemeControls } from '../ThemeControls/ThemeControls';

import { cn } from '@/utils/bem';

const cnThemes = cn('Themes');

export const Themes: React.FC = () => {
  return (
    <section className={cnThemes(null, ['Container Section'])}>
      <Text
        className={cnThemes('Title', ['decorator decorator_indent-t_none decorator_indent-b_2xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Гибкая тематизация
      </Text>
      <Text
        className={cnThemes(null, ['decorator decorator_indent-b_4xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        Наша библиотека Consta обладает гибкой и очень лёгкой тематизацией. Посмотрите и убедитесь
        в этом сами, переключая варианты тем на этой странице.
      </Text>

      <div className={cnThemes('Controls', ['decorator decorator_indent-b_2xl'])}>
        <ThemeControls />
      </div>

      <div className="decorator decorator_distribute_center decorator_vertical_align_baseline">
        <IconInfo size="m" view="secondary" className="decorator decorator_indent-r_m" />
        <Text size="l" view="secondary" as="p">
          {`Подробнее о всех возможностях тематизации можно почитать в нашей `}
          <Text href="#" size="l" view="link" as="a">
            документации
          </Text>
          .
        </Text>
      </div>
    </section>
  );
};
