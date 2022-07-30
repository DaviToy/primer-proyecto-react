//import { Button , Accordion, Card, Alert } from 'react-bootstrap';
import './App.css';
//import React, { useEffect, useState } from 'react';
//import { ReactComponent as ReactIcon } from './assets/react.svg';
//import Saludar from './components/Saludar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Button } from 'bootstrap';
import Contacto from './Pages/Contacto';
import QuienSoy from './Pages/QuienSoy';

//uso basico de props
function App() {
  // Hook de efectos
  // const [contar, setContar] = useState(0)
  // useEffect(() => {
  //   console.log("Total: " + contar)
  // }, [contar])

  // Uso de Hook de estado u de efectos
  // const [stateCar, setStateCar] = useState(false)
  // const encenderApagar = ( ) => {
  //   setStateCar(!stateCar)
  //   setContar(contar + 1)
    //setStateCar(prevValue => !prevValue)
  //}
  //

  //PROPS en variables y funciones
  // const user = {
  //   nombre: "David",
  //   edad: 21,
  //   color: "Azul"
  // }

  // const saludarFn = (nombre, edad) => {
  //   console.log("Hola " + nombre + " tiene " + edad + " anos.")

  //   console.log(`Hola ${nombre}, tiene ${edad} anos. `)
  // }

  return (
    <div className="App">
      <h1>React bootstrap</h1>

      <Router>
        <div>
          <Link to="/">
            <Button> Home </Button>
          </Link>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
          <Link>
            <Button to="/quien-soy">Quien Soy</Button>
          </Link>
          
        </div>


        <Switch>

          <Route path='/contacto'>
            <Contacto />
          </Route>
          <Route path='/quien-soy'>
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
