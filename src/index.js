import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './config/store';
import themes from './config/themes/';
import App from './features/app';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}>
        <ThemeProvider theme={themes.light}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  serviceWorker.register();
});
