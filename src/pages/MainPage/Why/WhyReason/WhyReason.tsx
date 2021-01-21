import './WhyReason.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { Picture, PictureProps } from '@/components/Picture/Picture';
import { cn } from '@/utils/bem';

const cnWhyReason = cn('WhyReason');

type WhyReasonProps = {
  lead: string;
  text: string;
  children?: never;
  picture: PictureProps;
};

export const WhyReason: React.FC<WhyReasonProps> = (props) => {
  const { lead, text, picture } = props;
  return (
    <div className={cnWhyReason()}>
      <Picture {...picture} className={cnWhyReason('Image')} />
      <Text size="2xl" as="p" view="secondary">
        <Text size="2xl" as="span" weight="bold">
          {lead}
        </Text>
        {text}
      </Text>
    </div>
  );
};
