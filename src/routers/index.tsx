import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <>Home</>,
  },
  {
    path: '/login',
    element: <>Login</>,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

export default useRoutes(rootRouter);
