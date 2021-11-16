import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    width: 15,
    height: 20,
  },
  title: {
    marginLeft: 10,
  },
  viewDotColor: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  check: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 2,
    marginLeft: 20,
  },
  unCheck: {
    marginLeft: 20,
  },
  imgArrow: {
    width: 20,
    height: 25,
  },
  buttonFont: {
    backgroundColor: '#20A7A0',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  labelFont: { color: 'white', margin: 10, fontSize: 18, fontWeight: '300' },
  containerTheme: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyles: {
    fontSize: 18,
  }
});
