import { Session } from "next-auth";
import { Authority } from "../../types";

export const isAuthorized = (
  session: Session | null,
  role: string
): boolean => {
  if (!session) {
    return false;
  }

  const authorities = (session.authorities || []) as Authority[];
  return authorities?.some((authority) => authority.name === role) ?? false;
};
