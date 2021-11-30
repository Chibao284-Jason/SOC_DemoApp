import {colorGlobal} from '@config/colorGlobal';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from '@store/actions';
import {ISearchNewsReducer} from '@store/reducers/searchNewsReducer';
import ViewLoadingComponent from '@components/ViewLoadingComponent/ViewLoadingComponent';
import ListNewsScreen from '@screens/ListNewsScreen/ListNewsScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import SearchShortcut from './SearchShortcut';
import {useNavigation} from '@react-navigation/native';
interface ISearchComponentProps {}
interface ISearchState {
  searchNewsReducer: ISearchNewsReducer;
}
interface IViewNotFoundData {
  keySearch: string;
}

const ViewNotFoundData = (props: IViewNotFoundData) => {
  const {keySearch} = props;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <Text style={{fontSize: 18, color: colorGlobal.textInputBorder}}>
        Không tìm thấy kết quả với từ khóa: {keySearch}
      </Text>
      <Image
        style={{width: 100, height: 100, marginTop: 15}}
        source={require('../../assets/img/noResults.png')}
      />
    </View>
  );
};
const ReadView = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <Text style={{fontSize: 18, color: colorGlobal.textInputBorder}}>
        Đã hiển thị hết kết quả
      </Text>
    </View>
  );
};
const SearchComponent = (props: ISearchComponentProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState<any>('');
  const [key, setKey] = useState<any>('');
  const [pressSearch, setPressSearch] = useState<any>(false);

  const submitSearch = (text: string) => {
    dispatch(
      Actions.searchRequest({
        filters: {News_Keywords: '*' + text + '*'},
        limit: '60',
        page: '1',
      }),
    );
    setKey(text);
    setPressSearch(true);
  };

  const isLoadingSearch = useSelector(
    (state: ISearchState) => state.searchNewsReducer.isLoading,
  );

  const dataSearchNews = useSelector(
    (state: ISearchState) => state.searchNewsReducer.dataSearch,
  );

  return (
    <>
      <View style={styles.headerSearch}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => submitSearch(textSearch)}>
            <Icon
              name="search"
              size={25}
              style={{marginRight: 5}}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Tìm kiếm"
            style={styles.input}
            onChangeText={text => {
              setTextSearch(text);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.viewCloseSearch}
          onPress={() => {
            // navigation.goBack();
          }}>
          <Text style={styles.closeSearch}>Đóng</Text>
        </TouchableOpacity>
      </View>

      {!isLoadingSearch ? (
        <ScrollView>
          <SearchShortcut />
          {dataSearchNews &&
            dataSearchNews.rows !== null &&
            dataSearchNews.rows?.map(item => {
              return <ListNewsScreen key={item.id.toString()} items={item} />;
            })}
          {pressSearch &&
            dataSearchNews &&
            dataSearchNews.rows !== null &&
            !(dataSearchNews.rows?.length < 1) && <ReadView />}
          {pressSearch &&
            dataSearchNews &&
            dataSearchNews.rows &&
            dataSearchNews.rows?.length < 1 && (
              <ViewNotFoundData keySearch={key} />
            )}
        </ScrollView>
      ) : (
        <ViewLoadingComponent />
      )}
    </>
  );
};

export default SearchComponent;
