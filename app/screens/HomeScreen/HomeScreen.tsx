import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Animated} from 'react-native';
import {screenName} from '@navigation/screenName';
import ListNewsScreen from '@screens/ListNewsScreen/ListNewsScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colorGlobal, colorTabBar} from '@config/colorGlobal';
import HeaderBanner from '@components/HeaderComponent/HeaderBanner/HeaderBanner';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Actions} from '@store/actions';
import ViewLoadingComponent from '@components/ViewLoadingComponent/ViewLoadingComponent';
import {
  IHeaderComponentProps,
  IListTabState,
  IListNewsState,
  IListNewsCatsState,
} from './types';
import {IconMenu} from '@components/IconMenuComponent/IconMenu';
import {TabBarItem} from '@components/TabBarItemComponent/TabBarItem';
import {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
} from '@constants/sizeDefault';
import ImageViewLoading from '@components/ImagePlaceholder/index';
import ImagePlaceholder from '@components/ImagePlaceholder/ImagePlaceholder';
const HomeScreen = (props: IHeaderComponentProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [nameTab, setNameTab] = useState<string | undefined>(
    screenName.SEARCH_SCREEN,
  );
  const [pageCurrent, setPageCurrent] = useState(2);
  const [idCatsCurrent, setIdCatsCurrent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dataNews, setDataNews] = useState<any>(null);
  useEffect(() => {
    dispatch(Actions.getListTabRequest());
    dispatch(
      Actions.getListNewsRequestActions({
        limit: '20',
        page: '1',
      }),
    );
  }, []);
  useEffect(() => {
    if (route.params !== undefined) {
      setIdCatsCurrent(route.params.filters.News_Cats);
    }
  }, [route.params]);

  const onPressCategories = async (item: any) => {
    await dispatch(
      Actions.getCatsListNewsRequestActions({
        filters: {News_Cat: item.id},
        limit: '20',
        page: '1',
      }),
    );
    setNameTab(item.name);
    setPageCurrent(2);
    setIdCatsCurrent(item.id);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };
  const onLoadMore = () => {
    if (idCatsCurrent !== '') {
      dispatch(
        Actions.getCatsListNewsRequestActions({
          filters: {News_Cat: idCatsCurrent},
          limit: '20',
          page: pageCurrent.toString(),
        }),
      );
      setPageCurrent(pageCurrent + 1);
      return;
    }
    dispatch(
      Actions.getListNewsRequestActions({
        limit: '20',
        page: pageCurrent.toString(),
      }),
    );
    setPageCurrent(pageCurrent + 1);
  };

  const listTabReducer = useSelector(
    (state: IListTabState) => state.listTabReducer,
  );
  const listNewsReducer = useSelector(
    (state: IListNewsState) => state.listNewsReducer,
  );
  const listNewsCatsReducer = useSelector(
    (state: IListNewsCatsState) => state.listNewsCatsReducer,
  );
  const dataCategories = listTabReducer.data.data;
  const isLoadingListTab = listTabReducer.isLoading;
  const isLoadingListNews = listNewsReducer.isLoading;
  const dataListNews = listNewsReducer.data;
  const dataListNewsCats = listNewsCatsReducer.data;
  const isLoadingListNewsCats = listNewsCatsReducer.isLoading;
  const isLoadingMoreListNewsCats = listNewsCatsReducer.isLoadingMore;

  useEffect(() => {
    if (!isLoadingListNewsCats) {
      setDataNews(dataListNewsCats);
    }
    setNameTab('');
  }, [isLoadingListNewsCats]);

  useEffect(() => {
    if (!isLoadingListNews) {
      setDataNews(dataListNews);
    }
  }, [isLoadingListNews]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    // extrapolate: 'clamp',
    extrapolate: 'clamp',
  });

  return (
    <>
      {!isLoadingListTab ? (
        <View style={styles.container}>
          <View style={styles.viewHeader}>
            <Animated.View style={{height: headerHeight}}>
              <TouchableOpacity
                style={styles.viewBanner}
                onPress={() => {
                  dispatch(
                    Actions.getListNewsRequestActions({
                      limit: '20',
                      page: '1',
                    }),
                  );
                }}>
                <HeaderBanner />
              </TouchableOpacity>
            </Animated.View>
            <View>
              <LinearGradient
                colors={colorTabBar}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.tabBar}>
                <TouchableOpacity
                  style={[styles.tabItem]}
                  onPress={() => {
                    navigation.navigate(screenName.MENU_SCREEN as never);
                  }}>
                  <IconMenu
                    img={{
                      uri: 'https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-5.jpg',
                    }}
                  />
                </TouchableOpacity>
                <FlatList
                  horizontal={true}
                  scrollEnabled={true}
                  data={dataCategories}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.viewTabBar}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => {
                    return (
                      <TabBarItem
                        name={item.name}
                        isFocus={item.isFocus}
                        onPress={() => {
                          onPressCategories(item);
                        }}
                      />
                    );
                  }}
                />
                <TouchableOpacity
                  style={[styles.tabItem]}
                  onPress={() => {
                    navigation.navigate(screenName.SEARCH_SCREEN as never);
                  }}>
                  <Icon
                    name="search"
                    size={30}
                    color={colorGlobal.iconSearchColor}
                    tvParallaxProperties={undefined}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          {!isLoading && dataNews !== null ? (
            <FlatList
              style={styles.containerBody}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={1}
              scrollEventThrottle={10}
              scrollEnabled={
                nameTab === screenName.SEARCH_SCREEN ? false : true
              }
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
              data={dataNews.rows}
              onEndReached={i => {
                onLoadMore();
              }}
              ListFooterComponent={
                isLoadingMoreListNewsCats ? <ImagePlaceholder /> : null
              }
              renderItem={({item}) => {
                return <ListNewsScreen items={item} />;
              }}
            />
          ) : (
            <ImageViewLoading />
          )}
        </View>
      ) : (
        <ViewLoadingComponent />
      )}
    </>
  );
};
export default HomeScreen;
