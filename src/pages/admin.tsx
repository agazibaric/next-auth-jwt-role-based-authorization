import type { NextPage } from "next";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import { AuthComponent } from "../types";

const AdminPage: NextPage & AuthComponent = () => {
  return <div>Only Admin Role</div>;
};

AdminPage.auth = {
  role: ROLES.ADMIN,
  unauthorized: ROUTES.LOGIN,
  loading: <Loading />,
};

export default AdminPage;
