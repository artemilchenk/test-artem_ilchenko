import { HttpClient } from "@/api/HttpClient";
import { TUser } from "@/providers/auth-provider";
import { AxiosResponse } from "axios";

export class AuthService extends HttpClient {
  constructor() {
    super();
  }

  async login(userValues: Omit<TUser, "id" | "email">): Promise<TUser> {
    const userResponse = await this.http.get("users/current/", {
      auth: {
        username: userValues.username,
        password: userValues.password!,
      },
    });

    const userWithPassword: TUser = {
      id: userResponse.data.id,
      username: userResponse.data.username,
      email: userResponse.data.email,
      password: userValues.password,
    };

    localStorage.setItem("user", JSON.stringify(userWithPassword));

    return userWithPassword;
  }

  logout() {
    localStorage.removeItem("user");
  }

  async signUp(user) {
    const userResponse = await this.http.post("users/", user, {
      maxRedirects: 0,
    });
    localStorage.setItem("user", JSON.stringify(userResponse.data));

    return userResponse.data;
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
