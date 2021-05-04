import React, { useEffect} from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {UserForm} from "./components/UserForm";


function App() {

  // let [products, setProduct] = useState()

  let getData = async () => {
    let url = `http://localhost:4000/` // aquí conectaríamos el endpoint de Brenda, url en desarrollo
    //localhost:8080/auth, aquí tendríamos que contruir la función con axios enviarte el valor de los inputs al servidor
    
    //variable asíncrona que traerá la data
    let getFetchData = await fetch(url) //fetch consultará la URL
    .then(result => result.json())
    
    console.log(getFetchData);
  }
  
// ciclo de vida del componente
  useEffect (() => { 
    getData() // espicificamos qué data queremos traer
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          Hola! soy la página de inicio
        </Route>
        <Route path="/login">
        soy la página de Log In
        <UserForm />
        </Route>
        <Route path="/mainpage">
          soy la Main Page
        </Route>
      </Switch>
    <div className="App">
      
    </div>
    </Router>
  );
 
}

export default App;
