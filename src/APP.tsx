import routes from './routers';
import { RouteObject, useRoutes } from 'react-router-dom';
import Reset from './assets/styles/reset';
import { Suspense } from 'react';
import { Spin } from 'antd';

function App(): JSX.Element {
  return (
    <Suspense fallback={<Spin tip="Loading..." />}>
      {useRoutes(routes as RouteObject[])}
      <Reset />
    </Suspense>
  );
}

export default App;
