
import { ViewStyle, TextStyle } from 'react-native';
import { hasNotch, getStatusBarHeight } from '@freakycoder/react-native-helpers'
import { colorGlobal } from '@config/colorGlobal';
export type Styles = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  // line: ViewStyle;
  viewFooter: ViewStyle;
  buttonClose: ViewStyle;
  viewModal: ViewStyle;
  labelClose: TextStyle;

};



export const styles: Styles = {
  container: {
    flex: 1,
    backgroundColor: colorGlobal.backgroundGlobal
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  viewFooter: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonClose: {
    marginBottom: hasNotch() ? getStatusBarHeight() : undefined
  },
  labelClose: {
    color: 'gray', fontSize: 18
  },
  viewModal: {
    justifyContent: 'space-around',
    flex: 1,
    marginHorizontal: 10,
  }
}
