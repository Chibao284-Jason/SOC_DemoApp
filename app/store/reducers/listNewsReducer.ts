import * as types from "@store/actions/types";


const initialState = {
  isLoading: false,
  data: [{}],
  error: ''
}

export const ChangeFontReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LIST_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_LIST_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case types.GET_LIST_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state

  }

}
