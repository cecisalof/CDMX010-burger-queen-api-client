import React from "react";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          Hola! soy la página de inicio
        </Route>
        <Route path="/login">
        soy la página de Log In
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
