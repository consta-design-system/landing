import { createStore } from '@reatom/core';
import { connectReduxDevtools } from '@reatom/debug';

import { isDev } from '@/utils/config';

export const store = createStore();

if (isDev) {
  connectReduxDevtools(store);
}

// store.subscribe((action) => console.warn(action));
