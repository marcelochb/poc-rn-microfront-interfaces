interface IGetController<T> {
  data: T;
  loading: boolean;
  error: boolean;
}

export interface IController<T> {
  getController:IGetController<T>
}
