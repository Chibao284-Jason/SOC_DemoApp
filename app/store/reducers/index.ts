import * as changeThemeReducers from './changeThemeReducers'
import * as changeFontReducers from './ChangeFontReducer'
import * as listNewsReducer from './listNewsReducer'
import * as listNewsCatsReducer from './listNewsCatsReducer'
import * as listTabReducer from './listTabReducer'

export default Object.assign(
  changeThemeReducers,
  changeFontReducers,
  listTabReducer,
  listNewsCatsReducer,
  listNewsReducer,

);
