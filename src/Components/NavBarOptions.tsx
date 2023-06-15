import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { GrClose } from "react-icons/gr";

// Styles Components
import * as css from "../Styles/NavBarStyles";
import { LinksAndSearchOuter } from "../Styles/NavBarStyles";

const NavBarOptions = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return !showSearchBox ? (
    <LinksAndSearchOuter>
      <Text as={Link} to="/products/men" css={css.LinksCss}>
        Men
      </Text>
      <Text as={Link} to="/products/women" css={css.LinksCss}>
        Women
      </Text>
      <Text as={Link} to="/products/kids" css={css.LinksCss}>
        Kids
      </Text>
      <Text as={Link} to="/products/sneakers" css={css.LinksCss}>
        Sneakers
      </Text>

      <Image css={css.SearchIconCss} as={ImSearch} />
    </LinksAndSearchOuter>
  ) : (
    <InputGroup>
      <InputLeftElement>
        <ImSearch />
      </InputLeftElement>
      <Input type="text" placeholder="Search Men, Women, Kids & Sneakers" />
      <InputRightElement>
        <GrClose />
      </InputRightElement>
    </InputGroup>
  );
};

export default NavBarOptions;
