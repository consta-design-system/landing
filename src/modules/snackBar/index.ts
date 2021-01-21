import { Item as Snack } from '@consta/uikit/SnackBar';
import { declareAction, declareAtom } from '@reatom/core';
import { v4 as uuid } from 'uuid';

import { n } from '@/utils/reatom';

type AddSnack = Omit<Snack, 'key'> & {
  key?: string | number;
};

const nSnackBar = n('snackBar');

export const addSnackAction = declareAction<AddSnack>(nSnackBar('addSnack'));
export const removeSnackAction = declareAction<string | number>(nSnackBar('removeSnack'));

export const snackBarAtom = declareAtom<Snack[]>(nSnackBar('fixedAtom'), [], (on) => [
  on(addSnackAction, (state, snack) => {
    return [...state, { ...snack, key: snack.key || uuid() }];
  }),
  on(removeSnackAction, (state, key) => {
    return state.filter((snack) => snack.key !== key);
  }),
]);
