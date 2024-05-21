export interface TEmailRequest {
  sender: number;
  recipient: string;
  subject: string;
  message: string;
}

export interface TEmailResponse {
  id: number;
  sender: number;
  recipient: string;
  subject: string;
  message: string;
}
