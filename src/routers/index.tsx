import {
  ActionFunction,
  LoaderFunction,
  Navigate,
  ShouldRevalidateFunction,
} from 'react-router-dom';
import { ReadOutlined } from '@ant-design/icons';
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

const README = lazy(() => import('@renderer/pages/README'));

const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate replace to="/readme" />,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/readme',
    element: <README />,
    meta: {
      name: 'README',
      icon: <ReadOutlined />,
    },
  },
];

export default routes;
