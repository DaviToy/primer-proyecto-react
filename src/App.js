import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

//uso basico de props
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo /> 
        <AdiosMundo />
        <Saludar name = "David Serrano" age = "26" /> 
        <Saludar name = "Tony" age = "15" />
      </header>
    </div>
  );
}

export default App;
