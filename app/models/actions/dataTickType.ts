import { IDataTick } from "@models/reducers/dataTick";

export interface IAddDataTickAction {
  type: string;
  data: IDataTick[]
}
export interface IRemoveDataTickAction {
  type: string;
  data: IDataTick[]
}