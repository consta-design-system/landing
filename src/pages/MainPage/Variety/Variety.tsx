import './Variety.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnVariety = cn('Variety');

export const Variety: React.FC = () => {
  return (
    <section className={cnVariety(null, ['Container Section'])}>
      <Text
        className={cnVariety('Title', ['decorator decorator_indent-t_none decorator_indent-b_2xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Широкая вариативность
      </Text>
      <Text
        className={cnVariety(null, ['decorator decorator_indent-b_4xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        Наша библиотека Consta обладает гибкой и очень лёгкой тематизацией. Посмотрите и убедитесь
        в этом сами, переключая варианты тем на этой странице.
      </Text>
    </section>
  );
};
