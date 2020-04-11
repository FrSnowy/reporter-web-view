import React from 'react';
import { AppContainer } from './elements';
import { Switch } from 'react-router-dom';
import getGeneratedRoutes from '../../config/routes';

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Switch>{ getGeneratedRoutes() }</Switch>
      </AppContainer>
    )
  }
}

export default App;