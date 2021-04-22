import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RoutesProvider } from './contexts/RoutesContext';
import Template from './template';
import Pages from './pages';
import routes from './pages/routes';

import Reset from './styles/Reset';
import Typebase from './styles/Typebase';
import Theme from './styles/Theme';

render(
  <>
    <Reset />
    <Typebase />
    <Theme>
      <RoutesProvider value={routes}>
        <BrowserRouter>
          <Template>
            <Pages />
          </Template>
        </BrowserRouter>
      </RoutesProvider>
    </Theme>
  </>, document.getElementById('root')
);