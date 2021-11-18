import DatePickerComponent from '@components/DatePickerComponent/DatePickerComponent';
import SearchInput from '@components/SearchComponent/SearchInput';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface ISearchScreenProps {}

const SearchScreen = (props: ISearchScreenProps) => {
  return (
    <View style={styles.container}>
      <View>
        <SearchInput label="Thể loại" placeholder="vd: Bóng đá" />
        <SearchInput label="Tiêu đề" placeholder="vd: Đội tuyển Việt Nam" />
        <SearchInput label="Tác giả" placeholder="vd: Chí Bảo" />
        <DatePickerComponent />
      </View>
      <View style={styles.viewButtonSearch}>
        <TouchableOpacity style={styles.buttonSearch}>
          <Text style={styles.textSearch}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {margin: 10, height: '100%'},
  viewButtonSearch: {
    alignItems: 'center',
    marginTop: 40,
  },
  buttonSearch: {
    backgroundColor: '#03889A',
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
  },
  textSearch: {
    fontSize: 20,
    padding: 5,
    paddingVertical: 10,
    color: 'white',
  },
});
