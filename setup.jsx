import { resolve } from 'path';
import { promises as fs } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server.node';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { compile } from 'handlebars';
import { RoutesProvider } from './src/contexts/RoutesContext';
import Theme from './src/styles/Theme';
import Template from './src/template';
import LoadingDots from './src/commons/components/LoadingDots'
import routes from './src/pages/routes';
import Reset from './src/styles/Reset';
import Typebase from './src/styles/Typebase';

(async () => {
  const preRender = renderToString(
    <>
      <Reset />
      <Typebase />
      <RoutesProvider value={routes}>
        <Router history={createMemoryHistory()}>
          <Theme>
            <Template >
              <LoadingDots />
            </Template>
          </Theme>
        </Router>
      </RoutesProvider>
    </>
  );

  try {
    const template = compile(await fs.readFile(resolve(__dirname, 'index.handlebars'), 'utf-8'));

    const outDir = resolve(__dirname, 'dist');
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(resolve(outDir, 'index.html'), template({ preRender }));

    console.info('✔️ Pre-rendered index.html generated');
  } catch (error) {
    console.error(error);
  }
})();
