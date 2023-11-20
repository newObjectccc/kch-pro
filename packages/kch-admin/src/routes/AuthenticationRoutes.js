import { lazy } from 'react';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import Loadable from 'ui-component/Loadable';

// login option 3 routing
const AuthLogin3 = Loadable(
  lazy(() => import('views/pages/authentication/authentication3/Login3'))
);
const AuthRegister3 = Loadable(
  lazy(() => import('views/pages/authentication/authentication3/Register3'))
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'pages/login',
      element: <AuthLogin3 />
    },
    {
      path: 'pages/register',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
