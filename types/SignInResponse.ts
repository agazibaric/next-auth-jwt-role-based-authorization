import { User } from "./User";

export interface SignInResponse {
  user: User;
  token: string;
}
