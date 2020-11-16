import React from 'react';
import { useTranslation } from 'react-i18next';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import BubblesWithImages from '../../components/Bubbles/BubblesWithImages';
import constructor from '../../constructors/constructor';
import About from './About/About';
import Features from '../../components/Features/Features';
import Header from './Header/Header';

import './Lanzarote.scss';
import Carousel from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';

const Lanzarote = () => {
  const { t } = useTranslation();
  const pageConstructor = constructor.lanzarote;

  return (
    <div className="lanzarote">
      <Header />
      <BreadCrumbs scheme="lanzarote" />
      <About t={t} />
      <Features constructor={pageConstructor} scheme="features" />
      <BubblesWithImages constructor={pageConstructor} scheme="bubblesWithImages" />
      <Carousel constructor={pageConstructor} />
      <Footer />
    </div>
  );
};

export default Lanzarote;
