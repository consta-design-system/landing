import React, { useEffect } from 'react';
import { Badge } from '@consta/uikit/Badge';
import { useAction, useAtom } from '@reatom/react';

import { getUikitTagAction, loadingUikitTagAtom, versionUikitAtom } from '@/modules/about';

export const AboutVersionUikit: React.FC = () => {
  const version = useAtom(versionUikitAtom);
  const loading = useAtom(loadingUikitTagAtom);
  const getTag = useAction(getUikitTagAction);

  useEffect(() => getTag(), []);

  if (loading && !version) {
    return null;
  }
  return <Badge label={version} status="success" view="stroked" size="l" />;
};
