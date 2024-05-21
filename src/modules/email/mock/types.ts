export interface IEmail {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  message: string;
}

export enum methods {
  skip = "skip",
  order = "order",
  filter = "filter",
}

export interface IQueryParams {
  [methods.skip]?: number;
  [methods.order]?: { [key: string]: 1 | -1 };
  [methods.filter]?: { [key: string]: string }[];
}

export type TQueryValues =
  | IQueryParams[methods.skip]
  | IQueryParams[methods.order]
  | IQueryParams[methods.filter];

export type THandler = (data: IEmail[], queryValue: TQueryValues) => IEmail[];
