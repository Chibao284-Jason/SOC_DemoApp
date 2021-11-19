import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface IButtonHeaderComponentProps {
  imgIcon?: ImageSourcePropType;
  onPress: () => void;
  label?: string;
  iconStyles?: ImageStyle;
  buttonStyle?: ViewStyle;
}

const ButtonHeaderComponent = (props: IButtonHeaderComponentProps) => {
  const {onPress, imgIcon, label, iconStyles, buttonStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      {imgIcon && (
        <Image
          source={imgIcon}
          style={[styles.img, iconStyles]}
          resizeMode={'contain'}
        />
      )}
      {label && <Text style={styles.labelStyles}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default ButtonHeaderComponent;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  img: {width: 35, height: 40},
  labelStyles: {},
});
