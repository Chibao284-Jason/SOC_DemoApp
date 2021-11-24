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
  title?: string;
  timeCreated?: string | number;
  onPress: () => void;
  countView: string | number;
}

const CardComponent = (props: CardComponentProps) => {
  const {imgUri, title, onPress, timeCreated, countView} = props;
  const timeCreate = moment(timeCreated).toNow(true);
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
              <Text style={styles.textLabel} numberOfLines={4}>
                {title}
              </Text>
            </View>
            <View style={styles.viewSource}>
              <View style={styles.viewLogo}>
                <View style={styles.countView}>
                  {/* <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',
                    }}
                  
                    style={styles.imgSource}
                    resizeMode={'contain'}
                  /> */}
                  <Image
                    source={{
                      uri: 'https://icones.pro/wp-content/uploads/2021/05/icone-oeil-beurre-gris.png',
                    }}
                    style={styles.imgSourceEyes}
                    resizeMode={'contain'}
                  />
                  <Text>{countView}</Text>
                </View>
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
