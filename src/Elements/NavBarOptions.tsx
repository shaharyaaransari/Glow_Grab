import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Input,
  InputGroup,
  useColorModeValue,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { GrClose } from "react-icons/gr";

// Styles Components
import * as css from "../Styles/NavBarStyles";
import { LinksAndSearchOuter } from "../Styles/NavBarStyles";

type obj = {
  isActive: boolean;
};

const NavBarOptions = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const activeColor = useColorModeValue("red", "red"); // Adjust the active color
  const inactiveColor = useColorModeValue("blue", "blue"); // Adjust the inactive color

  const handleSearchVisiblilty = (type: string) => {
    setShowSearchBox((prev) => (type == "open" ? true : false));
  };

  return !showSearchBox ? (
    <LinksAndSearchOuter>
      <Text as={NavLink} to="/products/men" css={css.LinksCss}>
        Men
      </Text>
      <Text as={NavLink} to="/products/women" css={css.LinksCss}>
        Women
      </Text>
      <Text as={NavLink} to="/products/kids" css={css.LinksCss}>
        Kids
      </Text>
      <Text as={NavLink} to="/products/sneakers" css={css.LinksCss}>
        Sneakers
      </Text>

      <Image
        onClick={() => handleSearchVisiblilty("open")}
        css={css.SearchIconCss}
        as={ImSearch}
      />
    </LinksAndSearchOuter>
  ) : (
    <InputGroup>
      <InputLeftElement>
        <ImSearch />
      </InputLeftElement>
      <Input type="text" placeholder="Search Men, Women, Kids & Sneakers" />
      <InputRightElement onClick={() => handleSearchVisiblilty("close")}>
        <GrClose />
      </InputRightElement>
    </InputGroup>
  );
};

export default NavBarOptions;
