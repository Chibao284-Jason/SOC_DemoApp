import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '@navigation/screenName';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
interface IMenuComponentProps {
  onPress: (i: string) => void;
}
interface IButtonMenuProps {
  onPress: (i: string) => void;
  title: string;
}

const ButtonMenu = (props: IButtonMenuProps) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity style={styles.viewButton} onPress={() => onPress(title)}>
      <Text style={styles.title}>{title}</Text>
      <ViewLineComponent />
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
  const {onPress} = props;
  return (
    <View style={styles.container}>
      {data.map(item => {
        return <ButtonMenu title={item.name} onPress={i => onPress(i)} />;
      })}
    </View>
  );
};

export default MenuComponent;

// const styles = StyleSheet.create({
//   container: {},
//   viewButton: {marginHorizontal: 15, marginTop: 20},
//   line: {
//     width: '100%',
//     height: 1,
//     backgroundColor: colorGlobal.lineColor,
//     marginTop: 10,
//   },
//   title: {
//     fontSize: 18,
//   },
// });
