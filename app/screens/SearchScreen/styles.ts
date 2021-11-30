import { colorGlobal } from "@config/colorGlobal";
import { ViewStyle, TextStyle } from 'react-native'
type Styles = {
  container: ViewStyle
  viewButtonSearch: ViewStyle
  buttonSearch: ViewStyle
  textSearch: TextStyle
}

export const styles: Styles = ({
  container: { backgroundColor: colorGlobal.backgroundGlobal, flex: 1 },
  viewButtonSearch: {
    alignItems: 'center',
    marginTop: 40,
  },
  buttonSearch: {
    backgroundColor: colorGlobal.buttonSearch,
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
  },
  textSearch: {
    fontSize: 20,
    padding: 5,
    paddingVertical: 10,
    color: colorGlobal.labelTab,
  },

});
