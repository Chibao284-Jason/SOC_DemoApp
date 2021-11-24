import React from 'react';
import {ITabBar} from '@screens/HomeScreen/types';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colorGlobal} from '@config/colorGlobal';

export const TabBarItem = (props: ITabBar) => {
  const {name, onPress, isFocus} = props;
  return (
    <TouchableOpacity
      // style={[styles.tabItem, isFocus && styles.focusItemTab]}
      style={[styles.tabItem]}
      onPress={onPress}>
      <Text style={styles.labelTabBar}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  labelTabBar: {
    textAlign: 'center',
    color: colorGlobal.labelTab,
    fontWeight: 'bold',
  },
});
