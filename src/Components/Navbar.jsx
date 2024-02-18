import React, { useState } from "react";
import { Link } from "react-router-dom";

// import './Navbar.css';

function Navbar() {
  

  
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <>

    {/* <div className="Top">Contact Us</div> */}
    {/* <div className="Top">Whatsapp</div> */}
      <div className={`navbar ${isMenuOpen ? 'responsive' : ''}`}>
        <div className="logo">Giriraj Exports</div>



        <div className={`links ${isMenuOpen ? 'responsive' : ''}`}>
          <Link to="/">How to Order</Link>
          <Link to="/Brochure">Brochure</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Testimonials">Testimonials</Link>
         

        
          
          

          {/* <Link to="#"><img src={hembar} alt="menu baar" ></img></Link> */}
        </div>
        
      </div>
      

    </>
  );
}
export default Navbar;