import * as React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';
interface ModalTickProps {
  title?: string;
  image?: ImageSourcePropType;
  font?: string;
  fontSize?: number;
}

const ModalTick = (props: ModalTickProps) => {
  const {title, image, font, fontSize} = props;

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={image ? image : require('../../assets/img/reportIcon.png')}
          style={styles.imgIcon}
          resizeMode="contain"
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles(font, fontSize)}>
            {title ? title : 'Title'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ModalTick;
