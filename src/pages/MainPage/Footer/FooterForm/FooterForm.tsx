import './FooterForm.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import { TextField } from '@consta/uikit/TextField';

import { cn } from '@/utils/bem';

type FooterFormProps = {
  className?: string;
  choldren?: never;
};

const cnFooterForm = cn('FooterForm');

export const FooterForm: React.FC<FooterFormProps> = ({ className }) => {
  return (
    <form className={cnFooterForm(null, [className])}>
      <TextField
        size="l"
        type="textarea"
        minRows={3}
        maxRows={5}
        placeholder="Здесь можно задать вопрос о дизайн-системе или просто написать её разработчикам"
        className={cnFooterForm('Textarea', ['decorator decorator_indent-b_m'])}
      />
      <div className={cnFooterForm('EmailPlusSubmit')}>
        <TextField
          size="l"
          placeholder="Эл. почта"
          form="defaultClear"
          className={cnFooterForm('Email', ['decorator decorator_indent-b_m'])}
        />
        <Button size="l" form="brickDefault" iconRight={IconForward} label="Отправить" />
      </div>
    </form>
  );
};
