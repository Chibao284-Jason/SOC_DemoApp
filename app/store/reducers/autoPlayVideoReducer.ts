import { IAutoVideoRequestActions } from '@models/actions/autoPlayvideo';
import * as types from '@store/actions/types';
export type IPlayVideo = {
  playVideo: boolean
}
const initialState: IPlayVideo = {
  playVideo: true
}

export const autoPlayVideoReducer = (state = initialState, action: IAutoVideoRequestActions) => {
  switch (action.type) {
    case types.AUTO_PLAY_VIDEO:
      return {
        // ...state,
        playVideo: action.playVideo
      };

    default:
      return state

  }

}
