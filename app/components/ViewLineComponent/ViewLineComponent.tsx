import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';

interface ViewLineComponentProps {}

const ViewLineComponent = (props: ViewLineComponentProps) => {
  return <View style={styles.line} />;
};

export default ViewLineComponent;

const styles = StyleSheet.create({
  line: {
    width: `100%`,
    borderBottomColor: colorGlobal.lineColor,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
