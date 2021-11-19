import { colorGlobal } from "@config/colorGlobal";
import { getStatusBarHeight, hasNotch } from "@freakycoder/react-native-helpers";
import { ViewStyle, ImageStyle } from 'react-native'
const HEADER_SIZE = 70;
type Styles = {
  container: ViewStyle
  viewBanner: ViewStyle
  viewHeader: ViewStyle
  viewButton: ViewStyle
  imgBanner: ImageStyle
  line: ViewStyle
}
export const styles: Styles = {
  container: {},
  viewBanner: {
    width: '100%',
    height: HEADER_SIZE,
    backgroundColor: colorGlobal.backgroundGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  viewHeader: {
    paddingTop: hasNotch() ? getStatusBarHeight() : undefined,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgBanner: {
    width: 100,
    height: HEADER_SIZE,
    backgroundColor: colorGlobal.backgroundGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: `100%`,
    borderBottomColor: colorGlobal.lineColor,
    borderBottomWidth: 1,
  },
};
