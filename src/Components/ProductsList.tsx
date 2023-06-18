import React, { useState } from "react";
import { DiscountPercent } from "../Functions/DiscountPercent";
import {
  Box,
  Image,
  Text,
  Button,
  Badge,
  Center,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCartPlus, BsFillCartPlusFill } from "react-icons/bs";

// Styles Import
import * as css from "../Styles/ProductListStyles";
import {
  ProductListOuter,
  ProductListCont,
  NameTag,
} from "../Styles/ProductListStyles";

interface ProductsListType {
  Products: Array<any>;
}

interface NavigateType {
  target: string;
}

const ProductsList = ({ Products }: ProductsListType) => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);

  const handleAddToCart = (id: number) => {
    
  };
 //console.log(Products)
  return (
    <ProductListOuter>
      <ProductListCont>
        {Products?.map((item, ind) => (
          <Box key={item.id} css={css.CardOuter}>
            <Box as={NavLink} to={`/product/${item.id}`} target="_blank">
              {/* <Text>{item.id}</Text> */}
              {imageLoading && <h1>Loading</h1>}

              <Image
                onLoad={() => setImageLoading(false)}
                src={item.img}
                alt={item.name}
                css={css.CardImageCss}
              />
              <NameTag>{item.name}</NameTag>
              <Box css={css.PriceCont}>
                <Text css={css.NewPriceCss}>&#x20B9; {item.newPrice}</Text>
                {item.newPrice != item.oldPrice && (
                  <Text css={css.OldPriceCss}>
                    <s>&#x20B9; {item.oldPrice}</s>
                  </Text>
                )}
                {item.newPrice != item.oldPrice && (
                  <Text css={css.DiscountCss}>
                    {DiscountPercent(item.id, item.oldPrice, item.newPrice)}%
                  </Text>
                )}
              </Box>
              <Box css={css.RatingAndReviewCont}>
                <Badge css={css.RatingCss} variant="outline">
                  {item.rating} <Image as={AiTwotoneStar} />
                </Badge>
                <Text css={css.ReviewCss}>Based on {item.review} reviews</Text>
              </Box>
            </Box>
            <Box
              onClick={() => handleAddToCart(item.id)}
              css={css.AddToCartButton}
            >
              Add to Cart
            </Box>
          </Box>
        ))}
      </ProductListCont>
    </ProductListOuter>
  );
};

export default ProductsList;
