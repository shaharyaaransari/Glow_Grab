// action.ts
import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";
import {
  Action,
  GetRequestLoading,
  GetRequestError,
  GetRequestSuccess,
} from "./actionTypes";
import { FilterDataType } from "../../Functions/FilterDataType";

// Action Object Functions
const setLoadingGetRequest = (): Action => {
  return { type: GetRequestLoading };
};
const setErrorGetRequest = (): Action => {
  return { type: GetRequestError };
};
const setSuccessGetRequest = (payload: any): Action => {
  return { type: GetRequestSuccess, payload };
};

// Get Request Function
export const getData = (url: string, type: any, dispatch: Dispatch) => {
  dispatch(setLoadingGetRequest());
  axios({
    method: "get",
    url: url,
  })
    .then((res) => {
      // console.log(res.data);
      const data = FilterDataType(res.data, type);
      dispatch(setSuccessGetRequest(data));
    })
    .catch((err) => {
      console.log(err);

      dispatch(setErrorGetRequest());
    });
};
