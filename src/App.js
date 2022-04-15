import React from "react";
import Home from './Home';
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Navbar } from "react-bootstrap";


function App() {
    return (
        <Router>
        <Switch>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/register">
            <Register />
        </Route>
  
         <Route path="/">
             <Home/>
          </Route>

       

        </Switch>
      </Router>
       
    );
  }
  
  export default App;