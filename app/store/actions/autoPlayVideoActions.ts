import { IAutoVideoRequestActions } from "@models/actions/autoPlayvideo";
import * as types from "./types";

export const autoPlayVideRequestActions = (playVideo: boolean): IAutoVideoRequestActions => ({
  type: types.AUTO_PLAY_VIDEO,
  playVideo: playVideo
})