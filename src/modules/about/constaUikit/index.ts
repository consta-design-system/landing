import { declareAction, map } from '@reatom/core';

import { getRepositoryTags } from '@/modules/api/gitHub';
import { createFetchAction, declareDataAtom, declareLoadingAtom, n } from '@/utils/reatom';

const mN = n('about-uikit');

export const [getUikitTagFetchStatusActions, getUikitTagsFetchAction] = createFetchAction(
  mN('getTagFetch'),
  getRepositoryTags,
);

export const getUikitTagAction = declareAction(mN('getTag'), (payload, store) => {
  store.dispatch(getUikitTagsFetchAction({ owner: 'consta-design-system', repo: 'uikit' }));
});

export const loadingUikitTagAtom = declareLoadingAtom(mN('loading'), getUikitTagFetchStatusActions);

export const dataUikitAtom = declareDataAtom(mN('data'), getUikitTagFetchStatusActions);

export const versionUikitAtom = map(mN('version'), dataUikitAtom, (data) =>
  data && data.length > 0 ? data[0].name : '',
);
