import {colorGlobal} from '@config/colorGlobal';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Text,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from '@store/actions';
import {ISearchNewsReducer} from '@store/reducers/searchNewsReducer';
import ViewLoadingComponent from '@components/ViewLoadingComponent/ViewLoadingComponent';
import ListNewsScreen from '@screens/ListNewsScreen/ListNewsScreen';
import {ScrollView} from 'react-native-gesture-handler';

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
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={text => {
            setTextSearch(text);
          }}
        />
        <TouchableOpacity onPress={() => submitSearch(textSearch)}>
          <Icon
            name="search"
            size={25}
            style={{marginLeft: 20}}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      </View>
      {!isLoadingSearch ? (
        <ScrollView>
          {dataSearchNews &&
            dataSearchNews.rows !== null &&
            dataSearchNews.rows?.map(item => {
              return <ListNewsScreen key={item.id.toString()} items={item} />;
            })}
          {dataSearchNews &&
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

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    height: 50,
    backgroundColor: colorGlobal.backgroundGlobal,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'gray',
  },
  containerBody: {
    // flex: 1,
  },
});
