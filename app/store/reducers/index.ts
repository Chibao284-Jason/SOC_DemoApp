import * as changeThemeReducers from './changeThemeReducers'
import * as changeFontReducers from './ChangeFontReducer'
import * as listNewsReducer from './listNewsReducer'
import * as listNewsCatsReducer from './listNewsCatsReducer'
import * as listTabReducer from './listTabReducer'
import * as searchNewsReducer from './searchNewsReducer'
import * as detailNewsReducer from './detailNewsReducer'
import * as dataTickReducer from './dataTickReducer'

export default Object.assign(
  changeThemeReducers,
  changeFontReducers,
  listTabReducer,
  listNewsCatsReducer,
  listNewsReducer,
  searchNewsReducer,
  detailNewsReducer,
  dataTickReducer
);
