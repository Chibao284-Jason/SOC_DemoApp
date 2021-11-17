import {ViewStyle, TextStyle, Dimensions} from 'react-native';
const width = Dimensions.get('window').width / 2 - 30;
export type Styles = {
  container: ViewStyle;
  headingTitle: (font?: string, fontSize?: number) => TextStyle;
  textCreate: (font?: string, fontSize?: number) => TextStyle;
  textHeaderContent: (font?: string, fontSize?: number) => TextStyle;
  textBodyContent: (font?: string, fontSize?: number) => TextStyle;
};
const scale = (size: number, fontSize?: number) => {
  if (fontSize) {
    return size * (fontSize / 18);
  }
  size;
};
export const styles: Styles = {
  container: {padding: 10},

  headingTitle: (font, fontSize) => ({
    fontSize: scale(30, fontSize),
    fontWeight: '600',
    fontFamily: font ? font : 'Arial',
  }),
  textCreate: (font, fontSize) => ({
    color: '#8D8D8D',
    fontWeight: 'bold',
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
    fontSize: scale(14, fontSize),
  }),
  textHeaderContent: (font, fontSize) => ({
    fontWeight: 'bold',
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
    fontSize: scale(18, fontSize),
    lineHeight: scale(30, fontSize),
  }),
  textBodyContent: (font, fontSize) => ({
    fontFamily: font ? font : 'Arial',
    marginVertical: 10,
    fontSize: scale(18, fontSize),
    lineHeight: scale(30, fontSize),
  }),
};
