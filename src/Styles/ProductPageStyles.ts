import styled from "styled-components";
import { css } from "@emotion/react";

// Filter And Product Container
export const ProductAndFilterCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 700px;
  width: 100%;
  padding-top: 60px;
  background: rgb(44, 44, 46);
  color: rgb(189, 191, 193);
  font-family: Inter;

  @media (max-width: 800px) {
    padding-top: 50px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

// Filter Css
export const FilterCont = styled.div`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CategoryTextAndResetBtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: red;
  }

  button {
    color: green;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CheckBoxContainer = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// Sort And Order Css
export const SortAndOrderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// Product List Css
export const ProductListCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

/* Css Template

export const A = css`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const ProductsCont = styled.div`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
