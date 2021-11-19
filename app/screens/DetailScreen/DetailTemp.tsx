import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
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
  const [showModal, setShowModal] = useState(-1);

  const font = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer.font,
  );

  const fontSize = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer.fontSize,
  );

  const colorTheme = useSelector(
    (state: IColorThemeReducer) => state.ChangeThemeColorReducer.color,
  );

  //ref bottom sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['200', '60%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //handle when bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {}, []);

  //Close bottom sheet
  const handleClosePress = () => {
    bottomSheetModalRef.current?.close();
  };
  const bottomSheet = useRef();
  const FooterModal = (props: IFooterModalProps) => {
    const {onPress} = props;
    return (
      <View style={styles.viewFooter}>
        <View style={styles.line} />
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
        <ModalTick title={'Đánh dấu trang'} font={font} fontSize={fontSize} />
        <ModalTheme title={'Theme'} font={font} fontSize={fontSize} />
        <ModalBrightness
          title={'Độ sáng'}
          font={font}
          fontSize={fontSize}
          colorSlider={colorTheme}
        />
        <ModalFontsize title={'Cỡ chữ'} font={font} colorSlider={colorTheme} />
        <ModalFontFamily title={'Phông chữ'} font={font} fontSize={fontSize} />
        <ModalReport
          title={'Báo cáo nội dung bài báo'}
          font={font}
          fontSize={fontSize}
        />
        <View style={styles.viewFooter}>
          <View style={styles.line} />
          <TouchableOpacity style={styles.buttonClose} onPress={onPress}>
            <Text style={styles.labelClose}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailScreen;
