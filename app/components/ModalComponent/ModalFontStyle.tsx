import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

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
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.buttonFont}>
          <Text style={styles.labelFont}>Bookerly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFont}>
          <Text style={styles.labelFont}>Bookerly</Text>
        </TouchableOpacity>
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
  imgArrow: {
    width: 20,
    height: 25,
  },
  buttonFont: {
    backgroundColor: '#20A7A0',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  labelFont: {color: 'white', margin: 10, fontSize: 18, fontWeight: '300'},
});
