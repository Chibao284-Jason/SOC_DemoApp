import { colorGlobal } from '@config/colorGlobal';
import { IChangeThemeColor } from '@models/actions/changeTheme';
import * as types from '@store/actions/types';
type IColorTheme = {
  color: string
}
const initialState: IColorTheme = {
  color: colorGlobal.sliderDefault
}

export const ChangeThemeColorReducer = (state = initialState, action: IChangeThemeColor) => {

  switch (action.type) {
    case types.CHANGE_THEME_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state

  }

}
