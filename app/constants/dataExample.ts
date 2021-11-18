import { screenName } from "@navigation/screenName";
export interface IDataTab {
  id: number;
  name?: string;
  isFocus?: boolean;
}


export const dataTab: IDataTab[] = [
  {
    id: 0,
    name: screenName.FOLLOW_SCREEN,
    isFocus: true,
  },
  {
    id: 1,
    name: screenName.HOT_SCREEN,
    isFocus: false,
  },
  {
    id: 2,
    name: screenName.NEW_SCREEN,
    isFocus: false,
  },
  {
    id: 3,
    name: screenName.SOCCER_SCREEN,
    isFocus: false,
  },
];

interface IDataColorTheme {
  id: number;
  color: string;
  isSelect: boolean;
}

export const dataColorTheme: IDataColorTheme[] = [
  {
    id: 0,
    color: '#5EBEBC',
    isSelect: false,
  },
  {
    id: 1,
    color: '#262626',
    isSelect: false,
  },
  {
    id: 2,
    color: '#FCBC99',
    isSelect: false,
  },
  {
    id: 3,
    color: '#F58A92',
    isSelect: false,
  },
];