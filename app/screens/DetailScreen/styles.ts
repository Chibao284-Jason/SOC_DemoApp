
import { ViewStyle, TextStyle, Dimensions, ImageStyle } from 'react-native';
const width = Dimensions.get('window').width / 2 - 30;
export type Styles = {
  container: ViewStyle;
  viewLike: (plantIsLike: boolean) => ViewStyle;

};

export const styles: Styles = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'gray'
  },
  viewLike: plantIsLike => ({
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: plantIsLike
      ? 'rgba(245, 42, 42,0.2)'
      : '#FFFFFFAA',
  }),

};
