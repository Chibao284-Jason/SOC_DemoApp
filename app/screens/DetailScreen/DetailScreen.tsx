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
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['200', '70%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={handlePresentModalPress}>
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

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          footerComponent={() => {
            return (
              <View
                style={{height: 50, backgroundColor: 'red', marginBottom: 200}}
              />
            );
          }}>
          <ModalTick title={'Đánh dấu trang'} />
          <ModalTheme title={'Theme'} />
          <ModalBrightness title={'Brightness'} />
          <ModalFontsize title={'FontSize'} />
          <ModalFontStyle title={'FontStyles'} />
          <ModalReport title={'Report'} />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default DetailScreen;
