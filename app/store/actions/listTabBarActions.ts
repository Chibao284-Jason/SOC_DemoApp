import { IResponseListTabSuccess, IResponseListTabFailure } from "@models/actions/listTab";
import * as types from "./types";

export const getListTabRequest = () => {
  return {
    type: types.GET_LIST_TAB_REQUEST,
  }
}
export const getListTabSuccess = (res: IResponseListTabSuccess) => {
  return {
    type: types.GET_LIST_TAB_SUCCESS,
    data: res
  }
}
export const getListTabFailure = (message: string) => {
  return {
    type: types.GET_LIST_TAB_FAILURE,
    error: message
  }
}