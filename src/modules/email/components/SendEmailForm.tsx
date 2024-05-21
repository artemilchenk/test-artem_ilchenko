import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendEmailButton } from "@/modules/email/ui/SendEmailButton/SendEmailButton";
import { emailService } from "@/modules/email";
import { IEmail } from "@/modules/email/mock/types";

interface ISendEmailFormProps {
  updateData: () => void;
  emailsPortion: IEmail[];
}

export const SendEmailForm = ({ updateData }: ISendEmailFormProps) => {
  const { user } = useAuth();
  const [emailForm, setEmailForm] = useState<boolean>(false);

  const schema = z.object({
    recipient: z.string().min(1).max(255).email(),
    subject: z.string().min(1).max(128),
    message: z.string().min(1).max(5000),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  type FormFields = z.infer<typeof schema>;

  const onSubmit: SubmitHandler<FormFields> = async (emailData) => {
    console.log({ emailData });
    const createdEmail = emailService.sendEmail({
      sender: user?.email!,
      subject: emailData.subject,
      recipient: emailData.recipient,
      message: emailData.message,
    });

    if (createdEmail) updateData();

    reset();
  };

  return (
    <div>
      <SendEmailButton
        isactive={emailForm}
        onClick={() => setEmailForm((prevState) => !prevState)}
      >
        Send Message
      </SendEmailButton>

      {emailForm ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Sender</div>
                <div>{user?.email}</div>
              </div>
            </label>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Recipient</div>
              <div>
                <input {...register("recipient")} type="" placeholder="Email" />
              </div>
            </div>
            {errors.recipient && (
              <div style={{ color: "darkred" }}>{errors.recipient.message}</div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Subject</div>
              <div>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Text subject"
                />
              </div>
            </div>

            {errors.subject && (
              <div style={{ color: "darkred" }}>{errors.subject.message}</div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Message</div>
              <div>
                <input {...register("message")} placeholder="Email text" />
              </div>
            </div>

            {errors.message && (
              <div style={{ color: "darkred" }}>{errors.message.message}</div>
            )}

            <div style={{ marginTop: 10 }}>
              <button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Send"}
              </button>
              {errors.root && (
                <div style={{ color: "darkred" }}>{errors.root.message}</div>
              )}
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};
