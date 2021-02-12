import { declareAction, declareAtom } from '@reatom/core';

import { sendFormData } from '@/modules/api/form';
import { addSnackAction, removeSnackAction } from '@/modules/snackBar';
import { createFetchAction, declareDataAtom, declareLoadingAtom, n } from '@/utils/reatom';
import { isValidEmail } from '@/utils/strings/regex';

type Status = 'alert' | 'success' | 'warning' | '';

const nForm = n('form');

export const [sendStatusActions, sendFetchAction] = createFetchAction(nForm('send'), sendFormData);

export const loadingAtom = declareLoadingAtom(nForm('loading'), sendStatusActions);
export const dataAtom = declareDataAtom(nForm('data'), sendStatusActions);

export const setEmailAction = declareAction<string | null>(nForm('setEmail'));
export const emailAtom = declareAtom<string | null>(nForm('email'), null, (on) =>
  on(setEmailAction, (state, value) => value),
);

export const setMessageAction = declareAction<string | null>(nForm('setMessage'));
export const messageAtom = declareAtom<string | null>(nForm('message'), null, (on) =>
  on(setMessageAction, (state, value) => value),
);

export const setEmailStatusAction = declareAction<Status | ''>(nForm('setEmailStatus'));
export const emailStatusAtom = declareAtom<Status>(nForm('emailStatus'), '', (on) => [
  on(setEmailStatusAction, (state, status) => status),
  on(setEmailAction, () => ''),
]);

export const setMessageStatusAction = declareAction<Status | ''>(nForm('setMessageStatus'));
export const messageStatusAtom = declareAtom<Status>(nForm('messageStatus'), '', (on) => [
  on(setMessageStatusAction, (state, status) => status),
  on(setMessageAction, () => ''),
]);

export const sendAction = declareAction(nForm('send'), (payload, store) => {
  const email = store.getState(emailAtom);
  const message = store.getState(messageAtom);

  let error = false;

  if (!message) {
    error = true;
    store.dispatch(setMessageStatusAction('alert'));
  }

  if (!email || !isValidEmail(email)) {
    error = true;
    store.dispatch(setEmailStatusAction('alert'));
  }

  if (!error && email && message) {
    const unsubscribe = store.subscribe(({ type }) => {
      switch (type) {
        case sendStatusActions.success.getType(): {
          store.dispatch(
            addSnackAction({
              message: 'Письмо отправлено. Вам ответят в ближайшее время',
              onClose: (item) => store.dispatch(removeSnackAction(item.key)),
              status: 'success',
            }),
          );
          store.dispatch(setEmailAction(null));
          store.dispatch(setMessageAction(null));
          break;
        }
        case sendStatusActions.failure.getType(): {
          store.dispatch(
            addSnackAction({
              message: 'Не удалось отправить письмо. Попробуйте позже',
              onClose: (item) => store.dispatch(removeSnackAction(item.key)),
              status: 'alert',
            }),
          );
          break;
        }
        case sendStatusActions.finally.getType(): {
          unsubscribe();
          break;
        }
      }
    });

    store.dispatch(sendFetchAction({ email, message }));
  }
});
