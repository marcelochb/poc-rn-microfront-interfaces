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


export interface IRepackComponent {
  theme: ITheme,
  callBack: () => {}
}
export interface IRepackMicrofront {
  default: ComponentType<IRepackComponent>
}