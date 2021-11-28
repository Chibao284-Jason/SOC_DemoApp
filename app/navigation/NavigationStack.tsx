import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import DetailScreen from '@screens/DetailScreen/DetailScreen';
import {screenName} from './screenName';
import {useNavigation} from '@react-navigation/core';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
const Stack = createStackNavigator();

interface NavigationContainerProps {}

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={screenName.HOME_SCREEN}>
      {/* <Stack.Screen
        name={screenName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={screenName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={screenName.DETAIL_SCREEN}
        component={DetailScreen}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal-inverted',
        }}
      />
      <Stack.Screen
        name={screenName.MENU_SCREEN}
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const NavigationStack = (props: NavigationContainerProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
