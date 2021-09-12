import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import {useState} from 'react'
import ThemeContext from './context/themeContext'
import { themeData  } from './data/themeData';



function App() {
  const [currentTheme, setCurrentTheme] = useState(themeData[0])
  return (
      <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}> 
        <Router>
          <Switch>
            <Route to="/" exact component={Home}/>
          </Switch>
        </Router>
      </ThemeContext.Provider>
      );
}

export default App;
