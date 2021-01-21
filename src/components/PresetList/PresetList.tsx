import './PresetList.css';

import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { useChoiceGroup } from '@consta/uikit/useChoiceGroup';

import { cn } from '@/utils/bem';

export const cnPresetList = cn('PresetList');

type PresetListProps<ITEM> = {
  value: ITEM;
  items: ITEM[];
  getLabel: (item: ITEM) => string;
  getBrandColor: (item: ITEM) => string;
  onChange: (props: { e: React.MouseEvent<HTMLButtonElement, MouseEvent>; value: ITEM }) => void;
  className?: string;
};

type Props<ITEM> = PropsWithHTMLAttributesAndRef<PresetListProps<ITEM>, HTMLDivElement>;

type PresetList = <ITEM>(props: Props<ITEM>) => React.ReactElement | null;

export const PresetList: PresetList = React.forwardRef((props, ref) => {
  const {
    value = null,
    items,
    getLabel,
    onChange,
    className,
    getBrandColor,
    ...otherProps
  } = props;

  const { getOnChange, getChecked } = useChoiceGroup<
    typeof items[number],
    React.MouseEvent<HTMLButtonElement, MouseEvent>
  >({ value, getKey: getLabel, callBack: onChange, multiple: false });

  return (
    <div {...otherProps} ref={ref} className={cnPresetList(null, [className])}>
      {items.map((item) => (
        <button
          className={cnPresetList('Item', { checked: getChecked(item) })}
          key={getLabel(item)}
          onClick={getOnChange(item)}
          style={{ ['--brandColor' as any]: getBrandColor(item) }}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
});
