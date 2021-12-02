import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  ModalTick,
  ModalBrightness,
  ModalFontsize,
  ModalTheme,
  ModalFontFamily,
  ModalReport,
} from '@components/ModalComponent';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContentComponent from '@components/ContentComponent/ContentComponent';
import {
  IChangeThemeColorReducer,
  IChangeThemeFontFamilyReducer,
  IChangeThemeFontSizeReducer,
} from '@models/reducers/changeTheme';
import {useDispatch, useSelector} from 'react-redux';
import HeaderDetail from '@components/HeaderComponent/HeaderDetail/HeaderDetail';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {colorGlobal} from '@config/colorGlobal';
import {IDetailNewsReducer} from '@store/reducers/detailNewsReducer';
import {Actions} from '@store/actions';
import {
  IDataDetailNews,
  IGetParamsDetailRequest,
} from '@models/actions/getDetailNews';
import {IDataTick} from '@models/reducers/dataTick';
import ImagePlaceholderDetail from '@components/ImagePlaceholder/ImagePlaceholderDetail';

interface IChangeFontReducer {
  ChangeFontReducer: IChangeThemeFontFamilyReducer &
    IChangeThemeFontSizeReducer;
}
interface IColorThemeReducer {
  ChangeThemeColorReducer: IChangeThemeColorReducer;
}
interface INewsReducer {
  detailNewsReducer: IDetailNewsReducer;
}

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [itemDetail, setItemsDetail] = useState<IDataTick>();

  const ChangeFontReducer = useSelector(
    (state: IChangeFontReducer) => state.ChangeFontReducer,
  );
  const colorTheme = useSelector(
    (state: IColorThemeReducer) => state.ChangeThemeColorReducer.color,
  );

  const {font, fontSize} = ChangeFontReducer;
  const dispatch = useDispatch();
  useEffect(() => {
    if (route.params !== undefined) {
      dispatch(
        Actions.getDetailNewsRequestActions(
          route.params as IGetParamsDetailRequest,
        ),
      );
    }
  }, []);
  const detailNewsReducer = useSelector(
    (state: INewsReducer) => state.detailNewsReducer,
  );
  const {isLoading, dataDetailNews} = detailNewsReducer;
  useEffect(() => {
    setItemsDetail(dataDetailNews);
  }, [isLoading]);

  const refRBSheet = useRef<any>();
  return (
    <View style={styles.container}>
      <HeaderDetail
        isButtonLeft={true}
        isButtonCenter={true}
        isAvatar={true}
        isButtonRight={true}
        headerLeft={() => navigation.goBack()}
        headerRight={() => refRBSheet.current?.open()}
        iconRight={{
          uri: 'https://icon-library.com/images/icon-other/icon-other-26.jpg',
        }}
        iconRightStyle={{width: 20, height: 20, resizeMode: 'stretch'}}
        buttonRightStyle={{marginRight: 20}}
      />
      {/* CONTENT COMPONENT */}
      {!isLoading ? (
        <ContentComponent dataDetail={dataDetailNews} />
      ) : (
        <ImagePlaceholderDetail />
      )}
      {!isLoading && itemDetail !== null && (
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={450}
          openDuration={150}
          closeDuration={150}
          animationType={'slide'}
          customStyles={{
            draggableIcon: {
              backgroundColor: colorGlobal.lineColor,
            },
            container: {borderRadius: 15},
          }}>
          <View style={styles.viewModal}>
            <ModalTick
              title={'Đánh dấu'}
              font={font}
              fontSize={fontSize}
              colorTheme={colorTheme}
              items={[itemDetail] as IDataTick[]}
            />
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
            {/* <ModalReport
            title={'Báo cáo nội dung bài báo'}
            font={font}
            fontSize={fontSize}
          /> */}
          </View>
          <View style={styles.viewFooter}>
            <ViewLineComponent />
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => refRBSheet.current?.close()}>
              <Text style={styles.labelClose}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      )}
    </View>
  );
};

export default DetailScreen;
