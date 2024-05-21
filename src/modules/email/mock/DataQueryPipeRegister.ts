import { IQueryParams, methods, THandler } from "@/modules/email/mock/types";

export const dataQueryPipeRegister: Record<methods, THandler> = {
  skip: (data, queryParam: IQueryParams[methods.skip]) => {
    return data.slice(+queryParam, +queryParam + 5);
  },
  order: (data, queryParam: IQueryParams[methods.order]) => {
    throw new Error("Order handler is not implemented yet");

    return data;
  },
  filter: (data, queryParam: IQueryParams[methods.filter]) => {
    throw new Error("Filter handler is not implemented yet");
    return data;
  },
};
