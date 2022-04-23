import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';


const Front = () => {
 

    return (

       <div class="mainBody">
         
        
    

<div id="mainBoard">
  <h1>Nasz sklep. Wasze bilety.</h1>
</div>

<h1 id="newEvent">Najnowsze wydarzenia:</h1>
<div class="product">

      <Link style={{textDecoration: 'none', color: '#000000'}} to={'/wydarzeniasportowe/pilkanozna'}>
        <img src={logo} alt="logo" width="300px"/>
        <p>
          ELO
          <p class="Text">
            cZESC!
          </p>
          <br/>
          <p class="Text">
            gODZINA
          </p>
        </p>  
      </Link>
    
  
</div>

    
  </div>

      
     
    
       

    );
    

}

export default Front;