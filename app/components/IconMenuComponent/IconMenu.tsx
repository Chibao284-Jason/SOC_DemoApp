import {styles} from '@components/ModalComponent/styles';
import {IIconMenuProps} from '@screens/HomeScreen/types';
import React from 'react';
import {View, Image} from 'react-native';

export const IconMenu = (props: IIconMenuProps) => {
  const {img} = props;
  return (
    <View style={{}}>
      <Image
        source={img}
        style={{
          width: 30,
          height: 30,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};
