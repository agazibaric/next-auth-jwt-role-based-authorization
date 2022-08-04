import { User } from "next-auth";
import { LoginResponse } from "../../types";

export const createNextAuthUser = (loginResponse: LoginResponse): User => ({
  id: loginResponse.user.email,
  name: loginResponse.user.firstName,
  email: loginResponse.user.email,
  authorities: loginResponse.user.authorities || [],
  token: loginResponse.token,
});
