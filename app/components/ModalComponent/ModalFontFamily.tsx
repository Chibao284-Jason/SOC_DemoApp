import {IThemeState} from '@models/reducers/changeTheme';
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
interface IModalFontFamilyProps {
  title?: string;
  image?: ImageSourcePropType;
  value?: boolean;
}
interface IStateReducer {
  ChangeThemeColorReducer: IThemeState;
}
const ModalFontFamily = (props: IModalFontFamilyProps) => {
  const {title, image, value} = props;
  const [sliderValue, setSliderValue] = useState(0);

  const colorString = useSelector(
    (state: IStateReducer) => state.ChangeThemeColorReducer.color,
  );
  console.log('colorString', colorString);

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
          <Text style={styles.titleStyles}>{title ? title : 'Title'}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.buttonFont(colorString)}>
          <Text style={styles.labelFonts('Bookerly')}>Bookerly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFont(colorString)}>
          <Text style={styles.labelFonts('Arial')}>Arial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalFontFamily;
