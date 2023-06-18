import {
    GET_CART_LOADING,
    GET_CART_ERROR,
    GET_CART_SUCCESS
  } from './actionType';
  
  interface Action {
    type: string;
    payload: any;
  }
  
  interface State {
    loading: boolean;
    error: boolean;
    addProduct: any[];
  }
  
  const initialState: State = {
    loading: false,
    error: false,
    addProduct: []
  };
  
  export const reducer = (state: State = initialState, { type, payload }: Action) => {
    switch (type) {
      case GET_CART_LOADING: {
        return {
          ...state,
          loading: true
        };
      }
      case GET_CART_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
      case GET_CART_SUCCESS: {
        return {
          ...state,
          loading: false,
          addProduct: payload
        };
      }
      default: {
        return state;
      }
    }
  };