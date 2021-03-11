import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <Login 
        token={(t)=>setToken(t)} />
    </div>
  );
}

export default App;
