import { IAddDataTickAction, IRemoveDataTickAction } from '@models/actions/dataTickType';
import { IDataTick } from '@models/reducers/dataTick';
import * as types from '@store/actions/types';
export type IDataTickState = {
  data: IDataTick[]
}
const initialState: IDataTickState = {
  data: []
  // data: []
}

export const dataTickReducer = (state = initialState, action: IAddDataTickAction & IRemoveDataTickAction) => {
  switch (action.type) {
    case types.ADD_DATA_TICK:

      return {
        data: [...action.data, ...state.data]
      };
    case types.REMOVE_DATA_TICK:
      let dataTemp
      dataTemp = state.data.filter(items => {
        return items.id !== action.data[0].id
      })
      return {
        data: dataTemp
      };
    default:
      return state

  }

}
