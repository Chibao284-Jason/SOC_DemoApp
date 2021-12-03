
export interface IGetParamsDetailRequest {
  id: string | number
}
export interface IDetailNewsActionsRequest {
  type: string
  params: IGetParamsDetailRequest
}

export interface IDetailNewsActionsSuccess {
  type: string
  data: IDataDetailNews
}


export interface IDataDetailNews {
  title: string
  desc: string
  content: string
  datetime: string
  count_view: number
  keywords: string
  cat: number
  video: string
  audio: string
  thumbnail: string
  id: string
  cat_name: string
}