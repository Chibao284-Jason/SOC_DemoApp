import { colorGlobal } from '@config/colorGlobal'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
type Styles = {
  container: ViewStyle
  containerInput: ViewStyle
  searchContainer: ViewStyle
  searchInputContainer: ViewStyle
  viewLabelInput: ViewStyle
  input: TextStyle
  labelInput: TextStyle

}
export const styles: Styles = {
  container: {},
  searchContainer: {
    height: 50,
    backgroundColor: colorGlobal.backgroundGlobal,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: colorGlobal.textInputBg,
  },
  containerInput: { marginTop: 20 },
  searchInputContainer: {
    height: 50,
    backgroundColor: colorGlobal.textInputBg,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
  },
  viewLabelInput: {
    marginBottom: 10,
  },
  labelInput: {
    fontSize: 18,
    width: '100%',
  },

}