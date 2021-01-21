import './MainPage.css';

import React from 'react';

import { HeaderContainer } from '@/containers/HeaderContainer/HeaderContainer';
import { About } from '@/pages/MainPage/About/About';
import { FAQ } from '@/pages/MainPage/FAQ/FAQ';
import { Footer } from '@/pages/MainPage/Footer/Footer';
import { HeroScreen } from '@/pages/MainPage/HeroScreen/HeroScreen';
import { Links } from '@/pages/MainPage/Links/Links';
import { Projects } from '@/pages/MainPage/Projects/Projects';
import { Showroom } from '@/pages/MainPage/Showroom/Showroom';
import { Themes } from '@/pages/MainPage/Themes/Themes';
import { Variety } from '@/pages/MainPage/Variety/Variety';
import { Why } from '@/pages/MainPage/Why/Why';
import { cn } from '@/utils/bem';

const cnMainPage = cn('MainPage');

export const MainPage: React.FC = () => (
  <div className={cnMainPage()}>
    <HeaderContainer />
    <HeroScreen />
    <About />
    <Why />
    <Themes />
    <Variety />
    <Showroom />
    <Projects />
    <FAQ />
    <Links />
    <Footer />
  </div>
);
