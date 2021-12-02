import * as React from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
import {yesterday, lastM, lastW, lastY} from '@constants/dateConstant';
import AutoHeightImage from 'react-native-auto-height-image';
import 'moment/locale/vi';
moment.updateLocale('vi', {
  calendar: {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[Last] dddd',
    nextWeek: '[Next] dddd',
    lastMonth: '[abc]',
    sameElse: 'L',
  },
});
interface CardComponentProps {
  imgUri: ImageSourcePropType;
  title?: string;
  timeCreated?: string | number;
  onPress: () => void;
  countView: string | number;
}
interface TSource {
  uri: string;
}

const CardComponent = (props: CardComponentProps) => {
  const {imgUri, title, onPress, timeCreated, countView} = props;
  let timeCreate = moment(timeCreated).fromNow();
  // let timeCreate = moment(timeCreated).calendar({
  //   lastDay: '[hq]',
  //   lastWeek: '[tuantruoc]',
  //   lastMonth: 'YYYy [thangtruoc]',
  // });
  // let dateTemp = moment(timeCreated);

  // if (dateTemp.format('D/M/Y') === yesterday) {
  //   timeCreate = moment(timeCreated).calendar(null, {lastDay: '[hôm qua]'});
  // }
  // if (dateTemp.format('M') === lastM.format('M')) {
  //   timeCreate = moment(timeCreated)
  //     .calendar()
  //     .replace(dateTemp.format('DD/MM/YYYY'), 'tháng trước');
  // }
  // if (dateTemp.format('D/M/Y') === lastW.format('D/M/Y')) {
  //   console.log(lastW);

  //   timeCreate = moment(timeCreated).calendar({lastMonth: '[thangs truoc]'});
  // }
  // if (dateTemp.format('Y') === lastY.format('Y')) {
  //   timeCreate = moment(timeCreated)
  //     .calendar()
  //     .replace(dateTemp.format('DD/MM/YYYY'), 'năm trước');
  // }
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.imgThumbnail}>
          <AutoHeightImage
            width={165}
            source={imgUri as TSource}
            borderRadius={5}
          />
        </View>
        <View style={styles.viewLabelNews}>
          <View style={styles.labelNews}>
            <View style={{marginRight: 20}}>
              <Text style={styles.textLabel} numberOfLines={4}>
                {title}
              </Text>
            </View>
            <View style={styles.viewSource}>
              <View style={styles.viewLogo}>
                <View style={styles.countView}>
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
