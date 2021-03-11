import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  const [token, setToken] = useState();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
          </Route>
          <Route path="/">
            <Login 
            token={(t)=>setToken(t)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
