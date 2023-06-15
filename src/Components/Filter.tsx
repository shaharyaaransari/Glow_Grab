import React from "react";
import { Box, Button, Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";

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
        <Button>Reset</Button>
      </CategoryTextAndResetBtnCont>
      <Box css={css.CheckBoxContainer}>
        {CategoriesArray.map((item, ind) => (
          <Checkbox key={item} colorScheme="red" defaultChecked>
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
