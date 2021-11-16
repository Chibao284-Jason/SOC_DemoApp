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
import 'moment/locale/vi';
moment.locale('vi');

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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={imgUri}
        style={styles.imgThumbnail}
        imageStyle={{
          borderRadius: 10,
        }}
        resizeMode={'stretch'}
      />

      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}>
        <View
          style={{
            marginLeft: 5,
            width: '100%',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                flexWrap: 'wrap',
              }}
              numberOfLines={2}>
              Có thể tự học lập trình được không?
            </Text>
          </View>
          <View style={styles.viewSource}>
            <View style={styles.viewLogo}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg/1280px-Ng%C6%B0%E1%BB%9Di_lao_%C4%91%E1%BB%99ng_logo.svg.png',
                }}
                style={{width: 70, height: 20}}
                resizeMode={'contain'}
              />
              <View style={styles.viewDot} />
              <Text style={styles.textCreate}>{timeCreate}</Text>
            </View>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/close-box-1-866174.png',
              }}
              style={{width: 15, height: 10}}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  viewSource: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCreate: {
    color: '#8D8D8D',
    fontWeight: 'bold',
  },
  imgThumbnail: {
    width: 150,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
