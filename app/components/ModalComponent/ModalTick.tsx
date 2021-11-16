import * as React from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

interface ModalTickProps {
  title?: string;
  image?: ImageSourcePropType;
}
import {styles} from './styles';
const ModalTick = (props: ModalTickProps) => {
  const {title, image} = props;
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
      <TouchableOpacity style={styles.title}>
        <Text style={styles.titleStyles}>Chia sẻ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalTick;
