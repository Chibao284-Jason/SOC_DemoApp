import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import * as actions from '@store/actions/actions';
import {dataColorTheme} from '@constants/dataExample';
interface IModalThemeProps {
  title?: string;
  image?: ImageSourcePropType;
  selected?: boolean;
  font?: string;
  fontSize: number;
}
const ModalTheme = (props: IModalThemeProps) => {
  const {title, image, font, fontSize} = props;
  const [dataColors, setDataColors] = useState(dataColorTheme);
  const dispatch = useDispatch();

  const onThemeColor = (color: string) =>
    dispatch(actions.changeThemeColor(color));

  const onSelectColor = (itemChoose: {
    isSelect: boolean;
    id: number;
    color: string;
  }) => {
    let dataColorTemp: any = dataColorTheme.map((item: {id: number}) => {
      if (item.id === itemChoose.id) {
        return {...item, isSelect: true};
      } else return {...item, isSelect: false};
    });
    setDataColors(dataColorTemp);
  };

  return (
    <View style={styles.containerTheme}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : {
                  uri: 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/004/413/original/color-palette.png',
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
          }}
          horizontal={true}
          data={dataColors}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  item.isSelect ? styles.check(item.color) : styles.unCheck,
                ]}
                onPress={() => {
                  onSelectColor(item);
                  onThemeColor(item.color);
                }}>
                <View style={styles.viewDotColor(item.color)} />
              </TouchableOpacity>
            );
          }}
        />
        {/* <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png',
          }}
          style={styles.imgArrow}
        /> */}
      </View>
    </View>
  );
};

export default ModalTheme;
