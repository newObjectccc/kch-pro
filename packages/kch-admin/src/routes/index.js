import { useRef } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const tokenRef = useRef(null);
  const location = useLocation();
  let Comp = useRoutes([MainRoutes, AuthenticationRoutes]);
  if (!tokenRef.current) {
    tokenRef.current = localStorage.getItem('token');
    if (!tokenRef.current && location.pathname !== '/pages/login') {
      Comp = <Navigate to="/pages/login" replace></Navigate>;
    }
  }
  return Comp;
}
