import React from 'react'
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Faq from '../pages/FAQ/Faq';

import Lanzarote from '../pages/Lanzarote/Lanzarote';
import Main from '../pages/Main/Main';

export const Routes = () => (
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
    >
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={Lanzarote} />
        <Route exact path='/faq' component={Faq} />
    </AnimatedSwitch>
)