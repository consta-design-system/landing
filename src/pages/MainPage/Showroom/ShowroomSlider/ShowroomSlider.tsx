import './ShowroomSlider.css';

import React, { useEffect, useMemo, useRef } from 'react';

import { cn } from '@/utils/bem';

type Props = {
  rows: React.ReactNode[];
};

const cnShowroomSlider = cn('ShowroomSlider');

export const ShowroomSlider: React.FC<Props> = ({ rows }) => {
  const ref = useRef<HTMLDivElement>(null);

  const windowHeight = useMemo(() => window.innerHeight, []);

  const listner = () => {
    const scroll = window.pageYOffset / windowHeight / 10;
    ref.current?.style.setProperty('--delay', `${scroll - Math.floor(scroll)}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', listner);
    return () => {
      window.removeEventListener('scroll', listner);
    };
  }, []);

  return (
    <div ref={ref} className={cnShowroomSlider()}>
      {rows.map((row, index) => (
        <div key={index} className={cnShowroomSlider('Row')}>
          <div className={cnShowroomSlider('Group')}>
            {row}
            {row}
          </div>
        </div>
      ))}
    </div>
  );
};
