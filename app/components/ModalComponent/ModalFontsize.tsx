import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {styles} from './styles';

interface ModalFontsizeProps {
  title?: string;
  image?: ImageSourcePropType;
  value?: boolean;
}

const ModalFontsize = (props: ModalFontsizeProps) => {
  const {title, image, value} = props;
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : require('../../assets/img/images-removebg-preview.png')
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
          step={0.25}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#22A6A0"
          maximumTrackTintColor="gray"
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
        />
      </View>
    </View>
  );
};

export default ModalFontsize;
