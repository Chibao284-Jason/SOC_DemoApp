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
