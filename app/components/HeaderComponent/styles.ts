import { getStatusBarHeight, hasNotch } from '@freakycoder/react-native-helpers';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
const HEADER_SIZE = 70;
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
}
export const styles: Styles = {
  container: {
    backgroundColor: '#fff',
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
    width: 60,
  },
  imgBanner: {
    width: 100,
    height: HEADER_SIZE,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBanner: {
    width: '100%',
    height: HEADER_SIZE,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  viewHeader: {
    paddingTop: hasNotch() ? getStatusBarHeight() - 15 : undefined,
  },
  labelTabBar: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  focusItemTab: {
    borderBottomColor: 'aqua',
    borderBottomWidth: 3,
  },
};
