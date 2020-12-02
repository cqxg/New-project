import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Faq from '../pages/FAQ/Faq';

import Main from '../pages/Main/Main';
import Lanzarote from '../pages/Lanzarote/Lanzarote';
import GrandTour from '../pages/LanzaroteTours/GrandTour';
import NorthTour from '../pages/LanzaroteTours/NorthTour';
import SouthTour from '../pages/LanzaroteTours/SouthTour';
import Catalog from '../pages/LanzaroteTours/Catalog/Catalog';

export const Routes = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    className="switch-wrapper"
  >
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={Lanzarote} />
    <Route exact path="/tours" component={Catalog} />
    <Route exact path="/tours/grand-tour" component={GrandTour} />
    <Route exact path="/tours/north" component={NorthTour} />
    <Route exact path="/tours/south" component={SouthTour} />
    <Route exact path="/faq" component={Faq} />
  </AnimatedSwitch>
);
