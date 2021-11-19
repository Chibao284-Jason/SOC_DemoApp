import React, {useState} from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import Slider from '@react-native-community/slider';
import ScreenBrightness from 'react-native-screen-brightness';
import {styles} from './styles';
import {colorGlobal} from '@config/colorGlobal';

interface ModalBrightnessProps {
  title?: string;
  image?: ImageSourcePropType;
  font?: string;
  fontSize?: number;
  colorSlider?: string;
}

const handleBrightness = async (value: number) => {
  ScreenBrightness.setBrightness(value);
};
const ModalBrightness = (props: ModalBrightnessProps) => {
  const {title, image, font, fontSize, colorSlider} = props;
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : {
                  uri: 'https://icon-library.com/images/brightness-icon/brightness-icon-6.jpg',
                }
          }
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles(font, fontSize)}>
            {title ? title : 'Title'}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Slider
          style={{width: 200}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={
            colorSlider ? colorSlider : colorGlobal.sliderDefault
          }
          maximumTrackTintColor="gray"
          value={sliderValue}
          onValueChange={value => handleBrightness(value)}
        />
      </View>
    </View>
  );
};

export default ModalBrightness;
