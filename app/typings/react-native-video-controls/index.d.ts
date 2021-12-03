declare module 'react-native-video-controls' {
  import { ViewStyle, } from 'react-native';
  import Video, { VideoProperties } from 'react-native-video';
  import * as React from 'react';

  export interface VideoPlayerProperties {
    // Props

    /**
     * If true, clicking the fullscreen button will toggle the ```<Video />``` component between cover/contain, set to false if you want to customize fullscreen behaviour
     * @default true
     */

    toggleResizeModeOnFullscreen?: boolean;
    /**
     * Hide controls after X amount of time in milliseconds
     * @default 15000
     */
    controlTimeout?: number;

    /**
     * Show or hide the controls on first render
     * @default true
     */
    showOnStart?: boolean;

    /**
     * React Native StyleSheet object that is appended to the ```<Video>``` component
     * @default null
     */
    videoStyle?: ViewStyle,

    /**
     * When using the default React Native navigator and do not override the ```onBack``` function, you'll need to pass the navigator to the VideoPlayer for it to function
     * @default null
     */
    navigator?: Navigator;

    /**
     * Fill/handle colour of the seekbar
     * @default '#FFF'
     */
    seekColor?: string;

    // Events
    /**
     * Fired when the video enters fullscreen after the fullscreen button is pressed
     */
    onEnterFullscreen?(): void;

    /**
    * Fired when the video exits fullscreen after the fullscreen button is pressed
    */
    onExitFullscreen?(): void;

    /**
    * Fired when the video is paused after the play/pause button is pressed
    */
    onPause?(): void;

    /**
    * Fired when the video begins playing after the play/pause button is pressed
    */
    onPlay?(): void;

    /**
    * Function fired when back button is pressed, override if using custom navigation
    */
    onBack?(): void;

    /**
    * Fired when the video is complete
    */
    onEnd?(): void;

    // Controls
    /**
     * Hide the fullscreen button
     */
    disableFullscreen?: boolean;

    /**
     * Hide the play/pause toggle
     */
    disablePlayPause?: boolean;

    /**
     * Hide the seekbar
     */
    disableSeekbar?: boolean;

    /**
     * Hide the Volume control
     */
    disableVolume?: boolean;

    /**
     * Hide the timer
     */
    disableTimer?: boolean;

    /**
    * Hide the back button
    */
    disableBack?: boolean;

  }

  export interface MixVideoPlayerProps extends VideoProperties, VideoPlayerProperties {
  }

  export default class VideoPlayer extends React.Component<MixVideoPlayerProps> {
    seek(time: number, tolerance?: number): void;
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
  }
}
