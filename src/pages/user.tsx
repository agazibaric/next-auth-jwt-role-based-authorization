import type { NextPage } from "next";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import { AuthComponent } from "../types";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const UserPage: NextPage & AuthComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Congrats, you are USER!</h1>
        <h1 className={styles.description}>Only USER role can see this.</h1>

        <div className={styles.button} onClick={() => router.push(ROUTES.HOME)}>
          Go to Home Page
        </div>
      </main>
    </div>
  );
};

UserPage.auth = {
  role: ROLES.USER,
  unauthorized: ROUTES.UNAUTHORIZED,
  loading: <Loading />,
};

export default UserPage;
