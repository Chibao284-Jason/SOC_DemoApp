import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuComponent from '@components/MenuComponent/MenuComponent';
import {colorGlobal} from '@config/colorGlobal';
import HeaderDetail from '@components/HeaderComponent/HeaderDetail/HeaderDetail';
import {useNavigation} from '@react-navigation/native';
interface IMenuScreenProps {
  onPress: (i: any) => void;
}

const MenuScreen = (props: IMenuScreenProps) => {
  const {onPress} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderDetail
        isButtonLeft={true}
        isButtonCenter={true}
        isButtonRight={true}
        headerLeft={() => console.log()}
        headerRight={() => navigation.goBack()}
        iconLeft={{uri: ''}}
        iconRight={require('../../assets/img/arrowRight.png')}
        iconRightStyle={{width: 20, height: 20, resizeMode: 'stretch'}}
        buttonRightStyle={{marginRight: 20}}
        title="Chuyên mục"
      />
      <MenuComponent onPress={onPress} />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colorGlobal.backgroundGlobal, flex: 1},
});
