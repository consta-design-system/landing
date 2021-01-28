import './Example.css';

import React, { useState } from 'react';
import { Badge } from '@consta/uikit/Badge';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { IconBookmarkStroked } from '@consta/uikit/IconBookmarkStroked';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { useTheme } from '@consta/uikit/Theme';

import { cn } from '@/utils/bem';

const cnExample = cn('Example');

type ItemCG = string;

const CG = ['Выбери меня', 'Нет, меня'];

export const Example: React.FC = () => {
  const { themeClassNames } = useTheme();
  const [valueCG, setValueCG] = useState<ItemCG | null>(CG[0]);

  return (
    <div className={cnExample()}>
      <header className={cnExample('Header', [themeClassNames.color.accent])}>
        <div className="decorator decorator_distribute_between decorator_vertical-align_center">
          <Badge size="l" view="filled" status="success" form="round" label="Статус" />
          <Button
            view="clear"
            size="s"
            iconLeft={IconBookmarkStroked}
            iconSize="m"
            label="Добавить в избранное"
            onlyIcon
          />
        </div>
        <Text size="3xl" weight="bold" as="h3" lineHeight="xs" className={cnExample('Title')}>
          Заголовок
        </Text>
      </header>
      <div className={cnExample('Main')}>
        <Text
          size="xl"
          as="p"
          view="secondary"
          lineHeight="s"
          className={cnExample('Description', ['decorator decorator_indent-b_xl'])}
        >
          Эта карточка просто абстрактный пример интерфейса.
        </Text>
        <ChoiceGroup
          name="CG"
          value={valueCG}
          onChange={({ value }) => setValueCG(value)}
          items={CG}
          getLabel={(item) => item}
          view="secondary"
          size="l"
          multiple={false}
          width="full"
          className="decorator decorator_indent-b_m"
        />
        <div className="decorator decorator_distribute_between distribute_vertical-align_center decorator_indent-b_2xl">
          <TextField
            size="l"
            placeholder="Допустим длина"
            rightSide="м"
            width="full"
            form="defaultClear"
            style={{ width: '50%' }}
          />
          <TextField
            size="l"
            placeholder="и вес"
            rightSide="кг"
            width="full"
            form="brickDefault"
            style={{ width: '50%' }}
          />
        </div>
        <Button size="l" label="Нажми на кнопку" width="full" />
      </div>
    </div>
  );
};
