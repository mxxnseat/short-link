export interface AsyncRegisterParams<T = unknown> {
  useFactory: (...args: any[]) => Promise<T> | T;
  inject?: any[];
}
