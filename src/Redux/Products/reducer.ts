import {
  GetRequestLoading,
  GetRequestError,
  GetRequestSuccess,
} from "./actionTypes";

// This function returns DataBase URL
export const API_URL = () => {
  const URL = process.env.REACT_APP_TESTING_URL;
  return URL;
};

const initState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case GetRequestLoading: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GetRequestError: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GetRequestSuccess: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    default: {
      return initState;
    }
  }
};
