import React from "react";
import { DiscountPercent } from "../Functions/DiscountPercent";
import { Box, Image, Text, Button, Badge } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

// Styles Import
import * as css from "../Styles/ProductPageStyles";
import { ProductListCont } from "../Styles/ProductListStyles";

interface ProductsListType {
  Products: Array<any>;
}

const ProductsList = ({ Products }: ProductsListType) => {
  return (
    <ProductListCont>
      {Products.map((item, ind) => (
        <NavLink to={`/product/${item.id}`} key={item.id}>
          {/* <Text>{item.id}</Text> */}
          <Image src={item.img} alt={item.name} />
          <Text>{item.name}</Text>
          <Box>
            <Text>&#x20B9; {item.newPrice}</Text>
            {item.newPrice != item.oldPrice && <s>&#x20B9; {item.oldPrice}</s>}
            {item.newPrice != item.oldPrice && (
              <Text>
                {DiscountPercent(item.id, item.oldPrice, item.newPrice)}%
              </Text>
            )}
          </Box>

          <Box>
            <Badge variant="outline" colorScheme="green">
              {item.rating} <Image as={AiTwotoneStar} />
            </Badge>
            <Text>Based on {item.review} reviews</Text>
          </Box>

          <Text>Add to Cart</Text>
        </NavLink>
      ))}
    </ProductListCont>
  );
};

export default ProductsList;
