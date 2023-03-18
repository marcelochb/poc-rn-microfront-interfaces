import { ITheme } from "../themes";

export interface IGlobalState {
  theme: {value:ITheme}
}

export interface IActionGlobalState<T> {
  payload: T,
  type: string
}