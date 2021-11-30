import { IAddDataTickAction, IRemoveDataTickAction } from '@models/actions/dataTickType'
import { IDataTick } from '@models/reducers/dataTick'
import * as types from './types'

export const addDataTick = (data: IDataTick[]): IAddDataTickAction => {
  return {
    type: types.ADD_DATA_TICK,
    data
  }
}

export const removeDataTick = (data: IDataTick[]): IRemoveDataTickAction => {
  return {
    type: types.REMOVE_DATA_TICK,
    data
  }
}
