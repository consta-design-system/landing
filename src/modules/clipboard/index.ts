import { declareAction, Store } from '@reatom/core';

import { addSnackAction, removeSnackAction } from '@/modules/snackBar';
import { n } from '@/utils/reatom';

const nClipboard = n('clipboard');

export const toClipboardAction = declareAction<{ copiedText: string; message: string }>(
  nClipboard('toClipboard'),
  async ({ copiedText, message }, store: Store) => {
    try {
      await navigator.clipboard.writeText(copiedText);
      store.dispatch(
        addSnackAction({
          message,
          autoClose: true,
          onClose: (item) => store.dispatch(removeSnackAction(item.key)),
          status: 'success',
        }),
      );
    } catch (error) {
      console.error(error);
    }
  },
);
