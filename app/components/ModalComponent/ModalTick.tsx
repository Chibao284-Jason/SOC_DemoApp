import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Share,
  ImageBackground,
} from 'react-native';

interface ModalTickProps {
  title?: string;
  image?: ImageSourcePropType;
  font?: string;
  fontSize: number;
  colorTheme?: string;
}
import {styles} from './styles';

const ModalTick = (props: ModalTickProps) => {
  const [isTick, setIsTick] = useState<boolean>(false);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };
  const {title, image, font, fontSize, colorTheme} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.viewLabel}
        onPress={() => {
          setIsTick(!isTick);
        }}>
        <ImageBackground
          source={
            image
              ? image
              : {
                  uri: 'https://cdn.iconscout.com/icon/free/png-512/save-3244517-2701888.png',
                }
          }
          // style={[styles.imgIcon]}
          style={[styles.imgIconTick(isTick ? colorTheme : 'transparent')]}
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles(font, fontSize)}>
            {title ? title : 'Title'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewLabel} onPress={() => onShare()}>
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
