import { createContext } from "react";
import { TAuthContext, TUser } from "./types";

const defaultValue: TAuthContext = {
  user: null,
  signUp: (loginValues: Omit<TUser, "id">) => {},
  login: (loginValues: Omit<TUser, "id" | "email">) => {},
  logout: () => {},
};

export const AuthContext = createContext<TAuthContext>(defaultValue);
