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
  font?: string;
  fontSize: number;
}
import {styles} from './styles';

const ModalTick = (props: ModalTickProps) => {
  const {title, image, font, fontSize} = props;
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
          <Text style={styles.titleStyles(font, fontSize)}>
            {title ? title : 'Title'}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.viewLabel}>
        <Image
          source={require('../../assets/img/iconShare.png')}
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles(font, fontSize)}>Chia sẻ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModalTick;
