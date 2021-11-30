
import * as listNewsActions from "./listNewsActions";
import * as listTabBarActions from "./listTabBarActions";
import * as listNewsCatsActions from "./listNewsCatsActions";
import * as searchNewsAction from "./searchNewsAction";
import * as getDetailNewsActions from "./getDetailNewsActions";
import * as dataTickActions from "./dataTickAction";
export const Actions = {
  ...listTabBarActions,
  ...listNewsActions,
  ...listNewsCatsActions,
  ...searchNewsAction,
  ...getDetailNewsActions,
  ...dataTickActions
}
