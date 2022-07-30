import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const UnauthorizedPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          You are unauthorized to see the resource!
        </h1>
        <h1 className={styles.description}>403 Forbidden</h1>

        <div className={styles.button} onClick={() => router.push(ROUTES.HOME)}>
          Go to Home Page
        </div>
      </main>
    </div>
  );
};

export default UnauthorizedPage;
