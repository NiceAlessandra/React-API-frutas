import React, { useState } from 'react';
import Axios from 'axios';
import './App.css'
//import Home from './component/Home';
//import Navbar from './component/Navbar';

function App() {

const [Fruit, setFruit] = useState("");

  const getFruit = () => {
    Axios.get("http://www.fruityvice.com/api/fruit/all").then (
      (response) => {
        setFruit(response.data.setup + " ... " + response.data.punchline);
        console.log(response);
      }
    );
  };
  
  return <div>
    API Frutas Frexco
    <br></br>
    <button onClick={getFruit}>Clique no button e veja o console </button>
    
    {Fruit}
    
    </div>
    
}

export default App;


