import { IDataDetailNews, IDetailNewsActionsRequest, IDetailNewsActionsSuccess, IGetParamsDetailRequest } from "@models/actions/getDetailNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "./types";

export const getDetailNewsRequestActions = (params: IGetParamsDetailRequest): IDetailNewsActionsRequest => ({
  type: types.GET_DETAIL_NEWS_REQUEST,
  params: params
})
export const getDetailNewsSuccessActions = (data: IDataDetailNews): IDetailNewsActionsSuccess => ({
  type: types.GET_DETAIL_NEWS_SUCCESS,
  data: data
})
export const getDetailNewsFailureActions = (error: any): IErrorAction => ({
  type: types.GET_DETAIL_NEWS_FAILURE,
  error: error.message
})
