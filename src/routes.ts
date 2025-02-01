import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';
import Landing from './landingpage'
export const routes: RouteDefinition[] = [
  {
    path: '/ss',
    component: Home,
  },
 
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
  {
    path: '/',
    component: lazy(() => import('./landingpage')),
  },
];
