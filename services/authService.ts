import { AUTH_API } from "../const";
import { apiClient } from "../lib";
import { LoginResponse } from "../types";

const login = async (email: string, password: string) => {
  return apiClient
    .post<LoginResponse>(AUTH_API.LOGIN, { email, password })
    .then((resp) => resp.data);
};

export const authService = {
  login,
};
