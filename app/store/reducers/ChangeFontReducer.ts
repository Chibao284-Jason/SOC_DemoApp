import { IChangeThemeFontFamily, IChangeThemeFontSize } from '@models/actions/changeTheme';
import * as types from '@store/actions/types';
type IThemeFont = {
  font: string
  fontSize: number
}
const initialState: IThemeFont = {
  font: 'Arial',
  fontSize: 18
}

export const ChangeFontReducer = (state = initialState, action: IChangeThemeFontFamily & IChangeThemeFontSize) => {
  switch (action.type) {
    case types.CHANGE_THEME_FONT_FAMILY:
      return {
        ...state,
        font: action.font
      };
    case types.CHANGE_THEME_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize
      };
    default:
      return state

  }

}
