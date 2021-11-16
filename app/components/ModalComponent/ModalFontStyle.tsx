import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
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
