export interface IApiClient {
  get(url:string): Promise<any>;
  post(url:string,body:any): Promise<void>;
}