import './App.css';
import About from './Components/About';
import Brands from './Components/Brands';
import Footer from './Components/Footer';
import Headings from './Components/Headings';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import Services from './Components/Services';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brands />
      <Services />
      <Headings heading='ABOUT'/>
      <About />
      <Headings heading='PORTFOLIO'/>
      <Tabs />
      {/* <Headings heading='BLOGS'/> */}
      <Footer />
    </div>
  );
}

export default App;
