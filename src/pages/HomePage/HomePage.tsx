import { useAuth } from "@/providers/auth-provider";
import { SendEmailForm } from "@/modules/email/components";
import { EmailList } from "@/modules/email/components/EmailList";
import { useCallback, useEffect, useState } from "react";
import { IEmail } from "@/modules/email/mock/types";
import { useSearchParams } from "react-router-dom";
import { emailService } from "@/modules/email";
import { interceptors } from "axios";

export default function HomePage() {
  const { logout } = useAuth();
  const [emailsPortion, setEmailsPortion] = useState<IEmail[]>([]);
  const [searchParams] = useSearchParams({
    skip: "0",
  });

  const updateData = useCallback(
    (defaultSkip?: number) => {
      const data = emailService.getEmails({
        skip: defaultSkip ?? +searchParams.get("skip"),
      });
      setEmailsPortion(data);
    },
    [searchParams, emailsPortion]
  );

  useEffect(() => {
    if (searchParams.get("skip") > emailService.getEmails().length - 1) {
      updateData(0);
    } else updateData();
  }, [searchParams]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Welcome!</h1>
      <button onClick={() => logout()}>LogOut</button>
      <SendEmailForm updateData={updateData} emailsPortion={emailsPortion} />
      <EmailList updateData={updateData} emailsPortion={emailsPortion} />
    </div>
  );
}
