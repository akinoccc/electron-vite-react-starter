import {
  ActionFunction,
  LoaderFunction,
  Navigate,
  ShouldRevalidateFunction,
} from 'react-router-dom';
import AppLayout from '@renderer/layout/AppLayout';
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: RouteObject[];
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  shouldRevalidate?: ShouldRevalidateFunction;
  meta?: {
    name?: string;
    icon?: React.ReactNode;
    hidden?: boolean | false;
  };
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/home" />,
        meta: {
          hidden: true,
        },
      },
      {
        path: '/home',
        element: <h1>A react template for electron</h1>,
        meta: {
          name: 'Home',
        },
      },
    ],
  },
];

export default routes;
