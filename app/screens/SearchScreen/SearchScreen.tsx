import SearchComponent from '@components/SearchComponent/SearchComponent';
import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {hasNotch, getStatusBarHeight} from '@freakycoder/react-native-helpers';
interface ISearchScreenProps {}

const SearchScreen = (props: ISearchScreenProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <SearchComponent />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGlobal.backgroundGlobal,
    flex: 1,
  },
});
