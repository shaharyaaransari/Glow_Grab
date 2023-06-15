import axios from "axios";
import React, { useEffect } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Files Import
import { FilterDataType } from "../Functions/FilterDataType";
import { getData } from "../Redux/Products/action";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import { ProductsCont } from "../Styles/ProductPageStyles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const URL = useSelector((store: any) => store.API_URL);
  const isLoading = useSelector((store: any) => store.ProductReducer.isLoading);
  const isError = useSelector((store: any) => store.ProductReducer.isError);
  const productStore = useSelector(
    (store: any) => store.ProductReducer.products
  );
  const Products = FilterDataType(productStore, type);
  console.log(Products);

  useEffect(() => {
    getData(`${URL}/products`, dispatch);
  }, [type]);

  return <ProductsCont></ProductsCont>;
};

export default ProductPage;
