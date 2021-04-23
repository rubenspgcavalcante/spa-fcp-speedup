import React, { Suspense, lazy, memo, Component, useEffect } from 'react';
import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesContext from '../contexts/RoutesContext';
import config from '../config';

const LazyRoute = memo(({ route }) => {
  const { setActive } = useContext(RoutesContext);
  const { Component } = route;

  useEffect(() => {
    if (route && setActive) {
      setActive(route);
    }
  }, []);

  return (
    <Suspense fallback="loading...">
      <Component />
    </Suspense>
  );
})

const Pages = () => {
  const { routes } = useContext(RoutesContext);

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.title} exact={route.exact} path={route.path}>
          <LazyRoute key={route.title} route={`${config.publicPath}${route}`} />
        </Route>
      ))}
    </Switch>
  )
};

export default memo(Pages);