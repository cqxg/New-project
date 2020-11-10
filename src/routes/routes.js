import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Faq from '../pages/FAQ/Faq';

import Lanzarote from '../pages/Lanzarote/Lanzarote';
import Main from '../pages/Main/Main';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about' component={Lanzarote}/>
        <Route exact path='/faq' component={Faq}/>
    </Switch>
)