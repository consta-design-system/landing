import { declareAction, declareAtom } from '@reatom/core';

import { n } from '@/utils/reatom';

const nHeader = n('header');

export const setFixedAction = declareAction<boolean>(nHeader('setFixed'));

export const fixedAtom = declareAtom<boolean>(nHeader('fixedAtom'), false, (on) =>
  on(setFixedAction, (state, fixed) => fixed),
);
