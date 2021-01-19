import './App.css';
import Numberholder from './components/Numberholder';
import Randomnumber from './components/Randomnumber';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Randomnumber />
       
        <Numberholder />
      </header>

      
    </div>
  );
}

export default App;
