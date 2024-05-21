import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { emailService } from "@/modules/email";
import { IEmail } from "@/modules/email/mock/types";

const limit = 5;
interface IEmailListProps {
  updateData: () => void;
  emailsPortion: IEmail[];
}

export const EmailList = ({ emailsPortion }: IEmailListProps) => {
  const [isPrevButton, setIsPrevButton] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({
    skip: "0",
  });

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <h2>
          U sent{" "}
          <span style={{ color: "darkkhaki" }}>
            {emailService.getEmails().length}
          </span>{" "}
          emails
        </h2>
        <div>
          {emailsPortion.map((email) => (
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>{email.id}</div>
              <div style={{ margin: "0 5px" }}>{email.recipient}</div>
              <div style={{ margin: "0 5px" }}>{email.subject}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Here I would replace button to reusable component and create hooks
        like useButton wia callbacks like onDisable and onSuccess and stuff like
        that but its unimplemented refactoring dou to lack of time.*/}
        {isPrevButton ? (
          <button
            style={{ margin: 5 }}
            onClick={() => {
              searchParams.set("skip", +searchParams.get("skip") - limit + "");

              if (+searchParams.get("skip") - limit <= 0) {
                searchParams.delete("skip");
                setIsPrevButton(false);
              }
              setSearchParams(searchParams);
            }}
          >
            Prev
          </button>
        ) : null}
        {emailService.getEmails().length > +searchParams.get("skip") + limit ? (
          <button
            style={{ margin: 5 }}
            onClick={() => {
              searchParams.set("skip", +searchParams.get("skip") + limit + "");
              setSearchParams(searchParams);

              if (+searchParams.get("skip") - limit >= 0) {
                searchParams.delete("skip");
                setIsPrevButton(true);
              }
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};
