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
import {Animated} from 'react-native';

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
              : {
                  uri: 'https://cdn.iconscout.com/icon/free/png-512/save-3244517-2701888.png',
                }
          }
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text>{title ? title : 'Title'}</Text>
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    width: 15,
    height: 20,
  },
  title: {
    marginLeft: 10,
  },
  viewDotColor: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  check: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 2,
    marginLeft: 20,
  },
  unCheck: {
    marginLeft: 20,
  },
  imgArrow: {width: 20, height: 25},
});
