import React, { useEffect } from 'react';
import Login from './Views/Login';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  let getData = async() => {
    let url=`http://localhost:8080/`
    let getFetchData = await fetch(url)
    .then(resul=>resul.json())
    console.log(getFetchData)
  }
  useEffect(() =>{
    getData()
  }, [])

  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path = '/' exact>
          <h1>Hola soy el home</h1>
        </Route>
        <Route path = '/login'>
          <Login />
        </Route>
        <Route path = '/order'>
          <h1>Hola soy para las ordenes</h1>
        </Route>
        <Route path = '/kitchen'>
          <h1>Hola soy el jefe de cocina</h1>
        </Route>
        <Route path = '/admin'>
          <h1>Hola soy el administrador</h1>
          <p>ya tengo los datos de users</p>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;