import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import styles from "../styles/Home.module.css";
import { AuthComponent } from "../types";

const AdminPage: NextPage & AuthComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Congrats, you are ADMIN!</h1>
        <h1 className={styles.description}>Only ADMIN role can see this.</h1>

        <div className={styles.button} onClick={() => router.push(ROUTES.HOME)}>
          Go to Home Page
        </div>
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
