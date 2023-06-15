import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import { ProductsCont } from "../Styles/ProductPageStyles";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const data = useSelector((store: any) => store.API_URL);
  console.log(data);

  return <ProductsCont>Product Page</ProductsCont>;
};

export default ProductPage;
