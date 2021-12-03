import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import {} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {styles} from './styles';
import {
  IChangeThemeFontFamilyReducer,
  IChangeThemeFontSizeReducer,
} from '@models/reducers/changeTheme';
import {IDataDetailNews} from '@models/actions/getDetailNews';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Video, {OnPlaybackRateData} from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {Image} from 'react-native-elements/dist/image/Image';
import {yesterday, lastM, lastW, lastY} from '@constants/dateConstant';
import {useNavigation} from '@react-navigation/native';
import {Actions} from '@store/actions';
import {IPlayVideo} from '@store/reducers/autoPlayVideoReducer';
interface IContentComponentProps {
  dataDetail: IDataDetailNews;
}
interface IReducer {
  ChangeFontReducer: IChangeThemeFontFamilyReducer &
    IChangeThemeFontSizeReducer;
}
interface IAutoPlayVideoReducer {
  autoPlayVideoReducer: IPlayVideo;
}

const ContentComponent = (props: IContentComponentProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [pausedAudio, setPausedAudio] = useState(true);
  const [onEnd, setOnEnd] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  const ChangeFontReducer = useSelector(
    (state: IReducer) => state.ChangeFontReducer,
  );
  const autoPlayVideoReducer = useSelector(
    (state: IAutoPlayVideoReducer) => state.autoPlayVideoReducer.playVideo,
  );

  const [paused, setPaused] = useState(true);
  useEffect(() => {
    setPaused(autoPlayVideoReducer);
  }, [autoPlayVideoReducer]);
  const {font, fontSize} = ChangeFontReducer;
  const {dataDetail} = props;
  const {
    title,
    audio,
    cat,
    content,
    count_view,
    datetime,
    desc,
    keywords,
    video,
  } = dataDetail;
  let timeCreate = moment(datetime).fromNow();
  let dateTemp = moment(datetime);

  if (dateTemp.format('D/M/Y') === yesterday) {
    timeCreate = moment(datetime).calendar(null, {lastDay: '[hôm qua]'});
  }
  if (dateTemp.format('M') === lastM.format('M')) {
    timeCreate = moment(datetime)
      .calendar()
      .replace(dateTemp.format('DD/MM/YYYY'), 'tháng trước');
  }
  if (dateTemp.format('D/M/Y') === lastW.format('D/M/Y')) {
    timeCreate = moment(datetime)
      .calendar()
      .replace(lastW.format('D/M/Y'), 'tuần trước');
  }
  if (dateTemp.format('Y') === lastY.format('Y')) {
    timeCreate = moment(datetime)
      .calendar()
      .replace(dateTemp.format('DD/MM/YYYY'), 'năm trước');
  }
  const {width} = useWindowDimensions();
  const source = {
    html: `${content}`,
  };
  let player = React.useRef;
  const onPlayVideo = (event: OnPlaybackRateData) => {
    if (event.playbackRate === 1) {
      setPausedAudio(true);
      setPaused(false);
      return;
    }
  };
  const onPlayAudio = (event: OnPlaybackRateData) => {
    if (event.playbackRate === 1) {
      setPaused(true);
      setPausedAudio(false);
    }
  };
  const onEndBack = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const windowHeight = Dimensions.get('window').height,
      height = e.nativeEvent.contentSize.height,
      offset = e.nativeEvent.contentOffset.y;
    if (windowHeight + offset >= height + 200) {
      if (onEnd) {
        navigation.goBack();
        setOnEnd(false);
      }
    }
  };
  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={e => onEndBack(e)}>
      {video !== '' && (
        <>
          <VideoPlayer
            source={{uri: video}}
            ref={ref => {
              let player = ref;
            }}
            controls={false}
            onPlaybackRateChange={event => onPlayVideo(event)}
            paused={paused}
            style={styles.thumbnailVideo}
            ignoreSilentSwitch={'ignore'}
            toggleResizeModeOnFullscreen={false}
            fullscreen={fullScreen}
            onEnterFullscreen={() => setFullScreen(true)}
            onExitFullscreen={() => setFullScreen(false)}
            disableBack={true}
            onPlay={() => dispatch(Actions.autoPlayVideRequestActions(false))}
            onPause={() => dispatch(Actions.autoPlayVideRequestActions(true))}
          />
        </>
      )}
      <View>
        <Text style={styles.headingTitle(font, fontSize)}>{title}</Text>
      </View>
      <View style={styles.viewAudio}>
        <Text style={styles.textCreate(font, fontSize)}>{timeCreate}</Text>
        {audio !== '' && (
          <View style={styles.viewSound}>
            <TouchableOpacity
              style={styles.thumbnailAudio}
              onPress={() => setPausedAudio(!pausedAudio)}>
              <Image
                source={require('../../assets/img/sound.png')}
                style={styles.imgSound}
              />
              <Text style={styles.textPause(font, fontSize)}>
                {pausedAudio ? 'nghe tin' : 'đang phát'}
              </Text>
            </TouchableOpacity>
            <Video
              source={{uri: audio}}
              ref={ref => {
                let playerAudio = ref;
              }}
              ignoreSilentSwitch={'ignore'}
              onPlaybackRateChange={event => onPlayAudio(event)}
              controls={false}
              paused={pausedAudio}
              audioOnly={false}
              repeat={false}
              style={styles.audioControl}
            />
          </View>
        )}
      </View>
      <Text style={styles.textHeaderContent(font, fontSize)}>{desc}</Text>
      <RenderHtml
        baseStyle={styles.textBodyContent(font, fontSize)}
        systemFonts={[font]}
        enableUserAgentStyles={true}
        contentWidth={width}
        source={source}
      />
    </ScrollView>
  );
};

export default ContentComponent;
