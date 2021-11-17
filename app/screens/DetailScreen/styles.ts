
import { ViewStyle, TextStyle, Dimensions, ImageStyle, StyleSheet } from 'react-native';
export type Styles = {
  container: (bottomShow?: number) => ViewStyle; // 1 is show, -1 is hide
  contentContainer: ViewStyle;
  line: ViewStyle;
  viewFooter: ViewStyle;
  buttonClose: ViewStyle;
  labelClose: TextStyle;

};



export const styles: Styles = {
  container: (bottomShow) => ({
    flex: 1,
    backgroundColor: bottomShow === 1 ? '#808080' : '#fff'
  }),
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#808080',
    marginVertical: 20,
  },
  viewFooter: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonClose: {},
  labelClose: { color: 'gray', fontSize: 18 },
}
