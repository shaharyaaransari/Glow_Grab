// action.ts
import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";
import {
  Action,
  GetRequestLoading,
  GetRequestError,
  GetRequestSuccess,
} from "./actionTypes";

const setLoadingGetRequest = (): Action => {
  return { type: GetRequestLoading };
};
const setErrorGetRequest = (): Action => {
  return { type: GetRequestError };
};
const setSuccessGetRequest = (payload: any): Action => {
  return { type: GetRequestSuccess, payload };
};

export const getData = (url: string, dispatch: Dispatch) => {
  dispatch(setLoadingGetRequest());
  axios({
    method: "get",
    url: url,
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(setSuccessGetRequest(res.data));
    })
    .catch((err) => {
      console.log(err);

      dispatch(setErrorGetRequest());
    });
};
