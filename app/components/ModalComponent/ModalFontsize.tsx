import React, {useState} from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import Slider from '@react-native-community/slider';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '@store/actions/actions';
import {IChangeThemeFontSizeReducer} from '@models/reducers/changeTheme';
interface ModalFontsizeProps {
  title?: string;
  image?: ImageSourcePropType;
  font?: string;
}
interface IChangeFontReducer {
  ChangeFontReducer: IChangeThemeFontSizeReducer;
}
const ModalFontsize = (props: ModalFontsizeProps) => {
  const fontSize = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer.fontSize,
  );
  const {title, image, font} = props;
  const [sliderValue, setSliderValue] = useState(fontSize);

  const dispatch = useDispatch();
  const onChangeFontSize = (fontSizes: number) => {
    dispatch(actions.changeThemeFontSize(fontSizes));
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : require('../../assets/img/images-removebg-preview.png')
          }
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text style={styles.titleStyles(font, fontSize)}>
            {title ? title : 'Title'}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Slider
          style={{width: 200, height: 40}}
          step={1}
          minimumValue={14}
          maximumValue={30}
          minimumTrackTintColor="#22A6A0"
          maximumTrackTintColor="gray"
          value={sliderValue}
          onValueChange={value => {
            onChangeFontSize(value);
          }}
        />
      </View>
    </View>
  );
};

export default ModalFontsize;
