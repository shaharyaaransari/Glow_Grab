import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Text,
} from "@chakra-ui/react";

// Styles Import
import * as css from "../Styles/ProductPageStyles";
import {
  FilterCont,
  CategoryTextAndResetBtnCont,
} from "../Styles/ProductPageStyles";

const Filter = ({ CategoriesArray }: FilterTypes) => {
  return (
    <FilterCont>
      <CategoryTextAndResetBtnCont>
        <Text>Categories :</Text>
        <Center>Clear</Center>
      </CategoryTextAndResetBtnCont>
      <Box css={css.CheckBoxContainer}>
        {CategoriesArray.map((item, ind) => (
          <Checkbox
            css={css.CheckBoxInputCss}
            key={item}
            colorScheme="teal"
            defaultChecked
          >
            {item}
          </Checkbox>
        ))}
      </Box>
    </FilterCont>
  );
};

export default Filter;

interface FilterTypes {
  CategoriesArray: Array<any>;
}
