import React from 'react';
import { Route } from 'react-router-dom';
import Auth from '../features/auth';
import Main from '../features/main';

const routes = [{
  path: '/auth',
  component: Auth,
}, {
  path: '/main',
  component: Main,
}];

let generatedRoutes = [];
const generateRoutes = () => routes.map((route, i) => <Route path = {route.path} exact key = {i} component={route.component} />)

const getGeneratedRoutes = () => {
  if (generateRoutes.length <= 0) generatedRoutes = generateRoutes();
  return generatedRoutes;
}

export default getGeneratedRoutes;