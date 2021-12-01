import { getStatusBarHeight, hasNotch } from '@freakycoder/react-native-helpers';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colorGlobal } from "@config/colorGlobal";
const HEADER_SIZE = 55;
type Styles = {
  container: ViewStyle
  containerBody: ViewStyle
  tabBar: ViewStyle
  tabItem: ViewStyle
  imgBanner: ImageStyle,
  viewBanner: ViewStyle
  viewHeader: ViewStyle
  labelTabBar: TextStyle
  focusItemTab: ViewStyle
  viewTabBar: ViewStyle,
  iconMenu: ImageStyle
}
export const styles: Styles = {
  container: {
    backgroundColor: colorGlobal.backgroundGlobal,
    flex: 1
  },
  containerBody: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',

  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  imgBanner: {
    width: 100,
    height: HEADER_SIZE,
    backgroundColor: colorGlobal.backgroundGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBanner: {
    width: '100%',
    height: HEADER_SIZE,
    backgroundColor: colorGlobal.backgroundGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeader: {
    paddingTop: hasNotch() ? getStatusBarHeight() : undefined,
  },
  labelTabBar: {
    textAlign: 'center',
    color: colorGlobal.labelTab,
    fontWeight: 'bold',
  },
  focusItemTab: {
    borderBottomColor: colorGlobal.focusLineTab,
    borderBottomWidth: 3,
  },
  viewTabBar: {
    height: HEADER_SIZE,
    justifyContent: 'space-around',
  },
  iconMenu: {
    width: 30,
    height: 30,
    resizeMode: 'cover'
  }
};
