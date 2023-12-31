import { useRoutes } from 'react-router-dom';
import routes from './router/index';

function App() {
  const element = useRoutes(routes);

  return <div id="app">{element}</div>;
}

export default App;
