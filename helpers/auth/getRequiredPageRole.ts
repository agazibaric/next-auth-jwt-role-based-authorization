import { ROLES, ROUTES } from "../../const";

const SECURED_PAGES = new Map<string, string>([
  [ROUTES.USER, ROLES.USER],
  [ROUTES.ADMIN, ROLES.ADMIN],
]);

export const getRequiredPageRole = (path: string): string | undefined => {
  return SECURED_PAGES.get(path);
};
