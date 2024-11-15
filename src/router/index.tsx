import { createBrowserRouter, RouteObject } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/dashboard/Dashboard';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import DashboardRoute from './DashboardRoute';
import FrontendRoute from './FrontendRoute';
import GuestRoute from './GuestRoute';

const routes: RouteObject[] = [
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <FrontendRoute component={Home} />,
      },
      {
        path: 'about',
        element: <FrontendRoute component={About} />,
      },
      {
        path: 'projects',
        element: <FrontendRoute component={Projects} />,
      },
      {
        path: 'contact',
        element: <FrontendRoute component={Contact} />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardRoute component={Dashboard} />,
  },
  {
    path: 'login',
    element: <GuestRoute component={Login} />,
  },
];

const router = createBrowserRouter(routes);

export default router;
