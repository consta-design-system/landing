import { declareAction, map } from '@reatom/core';

import { getRepositoryTags } from '@/modules/api/gitHub';
import { createFetchAction, declareDataAtom, declareLoadingAtom, n } from '@/utils/reatom';

const nAbout = n('about');

export const [getTagFetchStatusActions, getTagsFetchAction] = createFetchAction(
  nAbout('getTagFetch'),
  getRepositoryTags,
);

export const getTagAction = declareAction(nAbout('getTag'), (payload, store) => {
  store.dispatch(getTagsFetchAction({ owner: 'gazprom-neft', repo: 'consta-uikit' }));
});

export const loadingAtom = declareLoadingAtom(nAbout('loading'), getTagFetchStatusActions);
export const dataAtom = declareDataAtom(nAbout('data'), getTagFetchStatusActions);
export const versionAtom = map(nAbout('version'), dataAtom, (data) =>
  data && data.length > 0 ? data[0].name : '',
);
