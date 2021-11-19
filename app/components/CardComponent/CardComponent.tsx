import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
const date = new Date();
interface CardComponentProps {
  imgUri: ImageSourcePropType;
  content?: string;
  timeCreated?: string | number;
  onPress: () => void;
}

const CardComponent = (props: CardComponentProps) => {
  const {imgUri, content, onPress} = props;
  // const timeCreate = moment('2021-11').endOf('day').fromNow();
  const timeCreate = moment('2021-10').format('h [phút]');
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <ImageBackground
          source={imgUri}
          style={styles.imgThumbnail}
          imageStyle={styles.imgBgBorderRadius}
        />

        <View style={styles.viewLabelNews}>
          <View style={styles.labelNews}>
            <View style={{}}>
              <Text style={styles.textLabel} numberOfLines={3}>
                Có thể tự học lập trình được không?
              </Text>
            </View>
            <View style={styles.viewSource}>
              <View style={styles.viewLogo}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',
                  }}
                  style={styles.imgSource}
                  resizeMode={'contain'}
                />
                <Text style={styles.textCreate}>{timeCreate}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <ViewLineComponent />
    </View>
  );
};

export default CardComponent;
