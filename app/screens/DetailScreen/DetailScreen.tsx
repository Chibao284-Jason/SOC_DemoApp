import React, {useCallback, useMemo, useRef, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  ModalTick,
  ModalBrightness,
  ModalFontsize,
  ModalTheme,
  ModalFontStyle,
  ModalReport,
} from '@components/ModalComponent';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
interface IFooterModalProps {
  onPress: () => void;
}

const DetailScreen = () => {
  const navigation = useNavigation();

  //ref bottom sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1', '60%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //handle when bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
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
          style={{marginHorizontal: 10}}
          onPress={() => handlePresentModalPress()}>
          <Image
            source={{
              uri: 'https://icon-library.com/images/icon-other/icon-other-26.jpg',
            }}
            style={{width: 30, height: 20}}
          />
        </TouchableOpacity>
      ),
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
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          footerComponent={() => {
            return <FooterModal onPress={() => handleClosePress()} />;
          }}>
          <ModalTick title={'Đánh dấu trang'} />
          <ModalTheme title={'Theme'} />
          <ModalBrightness title={'Độ sáng'} />
          <ModalFontsize title={'Cỡ chữ'} />
          <ModalFontStyle title={'Phông chữ'} />
          <ModalReport title={'Báo cáo nội dung bài báo'} />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default DetailScreen;
