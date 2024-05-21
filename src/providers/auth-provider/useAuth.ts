import { useContext } from "react";
import { AuthContext } from "./context";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (useContext(AuthContext) === undefined) {
    throw new Error("useAuth must be used within an Provider");
  }

  return context;
};
