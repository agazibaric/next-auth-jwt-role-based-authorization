import type { NextPage } from "next";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import { AuthComponent } from "../types";

const UserPage: NextPage & AuthComponent = () => {
  return <div>Only User Role</div>;
};

UserPage.auth = {
  role: ROLES.USER,
  unauthorized: ROUTES.LOGIN,
  loading: <Loading />,
};

export default UserPage;
