import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import {screenName} from '@navigation/screenName';
import ListNewsScreen from '@screens/ListNewsScreen/ListNewsScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {dataTab} from '@constants/dataExample';
import {styles} from './styles';
import {colorGlobal, colorTabBar} from '@config/colorGlobal';
import HeaderBanner from '@components/HeaderComponent/HeaderBanner/HeaderBanner';
import {useDispatch, useSelector} from 'react-redux';
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

// Size height
const HEADER_MAX_HEIGHT = 70;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeScreen = (props: IHeaderComponentProps) => {
  const dispatch = useDispatch();
  const [searchFocus, setSearchFocus] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [nameTab, setNameTab] = useState<string | undefined>();
  const [pageCurrent, setPageCurrent] = useState(2);
  useEffect(() => {
    dispatch(Actions.getListTabRequest());
    dispatch(
      Actions.getListNewsRequestActions({
        limit: '20',
        page: '1',
      }),
    );
  }, []);

  const onPressCategories = (item: any) => {
    dispatch(
      Actions.getCatsListNewsRequestActions({
        filters: {News_Cat: item.id},
        limit: '20',
        page: '1',
      }),
    );
    setNameTab('');
  };
  const onLoadMore = (pageCurrent: number) => {
    dispatch(
      Actions.getListNewsRequestActions({
        limit: '20',
        page: pageCurrent.toString(),
      }),
    );
    setPageCurrent(pageCurrent + 1);
  };

  const dataTabBar = useSelector(
    (state: IListTabState) => state.listTabReducer.data,
  );
  const isLoadingListTab = useSelector(
    (state: IListTabState) => state.listTabReducer.isLoading,
  );
  const isLoadingListNews = useSelector(
    (state: IListNewsState) => state.listNewsReducer.isLoading,
  );

  const dataListNews = useSelector(
    (state: IListNewsState) => state.listNewsReducer.data,
  );

  const dataListNewsCats = useSelector(
    (state: IListNewsCatsState) => state.listNewsCatsReducer.data,
  );
  const isLoadingListNewsCats = useSelector(
    (state: IListNewsCatsState) => state.listNewsCatsReducer.isLoading,
  );
  const [dataNews, setDataNews] = useState<any>(null);
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

  const [dataCategories, setDataCategories] = useState(
    !isLoadingListTab ? dataTabBar.data : dataTab,
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // const onSelectTab = (itemChoose: IDataTab) => {
  //   let dataTabTemp = dataTab.map((item: {id: number}) => {
  //     if (item.id === itemChoose.id) {
  //       return {...item, isFocus: true};
  //     } else return {...item, isFocus: false};
  //   });
  //   setDataCategories(dataTabTemp);
  // };

  return (
    <>
      {dataNews !== null ? (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.viewHeader}>
            <Animated.View style={[styles.viewBanner, {height: headerHeight}]}>
              <HeaderBanner />
            </Animated.View>
            <View>
              <LinearGradient
                colors={colorTabBar}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.tabBar}>
                <TouchableOpacity
                  // style={[styles.tabItem, menuFocus && styles.focusItemTab]}
                  style={[styles.tabItem]}
                  onPress={() => {
                    setNameTab(screenName.MENU_SCREEN);
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
                  style={[styles.tabItem, searchFocus && styles.focusItemTab]}
                  onPress={() => {
                    // onSelectTab({
                    //   id: 5,
                    //   name: screenName.SEARCH_SCREEN,
                    //   isFocus: true,
                    // });
                    // setSearchFocus(true);
                    // setNameTab(screenName.SEARCH_SCREEN);
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
          {nameTab === screenName.MENU_SCREEN ? (
            <Animated.ScrollView
              style={styles.containerBody}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              scrollEnabled={
                nameTab === screenName.SEARCH_SCREEN ? false : true
              }
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}>
              <MenuScreen onPress={item => console.log('item', item)} />
            </Animated.ScrollView>
          ) : !isLoadingListNewsCats ? (
            <FlatList
              style={styles.containerBody}
              showsVerticalScrollIndicator={true}
              onEndReachedThreshold={0.5}
              scrollEventThrottle={0.1}
              scrollEnabled={
                nameTab === screenName.SEARCH_SCREEN ? false : true
              }
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
              data={dataNews.rows}
              onEndReached={i => {
                if (i.distanceFromEnd < 0) return;
                onLoadMore(pageCurrent);
              }}
              ListFooterComponent={
                isLoadingListNews ? <ViewLoadingComponent /> : null
              }
              renderItem={({item}) => {
                return <ListNewsScreen items={item} />;
              }}
            />
          ) : (
            <ViewLoadingComponent />
          )}
        </View>
      ) : (
        <ViewLoadingComponent />
      )}
    </>
  );
};
export default HomeScreen;
