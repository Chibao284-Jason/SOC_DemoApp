import { IProduct } from "@models/api/product";

export interface ILoginRequestState {
  type: string;

}

export interface IProductResponseState {
  type: string;
  data: IProduct;
  errorMessage: string

}
export interface IChangeThemeColor {
  type: string;
  color: string
}