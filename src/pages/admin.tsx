import type { NextPage } from "next";
import Link from "next/link";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import styles from "../styles/Home.module.css";
import { AuthComponent } from "../types";

const AdminPage: NextPage & AuthComponent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Congrats, you are ADMIN!</h1>
        <h1 className={styles.description}>Only ADMIN role can see this.</h1>

        <Link href={ROUTES.HOME}>
          <div className={styles.button}>Go to Home Page</div>
        </Link>
      </main>
    </div>
  );
};

AdminPage.auth = {
  role: ROLES.ADMIN,
  unauthorized: ROUTES.UNAUTHORIZED,
  loading: <Loading />,
};

export default AdminPage;
