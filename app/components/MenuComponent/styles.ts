import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
type Styles = {
  container: ViewStyle
  viewButton: ViewStyle
  title: TextStyle
}
export const styles: Styles = {
  container: {},
  viewButton: { marginHorizontal: 15, marginTop: 20 },
  title: {
    fontSize: 18,
  },
}