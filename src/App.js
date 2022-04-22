import React from "react";
import Home from './Home';
import Login from "./Login";
import Register from "./Register";
import Front from "./Front";
import EventCreator from "./Agency/EventCreator";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
    return (
        <div>
            <header>
            <>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
     Koncerty
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="koncerty/pop">Pop</Dropdown.Item>
      <Dropdown.Item href="koncerty/rap">Rap</Dropdown.Item>
      <Dropdown.Item href="koncerty/rock">Rock</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Wydarzenia Sportowe
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="wydarzeniasportowe/meczpilkarski">Mecz Piłkarski</Dropdown.Item>
      <Dropdown.Item href="wydarzeniasportowe/mma">MMA</Dropdown.Item>
      <Dropdown.Item href="wydarzeniasportowe/tenis">Tenis</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside">
      Teatr
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="teatr/komedia">Komedia</Dropdown.Item>
      <Dropdown.Item href="teatr/musicale">Musicale</Dropdown.Item>
      <Dropdown.Item href="teatr/tragedia">Tragedia</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


</>
<div id="nameServer">
<h2>TicketServer</h2>
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