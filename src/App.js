//import { Button , Accordion, Card, Alert } from 'react-bootstrap';
import './App.css';
import React, { useEffect, useState } from 'react';
//import { ReactComponent as ReactIcon } from './assets/react.svg';
//import Saludar from './components/Saludar';

//uso basico de props
function App() {
  // Hook de efectos
  const [contar, setContar] = useState(0)
  useEffect(() => {
    console.log("Total: " + contar)
  }, [contar])

  // Uso de Hook de estado u de efectos
  const [stateCar, setStateCar] = useState(false)
  const encenderApagar = ( ) => {
    setStateCar(!stateCar)
    setContar(contar + 1)
    //setStateCar(prevValue => !prevValue)
  }
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
      <header>
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
