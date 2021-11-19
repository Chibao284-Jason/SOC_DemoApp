import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colorGlobal } from "@config/colorGlobal";

type Styles = {
  container: ViewStyle
  viewSource: ViewStyle
  viewDot: ViewStyle
  viewLogo: ViewStyle
  textCreate: TextStyle
  viewLabelNews: TextStyle
  labelNews: ViewStyle
  textLabel: TextStyle
  imgThumbnail: ImageStyle
  imgBgBorderRadius: ImageStyle
  imgSource: ImageStyle
}
export const styles: Styles = {
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  viewSource: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  viewDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: colorGlobal.backgroundGlobal,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCreate: {
    color: colorGlobal.timeCreateColor,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imgThumbnail: {
    width: 150,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },
  imgBgBorderRadius: {
    borderRadius: 10,
    resizeMode: 'stretch'
  },
  viewLabelNews: {
    flexDirection: 'row',
    flex: 1,
  },
  labelNews: {
    marginLeft: 5,
    width: '100%',
  },
  textLabel: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  imgSource: {
    width: 70,
    height: 20
  }
}