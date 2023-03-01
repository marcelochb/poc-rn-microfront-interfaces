import { ITheme } from "@poc/theme";

export interface ITemplate<T> {
  theme: ITheme,
  data?: T,
  listData?: T[],
  loading?: boolean,
  error?: boolean,
  callBack?: ({}:T) => void;
}