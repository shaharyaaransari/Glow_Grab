import React from "react";
import { css } from "@emotion/react";
import { Box, Text, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  const HighLightStyles = {
    color: "#2e2b74",
  };

  return (
    <Box css={LogoCont}>
      <Text css={TextCss} as={Link} to="/">
        <Highlight query="G" styles={HighLightStyles}>
          Glam Grab
        </Highlight>
      </Text>
    </Box>
  );
};

export default Logo;

const LogoCont = css`
  display: inline;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
const TextCss = css`
  font-family: K2D;
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;