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
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '@store/actions/actions';
interface ModalThemeProps {
  title?: string;
  image?: ImageSourcePropType;
  selected?: boolean;
}
interface IDataColorTheme {
  id: number;
  color: string;
  isSelect: boolean;
}

const dataColorTheme: IDataColorTheme[] = [
  {
    id: 0,
    color: '#5EBEBC',
    isSelect: true,
  },
  {
    id: 1,
    color: '#262626',
    isSelect: false,
  },
  {
    id: 2,
    color: '#FCBC99',
    isSelect: false,
  },
  {
    id: 3,
    color: '#F58A92',
    isSelect: false,
  },
];
const ModalTheme = (props: ModalThemeProps) => {
  const dispatch = useDispatch();

  const onThemeColor = (color: string) =>
    dispatch(actions.changeThemeColor(color));

  const {title, image, selected} = props;
  const [dataColors, setDataColors] = useState(dataColorTheme);
  const onSelectColor = (itemChoose: {
    isSelect: boolean;
    id: number;
    color: string;
  }) => {
    let dataColorTemp = dataColorTheme.map(item => {
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
          <Text style={styles.titleStyles}>{title ? title : 'Title'}</Text>
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
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png',
          }}
          style={styles.imgArrow}
        />
      </View>
    </View>
  );
};

export default ModalTheme;
