import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

// Files Import
import { getData } from "../Redux/Products/action";
import Filter from "../Components/Filter";
import ProductsList from "../Components/ProductsList";
import SortAndOrder from "../Components/SortAndOrder";
import Pagination from "../Components/Pagination";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import { ProductAndFilterCont } from "../Styles/ProductPageStyles";

interface ProductPageType {
  type: string;
}

const ProductPage = () => {
  const [searchParam, setSearchParams] = useSearchParams();
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
  const [page, setPage] = useState(Number(searchParam.get("page")) || 1);
  const [limit, setLimit] = useState(9);
  const [SortValue, setSortValue] = useState("Relevance");
  const [OrderValue, setOrderValue] = useState("asc");

  useEffect(() => {
    const paramObj: any = {
      page,
    };
    if (SortValue != "Relevance") {
      paramObj.sort = SortValue;
      paramObj.order = OrderValue;
    }

    setSearchParams(paramObj);

    return () => {};
  }, [page, SortValue, OrderValue, searchParam]);

  useEffect(() => {
    getData(`${URL}/${type}?_page=${page}&_limit=${limit}`, dispatch);
  }, [type, page, OrderValue, , SortValue]);

  return (
    <ProductAndFilterCont>
      <Filter CategoriesArray={CategoriesArray} />
      <Box css={css.RightSideDiv}>
        <SortAndOrder
          SortValue={SortValue}
          setSortValue={setSortValue}
          OrderValue={OrderValue}
          setOrderValue={setOrderValue}
        />
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
