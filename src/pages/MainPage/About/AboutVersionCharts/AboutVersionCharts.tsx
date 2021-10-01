import React, { useEffect } from 'react';
import { Badge } from '@consta/uikit/Badge';
import { useAction, useAtom } from '@reatom/react';

import { getChartsTagAction, loadingChartsTagAtom, versionChartsAtom } from '@/modules/about';

export const AboutVersionCharts: React.FC = () => {
  const version = useAtom(versionChartsAtom);
  const loading = useAtom(loadingChartsTagAtom);
  const getTag = useAction(getChartsTagAction);

  useEffect(() => getTag(), []);

  if (loading && !version) {
    return null;
  }
  return <Badge label={version} status="success" view="stroked" size="l" />;
};
