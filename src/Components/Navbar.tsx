import { Search2Icon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import { BiCart } from "react-icons/bi";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <DIV>
      <h4>GlamGrab</h4>
      <div>
        <InputGroup mr={14} className="inputsgroup">
          <InputRightElement
            border="none"
            children={
              <IconButton
                aria-label="Options"
                size="sm"
                bg={"black.400"}
                _hover={{ bg: "gray.600" }}
                _focus={{ boxShadow: "outline" }}
                icon={<Search2Icon border="none" color={"gray.500"} />}
              />
            }
          />
          <Input
            type="text"
            placeholder="Search for any  product"
            className="inputs"
          />
        </InputGroup>
      </div>

      <div className="routs">
        <p>MEN</p>
        <p>WOMEN</p>
        <p>KIDS</p>
        <p>SNEAKERS</p>
      </div>
      <div className="menu">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            w={"3px"}
            icon={<BiCart />}
            variant="outline"
            border="none"
            _hover={{ bg: "gray.600" }}
            _focus={{ boxShadow: "outline" }}
            color={"gray"}
            m={2}
          />
          <span>Cart</span>
        </Menu>
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  width: 100%;
  border: 1px solid;
  padding: 10px;
  display: flex;
  background: rgb(44, 44, 46);
  background: radial-gradient(
    circle,
    rgba(44, 44, 46, 1) 0%,
    rgba(0, 1, 5, 0.7932422969187676) 100%
  );
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  h4 {
    color: white;
    width: 200px;
    font-size: xx-large;
    font-weight: 900;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .inputs {
    width: 300px;
    margin: auto;
    border: none;
    color: white;
  }
  .inputsgroup {
    width: 290px;
    margin-left: 400px;
    display: flex;
  }
  .routs {
    display: flex;
    color: gray;
    padding: 13px;
    justify-content: space-between;
    width: 400px;
  }
  p:hover {
    color: white;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    h4 {
      margin-left: 6em;
    }
    .routs {
      display: grid;
      grid-template-columns: repeat(1, fr);
      align-items: center;
      margin-left: 229px;
    }
    .inputsgroup {
      width: 290px;
      margin-left: 144px;
      display: flex;
    }
    span {
      width: 50px;
    }
    .menu {
      display: flex;
      width: 200px;
      margin-left: 8em;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    h4 {
      margin-left: 3em;
    }
    .routs {
      display: grid;
      grid-template-columns: repeat(1, fr);
      align-items: center;
      margin-left: 160px;
    }
    .inputsgroup {
      width: 290px;
      margin-left: 72px;
      display: flex;
    }
    span {
      width: 30px;
    }
    .menu {
      display: flex;
      width: 100px;
      margin-left: 8em;
    }
  }
  span {
    margin: 10px;
    color: gray;
    font-size: larger;
  }
  span:hover {
    color: white;
  }
`;
