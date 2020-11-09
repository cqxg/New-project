import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Faq from '../pages/FAQ/Faq';

import Lanzarote from '../pages/Lanzarote/Lanzarote';
import Main from '../pages/Main/Main';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={Lanzarote}/>
        <Route path='/faq' component={Faq}/>
    </Switch>
)