import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {} from 'react-native-elements';
import {useSelector} from 'react-redux';
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
import {Image} from 'react-native-elements/dist/image/Image';
import {yesterday, lastM, lastW, lastY} from '@constants/dateConstant';
import {useNavigation} from '@react-navigation/native';
interface IContentComponentProps {
  dataDetail: IDataDetailNews;
}
interface IReducer {
  ChangeFontReducer: IChangeThemeFontFamilyReducer &
    IChangeThemeFontSizeReducer;
}

const ContentComponent = (props: IContentComponentProps) => {
  const navigation = useNavigation();
  const [paused, setPaused] = useState(true);
  const [pausedAudio, setPausedAudio] = useState(true);
  const [onEnd, setOnEnd] = useState(true);

  const ChangeFontReducer = useSelector(
    (state: IReducer) => state.ChangeFontReducer,
  );
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
  if (dateTemp.format('D/M/Y') === lastW) {
    timeCreate = moment(datetime).calendar().replace(lastW, 'tuần trước');
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
    if (windowHeight + offset >= height + 150) {
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
      <View>
        <Text style={styles.headingTitle(font, fontSize)}>{title}</Text>
      </View>
      <Text style={styles.textCreate(font, fontSize)}>{timeCreate}</Text>
      <Text style={styles.textHeaderContent(font, fontSize)}>{desc}</Text>
      {video !== '' && (
        <>
          <Video
            source={{uri: video}}
            ref={ref => {
              let player = ref;
            }}
            controls={true}
            onPlaybackRateChange={event => onPlayVideo(event)}
            paused={paused}
            style={styles.thumbnailVideo}
          />
        </>
      )}
      {audio !== '' && (
        <View style={{marginTop: 15}}>
          <View style={styles.thumbnailAudio}>
            <Image
              source={require('../../assets/img/sound.png')}
              style={styles.imgSound}
            />
          </View>
          <Video
            source={{uri: audio}}
            ref={ref => {
              let playerAudio = ref;
            }}
            onPlaybackRateChange={event => onPlayAudio(event)}
            controls={true}
            paused={pausedAudio}
            audioOnly={false}
            style={styles.audioControl}
          />
        </View>
      )}
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
