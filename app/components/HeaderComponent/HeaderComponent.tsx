import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageSourcePropType,
  ImageBackground,
  Animated,
} from 'react-native';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
import {screenName} from '@navigation/screenName';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {dataTab, IDataTab} from '@constants/dataExample';
import {styles} from './styles';

//interface
interface IHeaderComponentProps {
  onPress: () => void;
}
interface ITabBar {
  id?: number;
  name: string;
  isFocus?: boolean;
  onPress?: () => void;
}
interface IIconMenuProps {
  img: ImageSourcePropType;
}
const IconMenu = (props: IIconMenuProps) => {
  const {img} = props;
  return (
    <View style={{}}>
      <Image
        source={img}
        style={{width: 30, height: 30}}
        resizeMode={'cover'}
      />
    </View>
  );
};

// Size height
const HEADER_MAX_HEIGHT = 70;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HeaderComponent = (props: IHeaderComponentProps) => {
  const [nameTab, setNameTab] = useState('Theo dõi');
  const [dataTabName, setDataTabName] = useState(dataTab);
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
    setDataTabName(dataTabTemp);
    setMenuFocus(false), setSearchFocus(false);
  };

  const renderScreen = (name: string) => {
    switch (name) {
      case screenName.FOLLOW_SCREEN:
        return <HomeScreen />;
      case screenName.HOT_SCREEN:
        return <HomeScreen />;
      case screenName.MENU_SCREEN:
        return <MenuScreen onPress={i => setNameTab(i)} />;
      case screenName.NEW_SCREEN:
        return <HomeScreen />;
      case screenName.SOCCER_SCREEN:
        return <HomeScreen />;
      case screenName.SEARCH_SCREEN:
        return <SearchScreen />;
      default:
        <HomeScreen />;
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.viewHeader}>
        <Animated.View style={[styles.viewBanner, {height: headerHeight}]}>
          <ImageBackground
            style={styles.imgBanner}
            source={{
              uri: 'https://baotintuc.xembao.vn/images/btt/tintuc.png',
            }}
            resizeMode="contain">
            {/* <Text>BÁO MỚI</Text> */}
          </ImageBackground>
        </Animated.View>
        <View>
          <LinearGradient
            colors={['#069699', '#006F9C', '#045D99']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.tabBar}>
            <TouchableOpacity
              style={[styles.tabItem, menuFocus && styles.focusItemTab]}
              onPress={() => {
                onSelectTab({id: 4});
                setMenuFocus(true);
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
              data={dataTabName}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{height: 80}}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <TabBar
                    name={item.name}
                    isFocus={item.isFocus}
                    onPress={() => {
                      onSelectTab(item);
                      setNameTab(item.name);
                    }}
                  />
                );
              }}
            />
            <TouchableOpacity
              style={[styles.tabItem, searchFocus && styles.focusItemTab]}
              onPress={() => {
                onSelectTab({id: 5});
                setSearchFocus(true);
                setNameTab(screenName.SEARCH_SCREEN);
              }}>
              <Icon
                name="search"
                size={30}
                color={'white'}
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
        scrollEnabled={
          nameTab === screenName.MENU_SCREEN ||
          nameTab === screenName.SEARCH_SCREEN
            ? false
            : true
        }
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {renderScreen(nameTab)}
      </Animated.ScrollView>
    </View>
  );
};

export default HeaderComponent;
