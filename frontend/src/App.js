import './App.css';
import Home from './Components/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={ Home }></Route>
    </div>
  );
}

export default App;
