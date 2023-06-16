import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Files Import
import { getData } from "../Redux/Products/action";
import Filter from "../Components/Filter";
import ProductsList from "../Components/ProductsList";
import SortAndOrder from "../Components/SortAndOrder";
import Pagination from "../Components/Pagination";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import { ProductAndFilterCont } from "../Styles/ProductPageStyles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const URL = useSelector((store: any) => store.API_URL);
  const isLoading = useSelector((store: any) => store.ProductReducer.isLoading);
  const isError = useSelector((store: any) => store.ProductReducer.isError);
  const totalPages = useSelector(
    (store: any) => store.ProductReducer.totalPages
  );
  const Products = useSelector((store: any) => store.ProductReducer.products);
  const CategoriesArray = useSelector(
    (store: any) => store.ProductReducer.categories
  );

  // States
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    getData(`${URL}/${type}?_page=${page}&_limit=${limit}`, dispatch);
  }, [type, page]);

  useEffect(() => {
    setPage(1);
  }, [type, totalPages]);

  return (
    <ProductAndFilterCont>
      <Filter CategoriesArray={CategoriesArray} />
      <Box css={css.RightSideDiv}>
        <SortAndOrder />
        <ProductsList Products={Products} />
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      </Box>
    </ProductAndFilterCont>
  );
};

export default ProductPage;
