import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import Slider from '@react-native-community/slider';
import ScreenBrightness from 'react-native-screen-brightness';
import {styles} from './styles';

interface ModalBrightnessProps {
  title?: string;
  image?: ImageSourcePropType;
  value?: boolean;
}
const handleBrightness = async (value: number) => {
  ScreenBrightness.setBrightness(value);
};
const ModalBrightness = (props: ModalBrightnessProps) => {
  const {title, image, value} = props;
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : {
                  uri: 'https://cdn.iconscout.com/icon/free/png-512/save-3244517-2701888.png',
                }
          }
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles}>{title ? title : 'Title'}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#22A6A0"
          maximumTrackTintColor="gray"
          value={sliderValue}
          onValueChange={value => handleBrightness(value)}
        />
      </View>
    </View>
  );
};

export default ModalBrightness;
