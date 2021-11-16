import * as productReducer from './productReducers'
import * as changeThemeReducers from './changeThemeReducers'

export default Object.assign(
  productReducer,
  changeThemeReducers
);
