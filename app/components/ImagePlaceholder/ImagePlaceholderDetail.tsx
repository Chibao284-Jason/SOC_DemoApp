import * as React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface IImagePlaceholderDetailProps {}

const ImagePlaceholderDetail = (props: IImagePlaceholderDetailProps) => {
  const width = Dimensions.get('screen').width - 20;
  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            marginVertical={10}
            width={'100%'}
            height={45}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item alignItems="center">
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={300}
              height={250}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item alignItems={'flex-start'} marginTop={20}>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={30}
              width={80}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={30}
              width={80}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={width}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </SafeAreaView>
  );
};

export default ImagePlaceholderDetail;

const styles = StyleSheet.create({
  container: {},
});
