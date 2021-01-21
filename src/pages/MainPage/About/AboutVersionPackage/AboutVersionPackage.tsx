import React, { useEffect } from 'react';
import { Badge } from '@consta/uikit/Badge';
import { useAction, useAtom } from '@reatom/react';

import { getTagAction, loadingAtom, versionAtom } from '@/modules/about';

export const AboutVersionPackage: React.FC = () => {
  const version = useAtom(versionAtom);
  const loading = useAtom(loadingAtom);
  const getTag = useAction(getTagAction);

  useEffect(() => getTag(), []);

  if (loading && !version) {
    return null;
  }
  return <Badge label={version} status="success" view="stroked" size="l" />;
};
