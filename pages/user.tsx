import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const UserPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>User Page</title>
        <meta
          name="description"
          content="User page that is protected by the user role"
        />
      </Head>

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
