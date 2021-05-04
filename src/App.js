import React from 'react'
import Contador from './Components/Contador'
import './App.css';


import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path = '/' exact>
          <h1>Hola soy el home</h1>
        </Route>
        <Route path = '/login'>
          <h1>Hola soy el login</h1>
        </Route>
        <Route path = '/order'>
          <h1>Hola soy para las ordenes</h1>
            <Contador/>
        </Route>
        <Route path = '/kitchen'>
          <h1>Hola soy el jefe de cocina</h1>
        </Route>
        <Route path = '/admin'>
          <h1>Hola soy el administrador</h1>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
