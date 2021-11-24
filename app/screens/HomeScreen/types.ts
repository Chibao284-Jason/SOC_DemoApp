import { IListNewsCatsReducer } from "@store/reducers/listNewsCatsReducer";
import { IListNewsReducer } from "@store/reducers/listNewsReducer";
import { IListTabReducer } from "@store/reducers/listTabReducer";
import { ImageSourcePropType } from "react-native";

//interface
export interface IHeaderComponentProps {
  onPress: () => void;
}
export interface ITabBar {
  id?: number;
  name?: string;
  isFocus?: boolean;
  onPress?: () => void;
}
export interface IIconMenuProps {
  img: ImageSourcePropType;
}
export interface IListTabState {
  listTabReducer: IListTabReducer;
}
export interface IListNewsState {
  listNewsReducer: IListNewsReducer;
}

export interface IListNewsCatsState {
  listNewsCatsReducer: IListNewsCatsReducer;
}