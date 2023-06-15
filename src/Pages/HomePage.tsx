import React from "react";
import styled from "styled-components";
import shoes from "../images/shoes.png";
import Men from "../images/Men.png";
import Woman from "../images/woman.png";
import hoodies1 from "../images/tilt1.webp"
import hoodies2 from "../images/tilt2.webp"
import hoodies3 from "../images/tilt4.webp"
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <DIV>
      <div className="word">
        <h1>Discover Rare,</h1>
        <h1>Playful Goods.</h1>
      </div>

      <p>
        Bitski connect communities,creators and brands through unique,ownable
        digital content.This is how the metaverse begins.
      </p>
      <button>Shop Now</button>
      <div className="image-handle">
        <img src={Men} alt="Men-wears" />
        <img src={Woman} alt="Woman-wears" />
        <img src={shoes} alt="shoes-wear" />
      </div>
      <div className="product-style">
        <h1>P</h1>
        <h1>R</h1>
        <h1>O</h1>
        <h1>D</h1>
        <h1>U</h1>
        <h1>C</h1>
        <h1>T</h1>
      </div>
      <div className="space-conatiner">
        <div>
          <div className="strokeme">
            <p>We believe that </p>
            <p>Rare and Retro Stuff</p>
            <p>represents an individual's lifstyles.</p>
          </div>
          <div className="browse">
            <p>Browse Link 👇</p>
            <Link to="/products/men"><p>Mens's Fasion  </p></Link>
            <Link to="/products/women"><p>Woman's Fasion  </p></Link>
            <Link to="/products/kids"><p>Kid's collection  </p></Link>
            <Link to="/products/sneakers"><p> Sneakers  </p></Link>
            <button>Shop Men</button>
          </div>
        </div>

        <div className="container-image">
          <div className="tilt-container">
            <img src={hoodies1} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹900</p>
          </div>
          <div className="tilt-container">
            <img src={hoodies2} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹1100</p>
          </div>
          <div className="tilt-container">
            <img src={hoodies3} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹1500</p>
          </div>
        </div>
      </div>
      <div className="est-style">
        <h1>E</h1>
        <h1>N</h1>
        <h1>T</h1>
        <h1>I</h1>
        <h1>A</h1>
        <h1>L</h1>
        <h1>S</h1>
        <h1>S</h1>
        <h1>T</h1>

      </div>
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  padding: 15px;
  text-align: center;
  background: rgb(44, 44, 46);
  background: radial-gradient(
    circle,
    rgba(44, 44, 46, 1) 0%,
    rgba(0, 1, 5, 0.7932422969187676) 100%
  );
  
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  h1 {
    
    font-size: xx-large;
    color: white;
    font-weight: 900;
  }
  button {
    margin: 10px;
    border: none;
    font-weight: 600;
    width: 136px;
    background-color: #fbc02d;
    height: 42px;
    font-size: x-large;
  }
  p {
    font-size: larger;
    font-weight: 500;
    color: gray;
   
  }
  .image-handle {
    display: flex;
    width: 80%;
    margin: auto;

    justify-content: space-between;
  }
  .image-handle img {
    margin: 10px;
    width: 150px;
  }

  .product-style {
    display: flex;
    
    border: 1 px solid;
    padding: 0px 15px;
    background-color: #131212;
    justify-content: space-between;
  }
  .product-style h1 {
    font-size: 200px;
    color: #131212;
    background-color: #131212;
    text-shadow: -1px -1px 0 #dae23b, 1px -1px 0 #dae23b, -1px 1px 0 #dae23b,
      1px 1px 0 #dae23b;
  }
   .strokeme {
  color: white;
   width: 400px;
    margin-left: 3em;
    text-align: left;
    font-size: xx-large;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

  
  .word{
      margin: 45px ;    
  }

  .tilt-container {
    width: 250px;
  background-color: #131212;
  transform: rotateX(20deg) rotateY(20deg);
   border: 1px solid;
}

.tilt-element {
  width: 100%;
  height: auto;
  background-color: #e68320; /* Set the desired background color */
  display: inline-block; /* Ensure the container wraps around the image */
  padding: 10px;
  transition: transform 0.3s ease; 
}

.tilt-element:hover {
  transform: none; 
}

.container-image{
  display: flex;
  
  justify-content: space-evenly;
}
.space-conatiner{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin: 20px;
  justify-content: space-between;
}
 .browse{
   margin: 1em;
    width: 59%;
    margin-left: 6px;
 }
 .est-style {
    display: flex;
    border: 1px solid #d1481b;
    border: 1 px solid;
    padding: 0px 15px;
    background-color: #131212;
    justify-content: space-between;
  }
  .est-style h1 {
    font-size: 200px;
    color: #131212;
  
    background-color: #131212;
    text-shadow: -1px -1px 0 #d1481b, 1px -1px 0#d1481b, -1px 1px 0 #d1481b,
      1px 1px 0 #d1481b;
  }
 @media (max-width: 800px) {
    .image-handle {
      display: grid;
      width: 80%;
      grid-template-columns: repeat(1, fr);
      justify-content: center;
    }
    .image-handle img {
      margin: 10px;
      width: 150px;
    }
    .product-style h1 {
      display: none;
    }
    .est-style h1{
      font-size: 20px;
}
    .space-conatiner{
      display: grid;
      justify-content: center;
     grid-template-columns: repeat(1,1fr);
     justify-content: center;
    }
   .container-image{
    display: grid;
     grid-template-columns: repeat(1,fr);
      justify-content: center;
    }
    .browse{
   margin: 1em;
    width: 59%;
    margin-left: 90px;
 }
 .strokeme{
  margin-left: 6em;
 }
  }
   
  
`;
