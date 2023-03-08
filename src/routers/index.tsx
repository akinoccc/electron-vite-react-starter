import {
  ActionFunction,
  LoaderFunction,
  Navigate,
  ShouldRevalidateFunction,
} from 'react-router-dom';
import { BankOutlined } from '@ant-design/icons';
import { lazy } from 'react';
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

const AppLayout = lazy(() => import('@renderer/layout/AppLayout'));
const Home = lazy(() => import('@renderer/pages/Home/Home'));

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
        element: <Home />,
        meta: {
          name: 'Home',
          icon: <BankOutlined />,
        },
      },
    ],
  },
];

export default routes;
