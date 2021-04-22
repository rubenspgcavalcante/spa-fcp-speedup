import React from 'react';
import Template from './template';
import Pages from './pages';

import Reset from './styles/Reset';
import Typebase from './styles/Typebase';
import Theme from './styles/Theme';

const App = () => (
  <>
    <Reset />
    <Typebase />
    <Theme>
      <Template>
        <Pages />
      </Template>
    </Theme>
  </>
);

export default App;