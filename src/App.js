import './App.css';
import Rotas from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Rotas />
    </Router>
  );
}

export default App;
