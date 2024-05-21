export type TUser = {
  id: number;
  username: string;
  email: string;
  password?: string;
};

export interface TAuthContext {
  user: TUser | null;
  signUp: (user: Omit<TUser, "id">) => void;
  login: (user: Omit<TUser, "id" | "email">) => void;
  logout: () => void;
}
