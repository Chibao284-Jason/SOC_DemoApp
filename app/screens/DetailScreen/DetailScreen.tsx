import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ModalTick from '@components/ModalComponent/ModalTick';
import ModalTheme from '@components/ModalComponent/ModalTheme';
import ModalBrightness from '@components/ModalComponent/ModalBrightness';
import ModalFontsize from '@components/ModalComponent/ModalFontsize';

const DetailScreen = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ModalTick title={'Đánh dấu trang'} />
          <ModalTheme title={'Theme'} />
          <ModalBrightness title={'Brightness'} />
          <ModalFontsize title={'Font'} />
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
