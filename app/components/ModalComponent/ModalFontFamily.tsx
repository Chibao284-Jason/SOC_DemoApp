import React from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {IChangeThemeColorReducer} from '@models/reducers/changeTheme';
import * as actions from '@store/actions/actions';
interface IModalFontFamilyProps {
  title?: string;
  image?: ImageSourcePropType;
  value?: boolean;
  font?: string;
  fontSize: number;
}

interface IStateReducer {
  ChangeThemeColorReducer: IChangeThemeColorReducer;
}
interface IDataFont {
  id: number;
  font: string;
}
const ModalFontFamily = (props: IModalFontFamilyProps) => {
  const {title, image, font, fontSize} = props;
  const dispatch = useDispatch();
  const onPressChangeFont = (font: string) => {
    dispatch(actions.changeThemeFontFamily(font));
  };
  const colorString = useSelector(
    (state: IStateReducer) => state.ChangeThemeColorReducer.color,
  );

  useDispatch;
  const dataFont: IDataFont[] = [
    {
      id: 0,
      font: 'Bookerly',
    },
    {
      id: 1,
      font: 'Arial',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : {
                  uri: 'https://static.thenounproject.com/png/72775-200.png',
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
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.viewButtonFont}
          data={dataFont}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.buttonFont(colorString)}
                onPress={() => {
                  onPressChangeFont(item.font);
                }}>
                <Text style={styles.labelFonts(item.font)}>{item.font}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ModalFontFamily;
