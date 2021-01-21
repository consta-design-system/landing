import './Footer.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';

import { cn } from '@/utils/bem';

const cnFooter = cn('Footer');

export const Footer: React.FC = () => {
  return (
    <section className={cnFooter(null, ['Section_space_small'])}>
      <div className="Container">
        <Text
          className={cnFooter('Title', ['decorator decorator_indent-t_3xl decorator_indent-b_2xl'])}
          size="3xl"
          weight="bold"
          as="h2"
          lineHeight="2xs"
        >
          Остались вопросы?
        </Text>
        <div className="tpl-grid tpl-grid_m-columns_8 tpl-grid_l-columns_12 tpl-grid_col-gap_full decorator decorator_indent-b_6xl">
          <form
            className={cnFooter('Form', ['tpl-grid__fraction_m-col_5 tpl-grid__fraction_l-col_7'])}
          >
            <TextField
              // TODO Надо сделать в 3 строки, но у меня не получилось
              size="l"
              type="textarea"
              rows={3}
              placeholder="Здесь можно задать вопрос о дизайн-системе или просто написать её разработчикам"
              className={cnFooter('Textarea', ['decorator decorator_indent-b_m'])}
            />
            <div className={cnFooter('EmailPlusSubmit')}>
              <TextField
                size="l"
                placeholder="Эл. почта"
                form="defaultClear"
                className={cnFooter('Email', ['decorator decorator_indent-b_m'])}
              />
              <Button size="l" form="brickDefault" iconRight={IconForward} label="Отправить" />
            </div>
          </form>
          <Text
            className={cnFooter('Text', ['tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_5'])}
            size="2xl"
            view="secondary"
            as="p"
          >
            {'Напишите нам на '}
            <Text as="a" href="mailto:design@gazprom-neft.ru" size="2xl" view="link">
              {'design@gazprom-neft.ru '}
            </Text>
            или через форму слева
          </Text>
        </div>
        <div className={cnFooter('Copyright')}>
          <Text
            className={cnFooter('Text', ['tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_5'])}
            size="m"
            view="secondary"
            as="p"
          >
            © 2020-2021 ПАО «Газпром нефть»
          </Text>
        </div>
      </div>
    </section>
  );
};
