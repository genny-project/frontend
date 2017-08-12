import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'views';

const Routes = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
);

export default Routes;
