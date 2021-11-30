import { colorGlobal } from '@config/colorGlobal'
import { getStatusBarHeight, hasNotch } from '@freakycoder/react-native-helpers'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
type Styles = {
  container: ViewStyle
  containerShortcut: ViewStyle
  searchContainer: ViewStyle
  searchInputContainer: ViewStyle
  viewLabelInput: ViewStyle
  input: TextStyle
  labelTrending: TextStyle
  headerSearch: ViewStyle
  viewCloseSearch: ViewStyle
  closeSearch: TextStyle
  viewTrending: ViewStyle
  textHotKey: TextStyle
}
export const styles: Styles = {
  container: {},
  searchContainer: {
    height: 40,
    backgroundColor: colorGlobal.backgroundGlobal,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
    flex: 1,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: colorGlobal.textInputBg,
  },
  containerShortcut: {
    padding: 10, backgroundColor: colorGlobal.backgroundGlobal,
    marginVertical: 5
  },
  searchInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

  },
  viewLabelInput: {
    marginBottom: 10,
  },
  labelTrending: {
    fontSize: 14,
    width: '100%',
    fontWeight: '500',
    color: colorGlobal.textHotKey,

  },
  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorGlobal.backgroundGlobal,
    paddingTop: hasNotch() ? getStatusBarHeight() - 10 : undefined,
  },
  closeSearch: {
    fontSize: 18
  },
  viewCloseSearch: {
    marginRight: 10
  },
  viewTrending: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colorGlobal.borderHotKey,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10
  },
  textHotKey: {
    color: colorGlobal.textHotKey,
  }
}