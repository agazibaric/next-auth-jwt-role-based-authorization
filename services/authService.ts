import { AUTH_API } from "../const";
import { apiClient } from "../lib";
import { SignInResponse } from "../types";

const signIn = async (email: string, password: string) => {
  return apiClient
    .post<SignInResponse>(AUTH_API.SIGN_IN, { email, password })
    .then((resp) => resp.data);
};

export const authService = {
  signIn,
};
