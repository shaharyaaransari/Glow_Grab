import styled from "styled-components";
import { css } from "@emotion/react";

export const NavBarOuter = styled.div`
  width: 100%;
  background: rgb(44, 44, 46);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  color: rgb(189, 191, 193);
  padding: 0px 40px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// NavBar Options Css
export const LinksAndSearchOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Inter;
  width: 360px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const LinksCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(189, 191, 193);

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const SearchIconCss = css`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// NavBar Cart & LogIn / SignUp Css

// Emotion Css Template
/*

export const A = css`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
