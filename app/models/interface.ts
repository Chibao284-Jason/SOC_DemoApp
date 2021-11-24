

//type error general
export interface IError {
  success: number
  message: string
  data?: any
}
export interface IErrorAction {
  type: string
  error: any
}

// Type TAB BAR
export type IMenuCategories = [string, IDataResponseCategories]
export interface IDataResponseCategories {
  success: number
  message: string
  data: IDataCategories[]
}

export interface IDataCategories {
  id: number
  name: string
  parent: number
  children: IChildren[]
}

export interface IChildren {
  id: number
  name: string
  parent: number
}
