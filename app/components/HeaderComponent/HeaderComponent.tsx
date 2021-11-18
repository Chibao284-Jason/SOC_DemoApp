import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ImageSourcePropType,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
import {screenName} from '@navigation/screenName';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

interface IHeaderComponentProps {
  onPress: () => void;
}
const height = 80;
const dataTab = [
  {
    id: 0,
    name: screenName.FOLLOW_SCREEN,
  },
  {
    id: 1,
    name: screenName.HOT_SCREEN,
  },
  {
    id: 2,
    name: screenName.NEW_SCREEN,
  },
  {
    id: 3,
    name: screenName.SOCCER_SCREEN,
  },
];
interface ITabBar {
  id?: number;
  name: string;
  isSelect?: boolean;
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
        // source={{
        //   uri: 'https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-5.jpg',
        // }}
        source={img}
        style={{width: 30, height: 30}}
        resizeMode={'cover'}
      />
    </View>
  );
};

const HeaderComponent = (props: IHeaderComponentProps) => {
  const [nameTab, setNameTab] = useState('Theo dõi');
  const [showBanner, setShownBanner] = useState(true);

  const TabBar = (props: ITabBar) => {
    const {name, onPress} = props;
    return (
      <TouchableOpacity style={styles.tabItem} onPress={onPress}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: '500'}}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };
  const {width} = Dimensions.get('window');
  const LAYOUT_WIDTH = width - 64;
  const SCROLL_DISTANCE = width - 48;
  const renderScreen = (name: string) => {
    console.log(name);

    switch (name) {
      case screenName.FOLLOW_SCREEN:
        return <HomeScreen />;
      case screenName.HOT_SCREEN:
        return <HomeScreen />;
      case screenName.MENU_SCREEN:
        return <MenuScreen />;
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

  const {onPress} = props;
  return (
    <>
      {showBanner && (
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Text>BÁO MỚI</Text>
        </View> */}
          <ImageBackground
            style={{
              width: 100,
              height: 70,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{uri: 'https://baotintuc.xembao.vn/images/btt/tintuc.png'}}
            resizeMode="contain">
            {/* <Text>BÁO MỚI</Text> */}
          </ImageBackground>
        </View>
      )}
      <View>
        <LinearGradient
          colors={['#069699', '#006F9C', '#045D99']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.header}>
          {/* <View style={styles.header}> */}
          <StatusBar hidden={true} />

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setNameTab(screenName.MENU_SCREEN)}>
            <IconMenu
              img={{
                uri: 'https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-5.jpg',
              }}
            />
          </TouchableOpacity>
          {/* {headerShown && <HeaderTitle />}
      <ScrollView
        nestedScrollEnabled={true}
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;

          if (scrolling > 100) {
            setHeaderShown(false);
          } else {
            setHeaderShown(true);
          }
        }}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{flex: 1}}> */}
          <FlatList
            horizontal={true}
            scrollEnabled={true}
            data={dataTab}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{height: 80}}
            pagingEnabled={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <TabBar
                  name={item.name}
                  onPress={() => setNameTab(item.name)}
                />
              );
            }}
          />
          {/* <View style={{flex: 1, height: 1000, marginTop: height}} /> */}
          {/* </ScrollView> */}
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setNameTab(screenName.SEARCH_SCREEN)}>
            <Icon
              name="search"
              size={30}
              // style={{marginLeft: 20}}
              color={'white'}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView
        horizontal={false}
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={event => {
          if (event.nativeEvent.contentOffset.y > 3) {
            setShownBanner(false);
          } else {
            setShownBanner(true);
          }
          {
          }
        }}>
        {/* </View> */}
        {/* <ScrollView>{<SearchScreen />}</ScrollView> */}
        {renderScreen(nameTab)}
      </ScrollView>
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    backgroundColor: 'aqua',
    // height: 70,
  },
  tabItem: {
    // position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
});
