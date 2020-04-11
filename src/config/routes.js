import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../features/auth';

const routes = [{
  path: '/auth',
  component: Auth,
}];

let generatedRoutes = [];

const generateRoutes = () => routes.map((route, i) =>
  <Switch>
    <Route path = {route.path} exact key = {i} component={route.component} />
  </Switch>
)

const getGeneratedRoutes = () => {
  if (generateRoutes.length <= 0) generatedRoutes = generateRoutes();
  return generatedRoutes;
}

export default getGeneratedRoutes;