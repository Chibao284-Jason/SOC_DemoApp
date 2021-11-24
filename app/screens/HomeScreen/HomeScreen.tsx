import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageSourcePropType,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {screenName} from '@navigation/screenName';
import ListNewsScreen from '@screens/ListNewsScreen/ListNewsScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {dataTab, IDataTab} from '@constants/dataExample';
import {styles} from './styles';
import {colorGlobal, colorTabBar} from '@config/colorGlobal';
import HeaderBanner from '@components/HeaderComponent/HeaderBanner/HeaderBanner';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '@store/actions';
import {IListTabReducer} from '@store/reducers/listTabReducer';
import {IListNewsReducer} from '@store/reducers/listNewsReducer';
import {IListNewsCatsReducer} from '@store/reducers/listNewsCatsReducer';

//interface
interface IHeaderComponentProps {
  onPress: () => void;
}
interface ITabBar {
  id?: number;
  name?: string;
  isFocus?: boolean;
  onPress?: () => void;
}
interface IIconMenuProps {
  img: ImageSourcePropType;
}
interface IListTabState {
  listTabReducer: IListTabReducer;
}
interface IListNewsState {
  listNewsReducer: IListNewsReducer;
}
interface IListNewsCatsState {
  listNewsCatsReducer: IListNewsCatsReducer;
}

const IconMenu = (props: IIconMenuProps) => {
  const {img} = props;
  return (
    <View style={{}}>
      <Image source={img} style={styles.iconMenu} />
    </View>
  );
};

// Size height
const HEADER_MAX_HEIGHT = 70;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeScreen = (props: IHeaderComponentProps) => {
  const [menuFocus, setMenuFocus] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [nameTab, setNameTab] = useState<string | undefined>();
  const [pageCurrent, setPageCurrent] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getListTabRequest());
    getListNewsAll('1');
    if (!isLoadingListNews) {
      setDataListNewsShow(dataListNews);
    }
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
  const onLoadMore = () => {
    setPageCurrent(pageCurrent => {
      getListNewsAll(pageCurrent.toString());
      return pageCurrent + 1;
    });
  };
  const getListNewsAll = (pageCurrent: string) => {
    dispatch(
      Actions.getListNewsRequestActions({
        limit: '20',
        page: pageCurrent,
      }),
    );
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
  useEffect(() => {
    if (!isLoadingListNewsCats) {
      setDataListNewsShow(dataListNewsCats);
    }
  }, [isLoadingListNewsCats]);
  const [dataCategories, setDataCategories] = useState(
    !isLoadingListTab ? dataTabBar.data : dataTab,
  );
  const [dataListNewsShow, setDataListNewsShow] = useState<any>(null);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const TabBar = (props: ITabBar) => {
    const {name, onPress, isFocus} = props;
    return (
      <TouchableOpacity
        style={[styles.tabItem, isFocus && styles.focusItemTab]}
        onPress={onPress}>
        <Text style={styles.labelTabBar}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const onSelectTab = (itemChoose: IDataTab) => {
    let dataTabTemp = dataTab.map((item: {id: number}) => {
      if (item.id === itemChoose.id) {
        return {...item, isFocus: true};
      } else return {...item, isFocus: false};
    });
    setDataCategories(dataTabTemp);
  };

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <>
      {dataListNewsShow !== null ? (
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
                      <TabBar
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
                    onSelectTab({
                      id: 5,
                      name: screenName.SEARCH_SCREEN,
                      isFocus: true,
                    });
                    setSearchFocus(true);
                    setNameTab(screenName.SEARCH_SCREEN);
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
              <MenuScreen
                onPress={item => {
                  setNameTab('');
                }}
              />
            </Animated.ScrollView>
          ) : !isLoadingListNewsCats ? (
            <AnimatedFlatList
              style={styles.containerBody}
              showsVerticalScrollIndicator={true}
              onEndReachedThreshold={0.1}
              scrollEventThrottle={16}
              scrollEnabled={
                nameTab === screenName.SEARCH_SCREEN ? false : true
              }
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
              data={dataListNewsShow.rows}
              onEndReached={() => {
                onLoadMore();
              }}
              ListFooterComponent={
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                  }}>
                  <ActivityIndicator size="large" />
                </View>
              }
              renderItem={({item}) => {
                return <ListNewsScreen items={item} />;
              }}
            />
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};
export default HomeScreen;
