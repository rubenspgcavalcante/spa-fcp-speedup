import React, { Suspense, memo, useEffect } from 'react';
import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesContext from '../contexts/RoutesContext';
import LoadingDots from '../commons/components/LoadingDots';
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
    <Suspense fallback={<LoadingDots />}>
      <Component />
    </Suspense>
  );
})

const Pages = () => {
  const { routes } = useContext(RoutesContext);

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.title} exact={route.exact} path={`${config.publicPath}${route.path}`}>
          <LazyRoute key={route.title} route={route} />
        </Route>
      ))}
    </Switch>
  )
};

export default memo(Pages);