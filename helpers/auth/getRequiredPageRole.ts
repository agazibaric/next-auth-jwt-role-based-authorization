import { ROLES } from "../../const";

const SECURED_PAGES = new Map<string, string>([
  ["/user", ROLES.USER],
  ["/admin", ROLES.ADMIN],
]);

export const getRequiredPageRole = (path: string): string | undefined => {
  return SECURED_PAGES.get(path);
};
