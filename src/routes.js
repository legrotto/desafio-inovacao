import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './components/Inicio';
import Desafios from './components/Desafios';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/desafios" component={Desafios} />
            </Switch>
        </BrowserRouter>
    )
}