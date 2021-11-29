import { colorGlobal } from '@config/colorGlobal'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
type Styles = {
  container: ViewStyle
  viewButton: ViewStyle
  title: TextStyle
}
export const styles: Styles = {
  container: { backgroundColor: colorGlobal.backgroundGlobal },
  viewButton: { marginTop: 20 },
  title: {
    fontSize: 18,
  },
}