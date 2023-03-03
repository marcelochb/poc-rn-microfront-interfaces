
export interface IControllerGetData<T> {
  data: T;
  loading: boolean;
  error: boolean;
}

export type IControllerFormData<T> = IControllerGetData<T> & {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
},
}
