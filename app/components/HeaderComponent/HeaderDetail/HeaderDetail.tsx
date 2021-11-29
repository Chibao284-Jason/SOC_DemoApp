import AuthorComponent from '@components/AuthorComponent/AuthorComponent';
import ButtonHeaderComponent from '@components/ButtonHeaderComponent/ButtonHeaderComponent';
import {styles} from './styles';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';

interface IHeaderDetailProps {
  isButtonLeft?: boolean;
  isButtonCenter?: boolean;
  isButtonRight?: boolean;
  headerLeft?: () => void;
  headerRight?: () => void;
  isAvatar?: boolean;
  imgAuthor?: ImageSourcePropType;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  iconLeftStyle?: ImageStyle;
  iconRightStyle?: ImageStyle;
  buttonLeftStyle?: ViewStyle;
  buttonRightStyle?: ViewStyle;
  title?: string;
  labelRight?: string;
}

const HeaderDetail = (props: IHeaderDetailProps) => {
  const {
    isButtonLeft,
    headerLeft,
    isButtonCenter,
    headerRight,
    isButtonRight,
    iconLeft,
    iconRight,
    iconLeftStyle,
    iconRightStyle,
    buttonLeftStyle,
    buttonRightStyle,
    title,
    isAvatar,
    labelRight,
  } = props;
  return (
    <View style={styles.viewHeader}>
      <View style={styles.viewButton}>
        {isButtonLeft && headerLeft && (
          <ButtonHeaderComponent
            imgIcon={
              iconLeft
                ? iconLeft
                : {
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }
            }
            onPress={headerLeft}
            iconStyles={iconLeftStyle}
            buttonStyle={buttonLeftStyle}
          />
        )}
        {isButtonCenter && (
          <AuthorComponent isAvatar={isAvatar} nameAuthor={title} />
        )}
        {isButtonRight && headerRight && (
          <ButtonHeaderComponent
            imgIcon={
              iconRight
                ? iconRight
                : {
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }
            }
            onPress={headerRight}
            iconStyles={iconRightStyle}
            buttonStyle={buttonRightStyle}
            label={labelRight}
          />
        )}
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default HeaderDetail;
