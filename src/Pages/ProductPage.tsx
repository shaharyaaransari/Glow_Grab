import axios from "axios";
import React, { useEffect } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Files Import
import { FilterDataType } from "../Functions/FilterDataType";
import { getData } from "../Redux/Products/action";
import Pagination from "../Components/Pagination";
import Filter from "../Components/Filter";
import ProductsList from "../Components/ProductsList";
import SortAndOrder from "../Components/SortAndOrder";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import {
  ProductsCont,
  ProductAndFilterCont,
} from "../Styles/ProductPageStyles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const URL = useSelector((store: any) => store.API_URL);
  const isLoading = useSelector((store: any) => store.ProductReducer.isLoading);
  const isError = useSelector((store: any) => store.ProductReducer.isError);
  const Products = useSelector((store: any) => store.ProductReducer.products);
  const CategoriesArray = useSelector(
    (store: any) => store.ProductReducer.categories
  );

  useEffect(() => {
    getData(`${URL}/products`, type, dispatch);
  }, [type]);

  return (
    <ProductsCont>
      <ProductAndFilterCont>
        <Filter CategoriesArray={CategoriesArray} />
        <Box>
          <SortAndOrder />
          <ProductsList Products={Products} />
        </Box>
      </ProductAndFilterCont>

      <Pagination />
    </ProductsCont>
  );
};

export default ProductPage;
