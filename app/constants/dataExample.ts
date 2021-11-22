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

interface IDataListNews {
  id: number
  imgUri: string;
  content?: string;
  timeCreated?: string | number;
}
export const dataListNews: IDataListNews[] = [{
  id: 0,
  imgUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png'
},
{
  id: 1,
  imgUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',

}
  , {
  id: 2,
  imgUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',

},
{
  id: 3,
  imgUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',

}]