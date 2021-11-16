import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '@navigation/screenName';
import {FlatList} from 'react-native-gesture-handler';
interface IMenuComponentProps {}
interface IButtonMenuProps {
  onPress: () => void;
  title: string;
}

const ButtonMenu = (props: IButtonMenuProps) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity style={styles.viewButton} onPress={onPress}>
      <Text>{title}</Text>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};
const data = [
  {
    id: 1,
    name: screenName.FOLLOW_SCREEN,
  },
  {
    id: 2,
    name: screenName.HOT_SCREEN,
  },
  {
    id: 3,
    name: screenName.NEW_SCREEN,
  },
  {
    id: 4,
    name: screenName.SOCCER_SCREEN,
  },
];
const MenuComponent = (props: IMenuComponentProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <ButtonMenu
              title={item.name}
              onPress={() => navigation.navigate(item.name)}
            />
          );
        }}
      />
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  container: {},
  viewButton: {marginHorizontal: 15, marginTop: 20},
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#808080',
    marginTop: 10,
  },
});
