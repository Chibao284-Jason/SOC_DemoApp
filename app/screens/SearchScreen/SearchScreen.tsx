import DatePickerComponent from '@components/DatePickerComponent/DatePickerComponent';
import HeaderDetail from '@components/HeaderComponent/HeaderDetail/HeaderDetail';
import SearchComponent from '@components/SearchComponent/SearchComponent';
import SearchInput from '@components/SearchComponent/SearchInput';
import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ISearchScreenProps {}

const SearchScreen = (props: ISearchScreenProps) => {
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
        iconRightStyle={{
          display: 'none',
        }}
        buttonRightStyle={{marginRight: 20}}
        title="Tìm kiếm"
        labelRight={'Đóng'}
      />
      <SearchComponent />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colorGlobal.backgroundGlobal, flex: 1},
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
