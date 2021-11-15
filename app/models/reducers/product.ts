import { IProduct } from "@models/api/product";

export interface IProductState {
  isLoading: false,
  errorMessage: '',
  data: IProduct[]
}
