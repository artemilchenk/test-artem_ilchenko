import { EmailService } from "@/modules/email/EmailService";
import { IEmail } from "@/modules/email/mock/types";
import { dataQueryPipeRegister } from "@/modules/email/mock";

export const data: IEmail[] = [
  {
    id: 1,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 2,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 3,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 4,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 5,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 6,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 7,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 8,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 9,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 10,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 11,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 12,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 13,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 14,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 15,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 16,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 17,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 18,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 19,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
  {
    id: 20,
    sender: "sender@gmail.com",
    recipient: "recipient@gmail.com",
    subject: "subject text",
    message: "message text",
  },
];

export const emailService = new EmailService(data, dataQueryPipeRegister);