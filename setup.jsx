import React from 'react';
import { renderToString } from 'react-dom/server.node';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { compile } from 'handlebars';
import App from './src/App';
import { RoutesProvider } from './src/contexts/RoutesContext';
import { promises as fs } from 'fs';
import { resolve } from 'path';

(async () => {
  const preRender = renderToString(
    <RoutesProvider value={[]}>
      <Router history={createMemoryHistory()}>
        <App />
      </Router>
    </RoutesProvider>
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
