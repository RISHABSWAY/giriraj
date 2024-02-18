import React from 'react';
import { Link } from "react-router-dom";
import slide_image_1 from './assets/cb1.png'
import slide_image_2 from './assets/cb2.png'
import slide_image_3 from './assets/cb3.png'
import slide_image_4 from './assets/cb4.png'
import slide_image_5 from './assets/cb5.png'


function Products() {
  return (
    <div className="p-main">




      {/*  */}
      <div className="welcome">Welcome to Giriraj Exports 
      <p>Your Premier Wholesaler of Exquisite Metalware and Puja Items</p></div>
      <div className="first">At Giriraj Exports, we take pride in being a leading wholesaler, offering a diverse range of high-quality products including Kansa, Brass, Copper, Puja Utensils, and Statues. Our commitment to excellence and tradition is reflected in every piece we offer.</div>
      <div className=""></div>


    <div className="product-list">Our Porducts</div>
    <div className="utensils">

      <div className="product1">
      <Link to="/"><img src={slide_image_1} alt="" /><div className="product-info">
              Copper Utensils
            </div></Link>
      </div>

      <div className="product1"><Link to="/">
        
      <img src={slide_image_2} alt="" /><div className="product-info">
      Bronze Utensils
            </div></Link>
      </div>

      <div className="product1">
      <Link to="/">
       
      <img src={slide_image_3} alt="" /><div className="product-info">
      Puja Utensils
            </div></Link>
      </div>


      <div className="product1">
      <Link to="/">
      <img src={slide_image_4} alt="" />
      <div className="product-info">
      Ideols Utensils
            </div></Link>
      </div>

      <div className="product1">
      <Link to="/">
      <img src={slide_image_5} alt="" /><div className="product-info">
      Ideols Utensils
            </div></Link></div>
      </div>
      
      
      <div className="whyus"><h2>Why Choose Giriraj Exports?</h2>
        <div className="one">Quality Assurance:</div>
        <span>Our products undergo stringent quality checks to ensure that you receive only the finest craftsmanship and materials.</span>
        

        <div className="two">Wide Range:</div>
        <span>From traditional to contemporary designs, our extensive collection caters to diverse tastes and preferences</span>
       

        <div className="three">Competitive Prices:</div>
        <span>We believe in making quality products accessible.Our competitive prices ensure that you get the best value.</span>
        
      
      </div>
    </div>
  )
}

export default Products