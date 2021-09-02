import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';



function App() {
  return (
        <Router>
          <Switch>
            <Route to="/" exact component={Home}/>
          </Switch>
        </Router>
      );
}

export default App;
