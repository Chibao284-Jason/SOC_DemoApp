import * as changeThemeReducers from './changeThemeReducers'
import * as changeFontReducers from './ChangeFontReducer'
import * as listNewsReducer from './listNewsReducer'
import * as listNewsCatsReducer from './listNewsCatsReducer'
import * as listTabReducer from './listTabReducer'
import * as searchNewsReducer from './searchNewsReducer'

export default Object.assign(
  changeThemeReducers,
  changeFontReducers,
  listTabReducer,
  listNewsCatsReducer,
  listNewsReducer,
  searchNewsReducer
);
