import routes from '@renderer/routers';
import { useRoutes } from 'react-router-dom';

function App(): JSX.Element {
  return <>{useRoutes(routes)}</>;
}

export default App;
