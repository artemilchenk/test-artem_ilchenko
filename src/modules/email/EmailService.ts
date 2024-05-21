import { HttpClient } from "@/api/HttpClient";
import { TEmailRequest, TEmailResponse } from "@/modules/email/types";
import { AxiosResponse } from "axios";
import { authService } from "@/modules/auth";
import { IEmail, IQueryParams, THandler } from "@/modules/email/mock/types";

export class EmailService extends HttpClient {
  user;
  data;
  register;

  constructor(
    data: IEmail[],
    dataQueryPipeRegister: typeof dataQueryPipeRegister
  ) {
    super();
    this.user = authService.getUser();
    this.data = data;
    this.register = dataQueryPipeRegister;
  }

  sendEmail(email: Omit<IEmail, "id">) {
    const emailEntity = { id: this.data.length + 1, ...email };
    this.data.push(emailEntity);
    return emailEntity;
  }

  getEmails(query?: IQueryParams): IEmail[] {
    let localFilteredData = [...this.data];

    if (!query) return this.data;

    for (const key in query) {
      const handler: THandler = this.register[key];
      localFilteredData = handler(localFilteredData, query[key]);
    }

    return localFilteredData;
  }
}
