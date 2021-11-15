import React, {useCallback, useRef} from 'react';
import {Image} from 'react-native';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import DetailScreen from '@screens/DetailScreen/DetailScreen';
import {screenName} from './screenName';
import TabBar from '@navigation/TabBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const Stack = createStackNavigator();

interface NavigationContainerProps {}

const MainScreen = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <Stack.Navigator initialRouteName={screenName.DETAIL_SCREEN}>
      {/* <Stack.Screen name={'TabBar'} component={TabBar} /> */}
      <Stack.Screen name={screenName.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={screenName.DETAIL_SCREEN}
        component={DetailScreen}
        options={{
          headerTitle: (): any => {
            return (
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',
                }}
                style={{width: 70, height: 20}}
                resizeMode={'contain'}
              />
            );
          },
          headerLeft: (): any => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={{
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }}
                  style={{width: 70, height: 40}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            );
          },
          // headerRight: (): any => {
          //   return <ShowModal />;
          // },
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
