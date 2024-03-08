import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import ThemeRoutes from './routes';

const App = () => {
  return (
    <>
      <Router>
        <ThemeRoutes />
      </Router>
    </>
  );
}

export default App;
