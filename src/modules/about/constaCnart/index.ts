import { declareAction, map } from '@reatom/core';

import { getRepositoryTags } from '@/modules/api/gitHub';
import { createFetchAction, declareDataAtom, declareLoadingAtom, n } from '@/utils/reatom';

const mN = n('about-charts');

export const [getChartsTagFetchStatusActions, getChartsTagsFetchAction] = createFetchAction(
  mN('getTagFetch'),
  getRepositoryTags,
);

export const getChartsTagAction = declareAction(mN('getTag'), (payload, store) => {
  store.dispatch(getChartsTagsFetchAction({ owner: 'gazprom-neft', repo: 'consta-charts' }));
});

export const loadingChartsTagAtom = declareLoadingAtom(
  mN('loading'),
  getChartsTagFetchStatusActions,
);

export const dataChartsAtom = declareDataAtom(mN('data'), getChartsTagFetchStatusActions);

export const versionChartsAtom = map(mN('version'), dataChartsAtom, (data) =>
  data && data.length > 0 ? data[0].name : '',
);
