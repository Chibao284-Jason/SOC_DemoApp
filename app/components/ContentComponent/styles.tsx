import {colorGlobal} from '@config/colorGlobal';
import {ViewStyle, TextStyle, Dimensions, ImageStyle} from 'react-native';
const width = Dimensions.get('window').width / 2 - 30;
export type Styles = {
  container: ViewStyle;
  thumbnailAudio: ViewStyle;
  thumbnailVideo: ViewStyle;
  audioControl: ViewStyle;
  imgSound: ImageStyle;
  headingTitle: (font?: string, fontSize?: number) => TextStyle;
  textCreate: (font?: string, fontSize?: number) => TextStyle;
  textHeaderContent: (font?: string, fontSize?: number) => TextStyle;
  textBodyContent: (font?: string, fontSize?: number) => any; // render HTML
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
    color: colorGlobal.timeCreateColor,
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
  thumbnailAudio: {
    width: '100%',
    height: 50,
    backgroundColor: colorGlobal.textInputBg,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgSound: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },
  thumbnailVideo: {
    position: 'relative',
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  audioControl: {
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
};
