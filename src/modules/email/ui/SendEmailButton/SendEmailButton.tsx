import styled from "styled-components";

export const SendEmailButton = styled.button<{ isactive: boolean }>(
  ({ isactive }) => ({
    "&:focus": {
      outline: "none",
    },

    border: isactive && "2px #646CFF solid",
  })
);
