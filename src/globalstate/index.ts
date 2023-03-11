import { ITheme } from "../themes";

export interface IGlobalState {
  theme: ITheme
}

export interface IActionGlobalState<T> {
  payload: T,
  type: string
}