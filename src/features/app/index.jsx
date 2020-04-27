import React from 'react';
import { AppContainer } from './elements';
import { Switch, BrowserRouter } from 'react-router-dom';
import getGeneratedRoutes from '../../config/routes';

const App = () =>
    <AppContainer>
      <BrowserRouter>
        <Switch>{ getGeneratedRoutes() }</Switch>
      </BrowserRouter>
    </AppContainer>

export default App;