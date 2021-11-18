import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import {screenName} from './screenName';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
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

const Example2 = () => {
  return (
    <View>
      <Text>Home Screen2</Text>
    </View>
  );
};
const Example3 = () => {
  return (
    <View>
      <Text>Home Screen2</Text>
    </View>
  );
};
const Example4 = () => {
  return (
    <View>
      <Text>Home Screen2</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <LinearGradient
      colors={['#069699', '#006F9C', '#045D99']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}>
      <Tab.Navigator
        initialRouteName={screenName.HOME_SCREEN}
        style={{}}
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'transparent'},
          tabBarScrollEnabled: true,
          tabBarItemStyle: {width: 100},
        }}>
        <Tab.Screen
          name="menu"
          component={MenuScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return (
                <IconMenu
                  img={{
                    uri: 'https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-5.jpg',
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={screenName.FOLLOW_SCREEN}
          component={HomeScreen}
          options={{tabBarLabel: 'Theo dõi'}}
        />
        <Tab.Screen
          name={screenName.HOT_SCREEN}
          component={Example2}
          options={{tabBarLabel: 'Nóng'}}
        />
        <Tab.Screen
          name={screenName.NEW_SCREEN}
          component={Example3}
          options={{tabBarLabel: 'Mới'}}
        />
        <Tab.Screen
          name={screenName.SOCCER_SCREEN}
          component={Example4}
          options={{tabBarLabel: 'Bóng đá VN'}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return (
                <Icon
                  name="search"
                  size={30}
                  // style={{marginLeft: 20}}
                  color={'white'}
                  tvParallaxProperties={undefined}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
}
export default TabBar;
