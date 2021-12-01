import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface IImagePlaceholderDetailProps {}

const ImagePlaceholderDetail = (props: IImagePlaceholderDetailProps) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginTop={10}
          width={'90%'}
          height={45}
          borderRadius={4}
          margin={10}
        />
        <SkeletonPlaceholder.Item
          width={120}
          height={20}
          borderRadius={4}
          marginLeft={10}
        />
        <SkeletonPlaceholder.Item alignItems="center">
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={300}
            height={250}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          alignItems={'flex-start'}
          marginTop={20}
          marginLeft={10}>
          <SkeletonPlaceholder.Item
            width={350}
            height={20}
            borderRadius={4}
            marginLeft={20}
          />
          <SkeletonPlaceholder.Item
            marginTop={30}
            width={80}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={350}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={360}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={340}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={30}
            width={340}
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
            width={350}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={360}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={340}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={30}
            width={340}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ImagePlaceholderDetail;

const styles = StyleSheet.create({
  container: {},
});
