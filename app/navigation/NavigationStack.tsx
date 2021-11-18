import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '@screens/DetailScreen/DetailScreen';
import {screenName} from './screenName';
import TabBar from '@navigation/TabBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {Header} from '@components/HeaderComponent/Header';
const Stack = createStackNavigator();

interface NavigationContainerProps {}

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={'Test'}>
      <Stack.Screen
        name={'Logo'}
        component={TabBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Test'}
        component={HeaderComponent}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={'Test'}
        component={Header}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={screenName.DETAIL_SCREEN}
        component={DetailScreen}
        options={{
          headerLeft: (): any => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={{
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }}
                  style={{width: 35, height: 40}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            );
          },
          headerStyle: {height: 70},
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
