
import * as listNewsActions from "./listNewsActions";
import * as listTabBarActions from "./listTabBarActions";
import * as listNewsCatsActions from "./listNewsCatsActions";
import * as searchNewsAction from "./searchNewsAction";
export const Actions = Object.assign(
  {},
  listTabBarActions,
  listNewsActions,
  listNewsCatsActions,
  searchNewsAction
);
