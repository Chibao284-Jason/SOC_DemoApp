import * as React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';
interface ModalTickProps {
  title?: string;
  image?: ImageSourcePropType;
}

const ModalTick = (props: ModalTickProps) => {
  const {title, image} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={image ? image : require('../../assets/img/reportIcon.png')}
          style={styles.imgIcon}
          resizeMode="contain"
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles}>{title ? title : 'Title'}</Text>
        </View>
      </View>
    </View>
  );
};

export default ModalTick;
