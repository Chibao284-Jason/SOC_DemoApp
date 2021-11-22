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
import SearchScreen from '@screens/SearchScreen/SearchScreen';
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
import * as listTabBarActions from '@store/actions/listTabBarActions';
import {IListTabReducer} from '@store/reducers/listNewsReducer';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTabBarActions.getListTabRequest());
  }, []);
  const dataTabBar = useSelector(
    (state: IListTabState) => state.listTabReducer,
  );

  const isLoading = dataTabBar.isLoading;

  const [nameTab, setNameTab] = useState<string | undefined>('Theo dõi');
  const [dataCategories, setDataCategories] = useState(
    !isLoading ? dataTabBar.data.data : dataTab,
  );
  const [menuFocus, setMenuFocus] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

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
    setMenuFocus(false), setSearchFocus(false);
  };

  const renderScreen = (name: string | undefined) => {
    switch (name) {
      case screenName.FOLLOW_SCREEN:
        return <ListNewsScreen />;
      case screenName.HOT_SCREEN:
        return <ListNewsScreen />;
      case screenName.MENU_SCREEN:
        return (
          <MenuScreen
            // onPress={i => {
            //   setNameTab(i);
            //   // onSelectTab(i);
            // }}
            onPress={i => {
              // let idFocus;
              // if (i === screenName.FOLLOW_SCREEN) {
              //   idFocus = 0;
              // }
              // if (i === screenName.HOT_SCREEN) {
              //   idFocus = 1;
              // }
              // if (i === screenName.NEW_SCREEN) {
              //   idFocus = 2;
              // }
              // if (i === screenName.SOCCER_SCREEN) {
              //   idFocus = 3;
              // }
              setNameTab(i);
              // idFocus !== undefined ? onSelectTab({id: idFocus}) : null;
            }}
          />
        );
      case screenName.NEW_SCREEN:
        return <ListNewsScreen />;
      case screenName.SOCCER_SCREEN:
        return <ListNewsScreen />;
      case screenName.SEARCH_SCREEN:
        return <SearchScreen />;
      default:
        <ListNewsScreen />;
        break;
    }
  };

  return (
    <>
      {!isLoading ? (
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
                  style={[styles.tabItem, menuFocus && styles.focusItemTab]}
                  onPress={() => {
                    // onSelectTab({
                    //   id: 4,
                    //   name: screenName.MENU_SCREEN,
                    //   isFocus: true,
                    // });
                    // setMenuFocus(true);
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
                          // onSelectTab(item);
                          // setNameTab(item.name);
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
          <Animated.ScrollView
            style={styles.containerBody}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            scrollEnabled={nameTab === screenName.SEARCH_SCREEN ? false : true}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}>
            {renderScreen(nameTab)}
          </Animated.ScrollView>
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
