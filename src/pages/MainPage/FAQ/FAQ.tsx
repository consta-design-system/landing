import './FAQ.css';

import React, { useState } from 'react';
import { IconAdd } from '@consta/uikit/IconAdd';
import { Text } from '@consta/uikit/Text';

import { questions } from './data';

import { cn } from '@/utils/bem';

const cnFAQ = cn('FAQ');

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  const { title, children, className } = props;

  const [isExpand, setExpand] = useState<boolean>(false);

  return (
    <div
      className={cnFAQ('Accordion', { view: !isExpand ? 'collapsed' : 'expanded' }, [className])}
    >
      <div className={cnFAQ('Question')} onClick={() => setExpand(!isExpand)}>
        <Text size="2xl">{title}</Text>
        <IconAdd size="m" view="secondary" className={cnFAQ('CollapseIcon')} />
      </div>
      <div className={cnFAQ('Answer')}>{children}</div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className={cnFAQ(null, ['Container', 'Section'])}>
      <Text
        className={cnFAQ('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Частые вопросы и решения
      </Text>
      <div className={cnFAQ('Questions')}>
        {questions.map((question, index) => {
          const id = `${question.title} ${index}`;
          return (
            <Accordion key={id} title={question.title}>
              {question.answer}
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
