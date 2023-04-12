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