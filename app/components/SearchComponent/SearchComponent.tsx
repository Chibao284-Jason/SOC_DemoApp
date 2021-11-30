import {colorGlobal} from '@config/colorGlobal';
import React, {useEffect, useRef, useState} from 'react';
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
import {IDataTickState} from '@store/reducers/dataTickReducer';
import CardComponent from '@components/CardComponent/CardComponent';
import {screenName} from '@navigation/screenName';
interface ISearchComponentProps {}
interface ISearchState {
  searchNewsReducer: ISearchNewsReducer;
}
interface IViewNotFoundData {
  keySearch: string;
}
interface ITickNews {
  dataTickReducer: IDataTickState;
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
  const [focusText, setFocusText] = useState(false);
  const [textSearch, setTextSearch] = useState<any>('');
  const [key, setKey] = useState<any>('');
  const [pressSearch, setPressSearch] = useState<any>(false);
  const tickNews = useSelector(
    (state: ITickNews) => state.dataTickReducer.data,
  );
  const isLoadingSearch = useSelector(
    (state: ISearchState) => state.searchNewsReducer.isLoading,
  );

  const dataSearchNews = useSelector(
    (state: ISearchState) => state.searchNewsReducer.dataSearch,
  );
  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (inputRef) {
      setTimeout(() => {
        inputRef && inputRef.current && inputRef.current.focus();
      }, 450);
    }
  }, []);
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
            placeholder="tìm kiếm"
            style={styles.input}
            onChangeText={text => {
              setTextSearch(text);
            }}
            value={textSearch}
            placeholderTextColor={colorGlobal.timeCreateColor}
            ref={inputRef}
            onSubmitEditing={() => submitSearch(textSearch)}
          />
          {textSearch !== '' && (
            <TouchableOpacity onPress={() => setTextSearch('')}>
              <Image
                source={require('../../assets/img/closeIcon.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.viewCloseSearch}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.closeSearch}>Đóng</Text>
        </TouchableOpacity>
      </View>

      {!isLoadingSearch ? (
        <ScrollView>
          {key === '' && (
            <>
              <SearchShortcut />
              <View style={{backgroundColor: 'white', padding: 10}}>
                <View style={styles.viewLabelInput}>
                  <Text style={styles.labelTrending}>ĐÃ ĐÁNH DẤU</Text>
                </View>
                {tickNews.map(items => {
                  const {title, thumbnail, datetime, count_view, id} = items;
                  return (
                    <CardComponent
                      imgUri={{uri: thumbnail}}
                      countView={count_view}
                      timeCreated={datetime}
                      title={title}
                      onPress={() =>
                        navigation.navigate(
                          screenName.DETAIL_SCREEN as never,
                          {
                            id: id,
                          } as never,
                        )
                      }
                    />
                  );
                })}
              </View>
            </>
          )}
          {dataSearchNews &&
            dataSearchNews.rows !== null &&
            dataSearchNews.rows?.map(item => {
              return <ListNewsScreen key={item.id.toString()} items={item} />;
            })}
          {pressSearch &&
            dataSearchNews &&
            dataSearchNews.rows !== null &&
            !(dataSearchNews.rows && dataSearchNews.rows.length < 1) && (
              <ReadView />
            )}
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
