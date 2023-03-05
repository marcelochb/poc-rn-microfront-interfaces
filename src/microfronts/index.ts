interface IStack {
  name: string;
  component: () => JSX.Element;
}

interface IScreen {
  name: string;
  component: () => JSX.Element;
  title: string;
}

export interface IMicrofont {
  stack: IStack,
  initialRoute: string,
  screens:IScreen[],
}