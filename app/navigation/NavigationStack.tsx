import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import DetailScreen from '@screens/DetailScreen/DetailScreen';
import {screenName} from './screenName';
import {useNavigation} from '@react-navigation/core';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import MenuScreen from '@screens/MenuScreen/MenuScreen';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
import SearchComponent from '@components/SearchComponent/SearchComponent';
const Stack = createStackNavigator();

interface NavigationContainerProps {}

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenName.HOME_SCREEN}>
      <Stack.Screen
        name={screenName.HOME_SCREEN}
        component={HomeScreen}
        options={{}}
      />

      <Stack.Screen
        name={screenName.DETAIL_SCREEN}
        component={DetailScreen}
        options={
          {
            // gestureDirection: 'horizontal-inverted',
          }
        }
      />
      <Stack.Screen
        name={screenName.MENU_SCREEN}
        component={MenuScreen}
        options={{
          gestureDirection: 'horizontal-inverted',
        }}
      />
      <Stack.Screen
        name={screenName.SEARCH_SCREEN}
        component={SearchScreen}
        options={{}}
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
