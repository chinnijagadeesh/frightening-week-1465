// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NAV from './components/NAV';
import Navbar from './components/Navbar';
import SimpleSlider from './components/Slide';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <NAV/>
     {/* <SimpleSlider/> */}
    </div>
  );
}

export default App;
