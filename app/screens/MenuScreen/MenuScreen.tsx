import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MenuComponent from '@components/MenuComponent/MenuComponent';
import SearchComponent from '@components/SearchComponent/SearchComponent';
interface IMenuScreenProps {}

const MenuScreen = (props: IMenuScreenProps) => {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <MenuComponent />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {},
});
