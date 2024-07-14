import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/Header/Header';
import Home  from './Component/Home/index'
import About from './Component/About/About';
import Experiance from './Component/Experiance/Experiance';
import Jse from './Component/jse';
import Contact from './Component/Contact/Contact';
import WhatsAppIcon from './Component/WhatsApp/WhatsAppIcon';




function App() {
  return (
    <>
     <NavigationBar/>
     <Home/> 
     <About/>
     <Experiance/>
     <Contact/>
     <WhatsAppIcon/>
    
    
     </>
  );
}

export default App;
