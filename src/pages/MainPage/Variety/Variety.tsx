import './Variety.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { constaUikitButton } from '@/modules/api/links';
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
        Используйте готовые компоненты
      </Text>
      <Text
        className={cnVariety(null, ['decorator decorator_indent-b_4xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        Основа, из которой легко построить интерфейс — для любых задач. Большой выбор, много
        вариантов, можно менять и дорабатывать. <br />
        Посмотреть, как выглядят и работают компоненты дизайн-системы, можно в нашей{' '}
        <Text size="2xl" view="link" as="a" href={constaUikitButton}>
          библиотеке
        </Text>
      </Text>
    </section>
  );
};
