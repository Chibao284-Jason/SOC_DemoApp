import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuComponent from '@components/MenuComponent/MenuComponent';
import SearchComponent from '@components/SearchComponent/SearchComponent';
interface IMenuScreenProps {
  onPress: (i: any) => void;
}

const MenuScreen = (props: IMenuScreenProps) => {
  const {onPress} = props;

  return (
    <View style={styles.container}>
      {/* <SearchComponent /> */}
      <MenuComponent onPress={i => onPress(i)} />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {},
});
