import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

//uso basico de props
function App() {
  
  const user = {
    nombre: "David",
    age: 21,
    color: "Azul"
  }

  const saludarFn = name => {
    console.log("Hola " + name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo = {user} saludarFn = {saludarFn}/> 
        
      </header>
    </div>
  );
}

export default App;
