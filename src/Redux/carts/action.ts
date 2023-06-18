import { Dispatch } from 'react';
import {
    GET_CART_LOADING,
    GET_CART_ERROR,
    GET_CART_SUCCESS
  } from './actionType';
  import { getCartAPI, deleteItemAPI } from './cart.api';

//   here i have to get current user email
  let currentUser={email:"havetoenter"}

  export const getCartData = () => async (dispatch:Dispatch<any>) => {
    dispatch({ type: GET_CART_LOADING });
    try {
      let response = await getCartAPI();
      let data = response.data
      dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_CART_ERROR });
    }
  };
  
  export const deleteItem = (id:any) => async (dispatch:any) => {
    await deleteItemAPI(id);
    dispatch(getCartData());
  };