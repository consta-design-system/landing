import './FooterForm.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import { TextField } from '@consta/uikit/TextField';
import { useAction, useAtom } from '@reatom/react';

import {
  emailAtom,
  emailStatusAtom,
  loadingAtom,
  messageAtom,
  messageStatusAtom,
  sendAction,
  setEmailAction,
  setMessageAction,
} from '@/modules/form';
import { cn } from '@/utils/bem';

type FooterFormProps = {
  className?: string;
  choldren?: never;
};

const cnFooterForm = cn('FooterForm');

export const FooterForm: React.FC<FooterFormProps> = ({ className }) => {
  const send = useAction(sendAction);
  const email = useAtom(emailAtom);
  const message = useAtom(messageAtom);
  const messageStatus = useAtom(messageStatusAtom);
  const loading = useAtom(loadingAtom);
  const emailStatus = useAtom(emailStatusAtom);
  const setEmail = useAction(setEmailAction);
  const setMessage = useAction(setMessageAction);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
      className={cnFooterForm(null, [className])}
    >
      <TextField
        size="l"
        type="textarea"
        minRows={3}
        maxRows={5}
        placeholder="Здесь можно задать вопрос о дизайн-системе или просто написать её разработчикам"
        className={cnFooterForm('Textarea', ['decorator decorator_indent-b_m'])}
        value={message}
        onChange={({ value }) => setMessage(value)}
        state={messageStatus || undefined}
      />
      <div className={cnFooterForm('EmailPlusSubmit')}>
        <TextField
          size="l"
          placeholder="Эл. почта"
          form="defaultClear"
          className={cnFooterForm('Email', ['decorator decorator_indent-b_m'])}
          value={email}
          onChange={({ value }) => setEmail(value)}
          state={emailStatus || undefined}
        />
        <Button
          size="l"
          form="brickDefault"
          iconRight={IconForward}
          label="Отправить"
          loading={loading}
        />
      </div>
    </form>
  );
};
