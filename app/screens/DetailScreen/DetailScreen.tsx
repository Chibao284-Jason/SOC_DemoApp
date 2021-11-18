import React, {
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
  useState,
} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
import AuthorComponent from '@components/AuthorComponent/AuthorComponent';
import ContentComponent from '@components/ContentComponent/ContentComponent';
import {
  IChangeThemeColorReducer,
  IChangeThemeFontFamilyReducer,
  IChangeThemeFontSizeReducer,
} from '@models/reducers/changeTheme';
import {useSelector} from 'react-redux';
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
  const snapPoints = useMemo(() => ['1', '60%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //handle when bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    setShowModal(index);
  }, []);

  //Close bottom sheet
  const handleClosePress = () => {
    bottomSheetModalRef.current?.close();
  };
  // Button HeaderRight Show bottom modal
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => handlePresentModalPress()}>
          <Image
            source={{
              uri: 'https://icon-library.com/images/icon-other/icon-other-26.jpg',
            }}
            style={{width: 20, height: 20}}
            resizeMode={'stretch'}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <AuthorComponent />,
    });
  }, [navigation]);

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
    <BottomSheetModalProvider>
      <View style={styles.container(showModal)}>
        {/* CONTENT COMPONENT */}
        <ContentComponent />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={i => {
            if (i == 0) {
              i = 1;
            }
            handleSheetChanges(i);
          }}
          footerComponent={() => {
            return <FooterModal onPress={() => handleClosePress()} />;
          }}>
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
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default DetailScreen;
