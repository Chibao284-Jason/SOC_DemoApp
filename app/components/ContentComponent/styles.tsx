import {
  ViewStyle,
  TextStyle,
  Dimensions,
  ImageStyle,
  StyleSheet,
} from 'react-native';
const width = Dimensions.get('window').width / 2 - 30;
export type Styles = {
  container: ViewStyle;
  headingTitle: (font?: string) => TextStyle;
  textCreate: (font?: string) => TextStyle;
  textHeaderContent: (font?: string) => TextStyle;
  textBodyContent: (font?: string) => TextStyle;
};

export const styles: Styles = {
  container: {margin: 10},

  headingTitle: font => ({
    fontSize: 30,
    fontWeight: '600',
    fontFamily: font ? font : 'Arial',
  }),
  textCreate: font => ({
    color: '#8D8D8D',
    fontWeight: 'bold',
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
  }),
  textHeaderContent: font => ({
    fontWeight: 'bold',
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
  }),
  textBodyContent: font => ({
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
  }),
};
