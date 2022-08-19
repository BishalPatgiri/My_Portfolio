import './App.css';
import { HomePage } from './components/HomePage';
import { NameLogo } from './components/NameLogo';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NameLogo/>
      <div id='Hbody'>
        <Navbar/>
        <HomePage/>
      </div> 
    </div>
  );
}
export default App;
