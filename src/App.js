import React, { useEffect } from 'react';
import Login from './Views/Login';
import Orders from './Views/Orders';
import './App.css';
import ProductCards from './Views/Orders';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  let getData = async() => {
    let url=`http://localhost:8000/`
    let getFetchData = await fetch(url).then(resul=>resul.json())
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
        <Login />
        </Route>
        <Route path = '/orders'>
        <Orders />
        </Route>
        <Route path = '/kitchen'>
          <h1>Hola soy el jefe de cocina</h1>
        <Orders />
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
