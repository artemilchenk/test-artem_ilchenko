import { useState } from "react";
import { TUser } from "./types";
import { AuthContext } from "./context";
import { authService } from "@/modules/auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState<TUser | null>(authService.getUser);

  const signUp = async (userValues: Omit<TUser, "id">) => {
    const userData = await authService.signUp(userValues);
    setUser(userData as TUser);
  };

  const login = async (userValues) => {
    const user = await authService.login(userValues);
    setUser(user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
