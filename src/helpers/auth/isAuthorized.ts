import { Session } from "next-auth";
import { Authority } from "../../types";

export const isAuthorized = (session: Session, role: string) => {
  if (!session || !session.user) {
    return false;
  }

  const authorities = session.authorities as Authority[];
  if (!authorities) {
    return false;
  }

  return authorities.some((authority) => authority.name === role);
};
