import { Button , Accordion, Card, Alert } from 'react-bootstrap';
import './App.css';
import { ReactComponent as ReactIcon } from './assets/react.svg';
import Saludar from './components/Saludar';

//uso basico de props
function App() {
  
  const user = {
    nombre: "David",
    edad: 21,
    color: "Azul"
  }

  const saludarFn = (nombre, edad) => {
    console.log("Hola " + nombre + " tiene " + edad + " anos.")

    console.log(`Hola ${nombre}, tiene ${edad} anos. `)
  }

  return (
    <div className="App">
      <h1>React bootstrap</h1>
      <Button variant="primary">Click</Button>{' '}
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Alert variant="danger">
          Peligro!!!
      </Alert>
      <ReactIcon />

    </div>
  );
}

export default App;
