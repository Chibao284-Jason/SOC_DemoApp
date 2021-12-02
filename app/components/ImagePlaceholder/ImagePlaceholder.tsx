import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface ImagePlaceholderProps {}

const ImagePlaceholder = (props: ImagePlaceholderProps) => {
  return (
    <View style={{marginVertical: 15}}>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 120, height: 70, borderRadius: 4}} />
          <View style={{marginLeft: 20}}>
            <View
              style={{
                width: 225,
                height: 20,
                borderRadius: 4,
                paddingRight: 10,
              }}
            />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {},
});
