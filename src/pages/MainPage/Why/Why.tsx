import './Why.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { WhyReason } from './WhyReason/WhyReason';

import Reason1_1x_dark from '@/images/Reasons/Dark/Reason_1_1x.jpg';
import Reason1_2x_dark from '@/images/Reasons/Dark/Reason_1_2x.jpg';
import Reason1_3x_dark from '@/images/Reasons/Dark/Reason_1_3x.jpg';
import Reason2_1x_dark from '@/images/Reasons/Dark/Reason_2_1x.jpg';
import Reason2_2x_dark from '@/images/Reasons/Dark/Reason_2_2x.jpg';
import Reason2_3x_dark from '@/images/Reasons/Dark/Reason_2_3x.jpg';
import Reason3_1x_dark from '@/images/Reasons/Dark/Reason_3_1x.jpg';
import Reason3_2x_dark from '@/images/Reasons/Dark/Reason_3_2x.jpg';
import Reason3_3x_dark from '@/images/Reasons/Dark/Reason_3_3x.jpg';
import Reason4_1x_dark from '@/images/Reasons/Dark/Reason_4_1x.jpg';
import Reason4_2x_dark from '@/images/Reasons/Dark/Reason_4_2x.jpg';
import Reason4_3x_dark from '@/images/Reasons/Dark/Reason_4_3x.jpg';
import Reason1_1x_default from '@/images/Reasons/Default/Reason_1_1x.jpg';
import Reason1_2x_default from '@/images/Reasons/Default/Reason_1_2x.jpg';
import Reason1_3x_default from '@/images/Reasons/Default/Reason_1_3x.jpg';
import Reason2_1x_default from '@/images/Reasons/Default/Reason_2_1x.jpg';
import Reason2_2x_default from '@/images/Reasons/Default/Reason_2_2x.jpg';
import Reason2_3x_default from '@/images/Reasons/Default/Reason_2_3x.jpg';
import Reason3_1x_default from '@/images/Reasons/Default/Reason_3_1x.jpg';
import Reason3_2x_default from '@/images/Reasons/Default/Reason_3_2x.jpg';
import Reason3_3x_default from '@/images/Reasons/Default/Reason_3_3x.jpg';
import Reason4_1x_default from '@/images/Reasons/Default/Reason_4_1x.jpg';
import Reason4_2x_default from '@/images/Reasons/Default/Reason_4_2x.jpg';
import Reason4_3x_default from '@/images/Reasons/Default/Reason_4_3x.jpg';
import Reason1_1x_display from '@/images/Reasons/Display/Reason_1_1x.jpg';
import Reason1_2x_display from '@/images/Reasons/Display/Reason_1_2x.jpg';
import Reason1_3x_display from '@/images/Reasons/Display/Reason_1_3x.jpg';
import Reason2_1x_display from '@/images/Reasons/Display/Reason_2_1x.jpg';
import Reason2_2x_display from '@/images/Reasons/Display/Reason_2_2x.jpg';
import Reason2_3x_display from '@/images/Reasons/Display/Reason_2_3x.jpg';
import Reason3_1x_display from '@/images/Reasons/Display/Reason_3_1x.jpg';
import Reason3_2x_display from '@/images/Reasons/Display/Reason_3_2x.jpg';
import Reason3_3x_display from '@/images/Reasons/Display/Reason_3_3x.jpg';
import Reason4_1x_display from '@/images/Reasons/Display/Reason_4_1x.jpg';
import Reason4_2x_display from '@/images/Reasons/Display/Reason_4_2x.jpg';
import Reason4_3x_display from '@/images/Reasons/Display/Reason_4_3x.jpg';
import { cn } from '@/utils/bem';

const cnWhy = cn('Why');

export const Why: React.FC = () => {
  return (
    <section className={cnWhy(null, ['Container Section'])}>
      <Text
        className={cnWhy('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Зачем вам дизайн&#8209;система?
      </Text>
      <div className="tpl-grid tpl-grid_m-ratio_1-1 tpl-grid_col-gap_full tpl-grid_row-gap_full">
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': Reason1_1x_default,
                '2x': Reason1_2x_default,
                '4x': Reason1_3x_default,
              },
              gpnDark: {
                '1x': Reason1_1x_dark,
                '2x': Reason1_2x_dark,
                '4x': Reason1_3x_dark,
              },
              gpnDisplay: {
                '1x': Reason1_1x_display,
                '2x': Reason1_2x_display,
                '4x': Reason1_3x_display,
              },
            },
          }}
          lead="Запускать продукты быстрее и дешевле. "
          text="Часть работы по созданию интерфейса уже сделана — в рамках нашей дизайн‑системы."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': Reason2_1x_default,
                '2x': Reason2_2x_default,
                '4x': Reason2_3x_default,
              },
              gpnDark: {
                '1x': Reason2_1x_dark,
                '2x': Reason2_2x_dark,
                '4x': Reason2_3x_dark,
              },
              gpnDisplay: {
                '1x': Reason2_1x_display,
                '2x': Reason2_2x_display,
                '4x': Reason2_3x_display,
              },
            },
          }}
          lead="Просто проверять гипотезы. "
          text="Вы сможете собрать прототип интерфейса, показать пользователям и проверить, что в интерфейсе всё понятно — до начала разработки."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': Reason3_1x_default,
                '2x': Reason3_2x_default,
                '4x': Reason3_3x_default,
              },
              gpnDark: {
                '1x': Reason3_1x_dark,
                '2x': Reason3_2x_dark,
                '4x': Reason3_3x_dark,
              },
              gpnDisplay: {
                '1x': Reason3_1x_display,
                '2x': Reason3_2x_display,
                '4x': Reason3_3x_display,
              },
            },
          }}
          lead="Только лучшие практики. "
          text="Мы проверяем работу компонентов в реальных продуктах нашей компании и выбираем наилучшие варианты. Постоянно добавляем в библиотеку новые компоненты и улучшаем то, что есть."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': Reason4_1x_default,
                '2x': Reason4_2x_default,
                '4x': Reason4_3x_default,
              },
              gpnDark: {
                '1x': Reason4_1x_dark,
                '2x': Reason4_2x_dark,
                '4x': Reason4_3x_dark,
              },
              gpnDisplay: {
                '1x': Reason4_1x_display,
                '2x': Reason4_2x_display,
                '4x': Reason4_3x_display,
              },
            },
          }}
          lead="Довольные пользователи. "
          text="Проще осваивать новое, когда продукты компании выглядят похоже и построены по сходным принципам. А вам — меньше доработок и затрат на поддержку продукта."
        />
      </div>
    </section>
  );
};
