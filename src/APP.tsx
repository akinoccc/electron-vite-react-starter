import routes from './routers';
import { RouteObject, useRoutes } from 'react-router-dom';
import Reset from './assets/styles/reset';

function App(): JSX.Element {
  return (
    <>
      {useRoutes(routes as RouteObject[])}
      <Reset />
    </>
  );
}

export default App;
