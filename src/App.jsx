import './App.css';
import React, {useEffect, useState} from 'react';
import Home from "./components/Home";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EindOverzicht from "./components/EindOverzicht";
import Bevestiging from "./components/Bevestiging";
import Winkelmandje from "./components/Winkelmandje";
import Producten from "./components/Producten";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";

function App() {
  const[productObjects, setProductObjects] = useState([]);
  useEffect(()=>{
    axios.create({
      baseURL: "http://localhost:3333/api",
      headers: {
        "Content-type": "application/json"
      }
    }).get('/producten').then((response)=> setProductObjects(response.data));
  }, []);
  console.log(productObjects);
  console.log(productObjects.data);
  return (
      <body style={{color:'darkolivegreen', textAlign:'center'}}>
      <Router>
        <HeaderMenu />
        <Switch>
          <Route path={'/bestelling/overview'}>
            <EindOverzicht/>
          </Route>
          <Route path={'/bestelling'}>
            <Bevestiging/>
          </Route>
          <Route path={'/winkelmandje'}>
            <Winkelmandje/>
          </Route>)}
          <Route path={'/producten'}>
            <Producten producten = {productObjects}/>
          </Route>
          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
        <Footer />
      </Router>
      </body>
  );
}

export default App;