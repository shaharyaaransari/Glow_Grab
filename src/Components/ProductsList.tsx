import React from "react";
import { Box, Image } from "@chakra-ui/react";

// Styles Import
import * as css from "../Styles/ProductPageStyles";
import { ProductListCont } from "../Styles/ProductPageStyles";

interface ProductsListType {
  Products: Array<any>;
}

const ProductsList = ({ Products }: ProductsListType) => {
  return (
    <ProductListCont>
      {Products.map((item, ind) => (
        <Box key={item.id}>
          <Image src={item.img} alt={item.name} />
        </Box>
      ))}
    </ProductListCont>
  );
};

export default ProductsList;
