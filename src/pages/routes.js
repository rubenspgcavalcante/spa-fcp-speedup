import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const routes = [
  { title: 'Home', path: '/', exact: true, Component: Home },
  { title: 'About', path: '/about', exact: true, Component: About },
  { title: 'Contact', path: '/contact', Component: Contact },
];

export default routes;