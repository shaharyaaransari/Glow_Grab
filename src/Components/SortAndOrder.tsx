import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Input,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import {
  SortAndOrderCont,
  ProductAndFilterCont,
} from "../Styles/ProductPageStyles";

const SortAndOrder = () => {
  const [value, setValue] = useState("Relevance");

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
  };

  return (
    <SortAndOrderCont>
      {/* <Select placeholder="Select">
        <option value="">Relevance</option>
        <option value="newprice">Price</option>
        <option value="rating">Ratings</option>
        <option value="review">Reviews</option>
      </Select> */}

      <Menu>
        <MenuButton as={Box} cursor="pointer">
          <Text>Sort by: {value}</Text>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleSelect("Relevance")}>
            Relevance
          </MenuItem>
          <MenuItem onClick={() => handleSelect("Newprice")}>Price</MenuItem>
          <MenuItem onClick={() => handleSelect("Rating")}>Ratings</MenuItem>
          <MenuItem onClick={() => handleSelect("Review")}>Reviews</MenuItem>
        </MenuList>
      </Menu>

      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Low - High</Tab>
          <Tab>High - Low</Tab>
        </TabList>
      </Tabs>
    </SortAndOrderCont>
  );
};

export default SortAndOrder;
