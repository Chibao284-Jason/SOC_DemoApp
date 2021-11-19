import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ModalTick,
  ModalBrightness,
  ModalFontsize,
  ModalTheme,
  ModalFontFamily,
  ModalReport,
} from '@components/ModalComponent';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ContentComponent from '@components/ContentComponent/ContentComponent';
import {
  IChangeThemeColorReducer,
  IChangeThemeFontFamilyReducer,
  IChangeThemeFontSizeReducer,
} from '@models/reducers/changeTheme';
import {useSelector} from 'react-redux';
import HeaderDetail from '@components/HeaderComponent/HeaderDetail/HeaderDetail';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
interface IFooterModalProps {
  onPress: () => void;
}

interface IChangeFontReducer {
  ChangeFontReducer: IChangeThemeFontFamilyReducer &
    IChangeThemeFontSizeReducer;
}
interface IColorThemeReducer {
  ChangeThemeColorReducer: IChangeThemeColorReducer;
}

const DetailScreen = () => {
  const navigation = useNavigation();

  const font = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer.font,
  );

  const fontSize = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer.fontSize,
  );

  const colorTheme = useSelector(
    (state: IColorThemeReducer) => state.ChangeThemeColorReducer.color,
  );

  const bottomSheet = useRef();
  const FooterModal = (props: IFooterModalProps) => {
    const {onPress} = props;
    return (
      <View style={styles.viewFooter}>
        <ViewLineComponent />
        <TouchableOpacity style={styles.buttonClose} onPress={onPress}>
          <Text style={styles.labelClose}>Đóng</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderDetail
        isButtonLeft={true}
        isButtonCenter={true}
        isButtonRight={true}
        headerLeft={() => navigation.goBack()}
        headerRight={() => bottomSheet.current?.show()}
        iconRight={{
          uri: 'https://icon-library.com/images/icon-other/icon-other-26.jpg',
        }}
        iconRightStyle={{width: 20, height: 20, resizeMode: 'stretch'}}
        buttonRightStyle={{marginRight: 20}}
      />
      {/* CONTENT COMPONENT */}
      <ContentComponent />
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500}>
        <View style={styles.viewModal}>
          <ModalTick title={'Đánh dấu trang'} font={font} fontSize={fontSize} />
          <ModalTheme title={'Theme'} font={font} fontSize={fontSize} />
          <ModalBrightness
            title={'Độ sáng'}
            font={font}
            fontSize={fontSize}
            colorSlider={colorTheme}
          />
          <ModalFontsize
            title={'Cỡ chữ'}
            font={font}
            colorSlider={colorTheme}
          />
          <ModalFontFamily
            title={'Phông chữ'}
            font={font}
            fontSize={fontSize}
          />
          <ModalReport
            title={'Báo cáo nội dung bài báo'}
            font={font}
            fontSize={fontSize}
          />
        </View>
        <View style={styles.viewFooter}>
          <ViewLineComponent />
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => bottomSheet.current?.close()}>
            <Text style={styles.labelClose}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailScreen;
