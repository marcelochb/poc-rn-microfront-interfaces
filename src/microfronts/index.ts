import { ComponentType } from "react";
import { ITheme } from "../themes";
export interface IScreen {
  name: string;
  component: () => JSX.Element;
  title: string;
}

export interface IMicrofont {
  stack: IScreen,
  initialRoute: string,
  screens:IScreen[],
}


export interface IRepackComponent<T = any> {
  theme: ITheme,
  callBack?: () => void,
  data?: T,
  callBackBy?: (params:T) => void,
}

export interface IRepackMicrofront<T = any> {
  default: ComponentType<IRepackComponent<T>>
}