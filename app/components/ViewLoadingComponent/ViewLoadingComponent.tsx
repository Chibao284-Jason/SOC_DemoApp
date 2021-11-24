import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

interface ViewLoadingComponentProps {}

const ViewLoadingComponent = (props: ViewLoadingComponentProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={colorGlobal.loadingColor} size="large" />
    </View>
  );
};

export default ViewLoadingComponent;

const styles = StyleSheet.create({
  container: {},
});
