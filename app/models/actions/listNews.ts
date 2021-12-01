//----------- Type Get List News----------//
/**
 * type Actions
 */
export interface IListNewsActionsRequest {
  type: string
  params: IListNewsParamsRequest
}

export interface ISearchNewsActionsRequest {
  type: string
  params: ISearchNewsParamsRequest
}
export interface IListNewsCatsActionsRequest {
  type: string
  params: IListNewsCatsParamsRequest
}
export interface IResponseListTabSuccess {
  type: string
  data: IDataListNew
}

/**
 * type data
 */

export interface IListNewsParamsRequest {
  filters?: { News_Cat: string | number }
  limit: string
  page: string
}
export interface ISearchNewsParamsRequest {
  filters?: { News_Keywords: string }
  limit: string
  page: string
}
export interface IListNewsCatsParamsRequest {
  filters?: { News_Cat: string | number }
  limit: string
  page: string
}


export interface IDataResponseListNews {
  success: number
  message: string
  data: IDataListNew[]
}

export interface IDataListNew {
  rows: IRow[]
  pages: Pages
  keywords_find_more: [{
    keyWords: string
  }]
}

export interface IRow {
  id: number
  title: string
  datetime: string
  thumbnail: string
  desc: string
  count_view: number
}

export interface Pages {
  "<<": number
  "<": number
  "1": number
  "2": number
  "3": number
  "4": number
  "5": number
  ">": number
  ">>": number
}