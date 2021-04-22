import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RoutesProvider } from './contexts/RoutesContext';
import App from './App';
import routes from './pages/routes';

render(
  <RoutesProvider value={routes}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoutesProvider>, document.getElementById('root'));