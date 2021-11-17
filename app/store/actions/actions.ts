import * as types from './types'

export const changeThemeColor = (color: string) => {
  return {
    type: types.CHANGE_THEME_COLOR,
    color
  }
}

export const changeThemeFontFamily = (font: string) => {
  return {
    type: types.CHANGE_THEME_FONT_FAMILY,
    font
  }
}
export const changeThemeFontSize = (fontSize: number) => {
  return {
    type: types.CHANGE_THEME_FONT_SIZE,
    fontSize
  }
}
