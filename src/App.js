import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/board" component={ Board } />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
