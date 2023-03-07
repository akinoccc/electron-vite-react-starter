import routes from '@renderer/routers';
import { RouteObject, useRoutes } from 'react-router-dom';

function App(): JSX.Element {
  return <>{useRoutes(routes as RouteObject[])}</>;
}

export default App;
