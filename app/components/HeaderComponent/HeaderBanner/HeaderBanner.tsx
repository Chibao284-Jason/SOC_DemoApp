import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
const HEADER_SIZE = 55;

interface IHeaderBannerProps {}

const HeaderBanner = (props: IHeaderBannerProps) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={{justifyContent: 'center', alignItems: 'center'}}
      // source={{
      //   // uri: 'https://baotintuc.xembao.vn/images/btt/tintuc.png',
      //   uri: 'https://tvphapluat.vn/default/template/assets/img/logophapluat13.png',
      // }}
      source={require('../../../assets/img/logoBanner.png')}
      resizeMode="stretch"></ImageBackground>
  );
};

export default HeaderBanner;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: HEADER_SIZE,
    backgroundColor: colorGlobal.backgroundGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
