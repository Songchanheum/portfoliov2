export * from "./components";
export * from "./hooks";

declare global {
  // type AccessToken = {
  //   aud: string[];
  //   authorities: string[];
  //   user_name: string;
  //   soId: string;
  //   exp: number;
  // };
  interface Array<T> {
    at(index: number): T;
    with(index: number, value: any): T[];
  }
}
