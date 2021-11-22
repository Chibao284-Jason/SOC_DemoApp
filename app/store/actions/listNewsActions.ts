import * as types from "./types";

export const getListNewsRequestActions = () => ({
  type: types.GET_LIST_NEWS_REQUEST,
  params: 1
})
export const getListNewsSuccessActions = (data: any) => ({
  type: types.GET_LIST_NEWS_SUCCESS,
  data
})
export const getListNewsFailureActions = (error: any) => ({
  type: types.GET_LIST_NEWS_FAILURE,
  error
})