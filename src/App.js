import './App.css';
import { HomePage } from './components/HomePage';
import { NameLogo } from './components/NameLogo';
import { Navbar } from './components/Navbar';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <AnimatedCursor  outerAlpha={0.2}
      innerScale={1}
      outerScale={2} trailingSpeed={20} color="100,255,218" outerSize={28}  clickables={["button",'a']} />
      <NameLogo/>
      <div id='Hbody'>
        <Navbar/>
        <HomePage/>
      </div> 
    </div>
  );
}
export default App;
