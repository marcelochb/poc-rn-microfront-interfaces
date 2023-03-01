import { ITheme } from "../themes";

export interface ITemplate<T> {
  theme: ITheme,
  data?: T,
  listData?: T[],
  loading?: boolean,
  error?: boolean,
  callBack?: (data:T) => void;
}