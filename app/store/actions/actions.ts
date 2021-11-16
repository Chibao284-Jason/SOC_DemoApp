import * as types from './types'

export const changeThemeColor = (color: string) => {
  return {
    type: types.CHANGE_THEME_COLOR,
    color
  }
}
