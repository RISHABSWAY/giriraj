// import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import Brochure from './Brochure';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
// import Testimonialss from './Testimonials';

function App() {


  
  return (
<>
    <Navbar />
 <Routes>
 <Route path="/Home" element={<Home/>} />
 <Route path="/Brochure" element={<Brochure/>} />
 <Route path="/Products" element={<Products/>} />
 {/* <Route path="/Testimonials" element={<Testimonials/>} /> */}

  </Routes>
  

    </>
  );
}

export default App;

