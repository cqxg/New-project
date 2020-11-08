import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Lanzarote from '../pages/Lanzarote';
import Main from '../pages/Main';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/lanzarote' component={Lanzarote}/>
    </Switch>
)