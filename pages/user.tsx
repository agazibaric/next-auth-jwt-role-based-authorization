import type { NextPage } from "next";
import Link from "next/link";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const UserPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Congrats, you are USER!</h1>
        <h1 className={styles.description}>Only USER role can see this.</h1>

        <Link href={ROUTES.HOME}>
          <div className={styles.button}>Go to Home Page</div>
        </Link>
      </main>
    </div>
  );
};

export default UserPage;
