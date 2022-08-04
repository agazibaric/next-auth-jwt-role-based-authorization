import { User } from "next-auth";
import { SignInResponse } from "../../types";

export const createNextAuthUser = (singInResponse: SignInResponse): User => ({
  id: singInResponse.user.email,
  name: singInResponse.user.firstName,
  email: singInResponse.user.email,
  authorities: singInResponse.user.authorities || [],
  token: singInResponse.token,
});
