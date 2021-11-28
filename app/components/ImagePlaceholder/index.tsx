import ImagePlaceholderComponent from './ImagePlaceholder';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ImagePlaceholderProps {}

const ImagePlaceholder = (props: ImagePlaceholderProps) => {
  return (
    <View style={styles.container}>
      <ImagePlaceholderComponent />
      <ImagePlaceholderComponent />
      <ImagePlaceholderComponent />
      <ImagePlaceholderComponent />
      <ImagePlaceholderComponent />
      <ImagePlaceholderComponent />
    </View>
  );
};

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {margin: 10},
});
