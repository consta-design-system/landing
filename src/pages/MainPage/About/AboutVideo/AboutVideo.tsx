import './AboutVideo.css';

import React, { useState } from 'react';
import { Modal } from '@consta/uikit/Modal';

import { cn } from '@/utils/bem';

const cnAboutVideo = cn('AboutVideo');

export const AboutVideo: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={cnAboutVideo()}>
        <div className={cnAboutVideo('Play')}>
          <div className={cnAboutVideo('Triangle')}></div>
        </div>
        <div className={cnAboutVideo('Content')}>Cмотреть видео</div>
      </button>
      <Modal
        rootClassName={cnAboutVideo('ModalRoot')}
        className={cnAboutVideo('Modal')}
        isOpen={open}
        onOverlayClick={() => setOpen(false)}
      >
        <iframe
          className={cnAboutVideo('YouTube')}
          title={cnAboutVideo('YouTube')}
          src="https://www.youtube.com/embed/lJIrF4YjHfQ?autoplay=1"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Modal>
    </>
  );
};
