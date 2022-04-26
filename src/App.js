import React from "react";
import Home from './Home';
import Login from "./Login";
import Register from "./Register";
import Front from "./Front";
import EventCreator from "./Agency/EventCreator";
import DetalisProducts from "./DetalisProduct";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import axios from "axios";

import './mainpage.css';




function App() {
  
    return (
        <div>
            <header>
          
            <>
  <Dropdown className="d-inline mx-2">
 
    <Dropdown.Toggle id="dropdown-autoclose-true">
     Koncerty
    </Dropdown.Toggle>

    <Dropdown.Menu >
      <Dropdown.Item href="/koncerty/pop">Pop</Dropdown.Item>
      <Dropdown.Item href="/koncerty/rap">Rap</Dropdown.Item>
      <Dropdown.Item href="/koncerty/rock">Rock</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Wydarzenia Sportowe
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/wydarzeniasportowe/pilkanozna">Mecz Piłkarski</Dropdown.Item>
      <Dropdown.Item href="/wydarzeniasportowe/mma">MMA</Dropdown.Item>
      <Dropdown.Item href="/wydarzeniasportowe/tennis">Tenis</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside">
      Teatr
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/teatr/komedia">Komedia</Dropdown.Item>
      <Dropdown.Item href="/teatr/musicale">Musicale</Dropdown.Item>
      <Dropdown.Item href="/teatr/dramat">Dramat</Dropdown.Item>
      
    </Dropdown.Menu>
    
  </Dropdown>


</>
<div id="nameServer">
<h2>TicketServer.pl</h2>
</div>
<div id="homeButton">
<Button href="/index">Strona główna</Button>
</div>


<div id="buttonLogout">
    <Router>
    <Route path="/login">
        <button>
            Wyloguj sie
        </button>
    </Route>
    </Router>
    
</div>

            </header>
    <Router>
        <Switch>
          <Route path="/login">
              <Login />
          </Route>

          <Route path="/register">
              <Register />
          </Route>
  
          <Route path="/index">
              <Front />
          </Route>
          
          <Route path="/agency/event/creator">
              <EventCreator />
          </Route>
          <Route path="/koncerty/pop">
              <DetalisProducts />
          </Route>
          <Route path="/koncerty/rap">
              <DetalisProducts />
          </Route>
          <Route path="/koncerty/rock">
              <DetalisProducts />
          </Route>
          <Route path="/wydarzeniasportowe/pilkanozna">
              <DetalisProducts />
          </Route>
          <Route path="/wydarzeniasportowe/mma">
              <DetalisProducts />
          </Route>
          <Route path="/wydarzeniasportowe/tennis">
              <DetalisProducts />
          </Route>
          <Route path="/teatr/komedia">
              <DetalisProducts />
          </Route>
          <Route path="/teatr/dramat">
              <DetalisProducts />
          </Route>
          <Route path="/teatr/musicale">
              <DetalisProducts />
          </Route>


          <Route path="/">
               <Home/>
          </Route>


       

      </Switch>
    </Router>
      

            <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Daniel Rogowski, Damian Przytuła, Patryk Duda, Karol Zięba 2022</p></div>
    </footer>
        </div>
        
    );
  }
  
  export default App;