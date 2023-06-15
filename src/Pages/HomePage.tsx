import React from "react";
import styled from "styled-components";
import shoes from "../Images/shoes.png";
import Men from "../Images/Men.png";
import Woman from "../Images/woman.png";

const HomePage = () => {
  return (
    <DIV>
      <h1>Discover Rare,</h1>
      <h1>Playful Goods.</h1>
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

      <div className="strokeme">
        This text should have a stroke in some browsers
      </div>
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  padding: 10px;
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
  /* .strokeme {
  color: white;
  background-color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
} */
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
  }
`;
