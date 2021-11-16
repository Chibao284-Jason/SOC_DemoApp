import { IChangeThemeColor } from '@models/actions/product';
import * as types from '@store/actions/types';
type IColorTheme = {
  color: string
}
const initialState: IColorTheme = {
  color: ''
}



export const ChangeThemeColorReducer = (state = initialState, action: IChangeThemeColor) => {

  switch (action.type) {

    case types.CHANGE_THEME_COLOR:
      console.log('vaoooo', action)

      console.log(action.color)
      return {
        ...state,
        color: action.color
      };

    default:
      return state

  }

}
