import { IProduct } from "@models/api/product";

export interface ILoginRequestState {
  type: string;

}

export interface IProductResponseState {
  type: string;
  data: IProduct;
  errorMessage: string

}
