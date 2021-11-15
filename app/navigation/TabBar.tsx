import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Example1 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Homeádkasdjakjsd;lakjsd;lkj Screen</Text>
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
    <View style={{flexDirection: 'row', flex: 1}}>
      <Tab.Navigator
        initialRouteName="Example1"
        style={{flex: 1}}
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: '#0189A2'},
          tabBarScrollEnabled: true,
          tabBarItemStyle: {width: 100},
        }}>
        <Tab.Screen
          name="Theo dõi"
          component={Example1}
          options={{tabBarLabel: 'Theo dõi'}}
        />
        <Tab.Screen
          name="Nóng"
          component={Example2}
          options={{tabBarLabel: 'Nóng'}}
        />
        <Tab.Screen
          name="Mới"
          component={Example3}
          options={{tabBarLabel: 'Mới'}}
        />
        <Tab.Screen
          name="Bóng đá VN"
          component={Example4}
          options={{tabBarLabel: 'Bóng đá VN'}}
        />
      </Tab.Navigator>
      {/* <View>
          <Text>Menu</Text>
        </View> */}
      {/* </View> */}
    </View>
  );
}
export default TabBar;
