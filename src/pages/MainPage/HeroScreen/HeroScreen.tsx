import './HeroScreen.css';

import React, { useEffect, useRef } from 'react';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { useAction } from '@reatom/react';

import { Picture } from '@/components/Picture/Picture';
import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import ConstaLogo from '@/images/ConstaLogo.image.svg';
import HeroImage_375_1x_dark from '@/images/HeroImage/Dark/HeroImage_375_1x.jpg';
import HeroImage_375_2x_dark from '@/images/HeroImage/Dark/HeroImage_375_2x.jpg';
import HeroImage_375_3x_dark from '@/images/HeroImage/Dark/HeroImage_375_3x.jpg';
import HeroImage_720_1x_dark from '@/images/HeroImage/Dark/HeroImage_720_1x.jpg';
import HeroImage_720_2x_dark from '@/images/HeroImage/Dark/HeroImage_720_2x.jpg';
import HeroImage_720_3x_dark from '@/images/HeroImage/Dark/HeroImage_720_3x.jpg';
import HeroImage_375_1x_default from '@/images/HeroImage/Default/HeroImage_375_1x.jpg';
import HeroImage_375_2x_default from '@/images/HeroImage/Default/HeroImage_375_2x.jpg';
import HeroImage_375_3x_default from '@/images/HeroImage/Default/HeroImage_375_3x.jpg';
import HeroImage_720_1x_default from '@/images/HeroImage/Default/HeroImage_720_1x.jpg';
import HeroImage_720_2x_default from '@/images/HeroImage/Default/HeroImage_720_2x.jpg';
import HeroImage_720_3x_default from '@/images/HeroImage/Default/HeroImage_720_3x.jpg';
import HeroImage_375_1x_display from '@/images/HeroImage/Display/HeroImage_375_1x.jpg';
import HeroImage_375_2x_display from '@/images/HeroImage/Display/HeroImage_375_2x.jpg';
import HeroImage_375_3x_display from '@/images/HeroImage/Display/HeroImage_375_3x.jpg';
import HeroImage_720_1x_display from '@/images/HeroImage/Display/HeroImage_720_1x.jpg';
import HeroImage_720_2x_display from '@/images/HeroImage/Display/HeroImage_720_2x.jpg';
import HeroImage_720_3x_display from '@/images/HeroImage/Display/HeroImage_720_3x.jpg';
import { setFixedAction } from '@/modules/header';
import { cn } from '@/utils/bem';

const cnHeroScreen = cn('HeroScreen');

export const HeroScreen: React.FC = () => {
  const setFixedHeader = useAction(setFixedAction);
  const ref = useRef<HTMLDivElement>(null);

  const listner = () => {
    setFixedHeader(window.pageYOffset >= (ref.current?.offsetHeight || 0));
  };

  useEffect(() => {
    window.addEventListener('scroll', listner);
    return () => {
      window.removeEventListener('scroll', listner);
    };
  }, []);

  return (
    <div ref={ref} className="Container Section">
      <section className={cnHeroScreen()}>
        <div className={cnHeroScreen('Content')}>
          <Text
            className={cnHeroScreen('Title', ['decorator decorator_indent-v_4xl'])}
            size="6xl"
            weight="bold"
            as="h1"
            lineHeight="xs"
          >
            <ConstaLogo className={cnHeroScreen('Logo')} />
            <Text
              className={cnHeroScreen('SubTitle')}
              size="3xl"
              as="span"
              weight="regular"
              display="block"
              lineHeight="xs"
            >
              Дизайн&#8209;система для быстрой разработки интерфейса.
            </Text>
          </Text>
          <div className={cnHeroScreen('Links')}>
            <Text
              className="decorator decorator_indent-b_m"
              size="l"
              weight="regular"
              view="secondary"
              as="p"
              lineHeight="xs"
            >
              Посмотреть библиотеку
            </Text>
            <div className="decorator decorator_distribute_left">
              <Button
                as="a"
                href="https://consta-uikit.vercel.app/"
                label="Компоненты"
                size="l"
                className="decorator decorator_indent-r_xs"
              />
              <Button
                as="a"
                href="https://www.figma.com/@Consta"
                label="Figma"
                size="l"
                view="secondary"
                iconLeft={IconFigma}
                onlyIcon
                className="decorator decorator_indent-r_xs"
              />
              <Button
                as="a"
                href="https://github.com/gazprom-neft/consta-uikit"
                label="Github"
                size="l"
                view="secondary"
                iconLeft={IconGithub}
                onlyIcon
              />
            </div>
          </div>
        </div>

        <Picture
          className={cnHeroScreen('PictureFrame')}
          mode={2}
          alt="Artistic 3D visualisation of Consta components"
          title="mode 2"
          src={{
            gpnDefault: {
              0: {
                '1x': HeroImage_375_1x_default,
                '2x': HeroImage_375_2x_default,
                '4x': HeroImage_375_3x_default,
              },
              1024: {
                '1x': HeroImage_720_1x_default,
                '2x': HeroImage_720_2x_default,
                '4x': HeroImage_720_3x_default,
              },
            },
            gpnDark: {
              0: {
                '1x': HeroImage_375_1x_dark,
                '2x': HeroImage_375_2x_dark,
                '4x': HeroImage_375_3x_dark,
              },
              1024: {
                '1x': HeroImage_720_1x_dark,
                '2x': HeroImage_720_2x_dark,
                '4x': HeroImage_720_3x_dark,
              },
            },
            gpnDisplay: {
              0: {
                '1x': HeroImage_375_1x_display,
                '2x': HeroImage_375_2x_display,
                '4x': HeroImage_375_3x_display,
              },
              1024: {
                '1x': HeroImage_720_1x_display,
                '2x': HeroImage_720_2x_display,
                '4x': HeroImage_720_3x_display,
              },
            },
          }}
        />
      </section>
    </div>
  );
};
