import { RouteObject }   from 'react-router-dom';
import { RootComponent } from './components/RootComponent.tsx';
import { Page404 }       from './components/Page404/Page404.tsx';
import { ViewPage }      from './features/ViewPage/ViewPage.tsx';
import { SettingsPage }  from './features/SettingsPage/SettingsPage.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        Component: RootComponent,
      },
      {
        path: '/view',
        Component: ViewPage,
      },
      {
        path: '/settings',
        Component: SettingsPage,
      }
    ]
  },
  {
    path: '*',
    Component: Page404,
  }
];

export default routes;