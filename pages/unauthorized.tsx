import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const UnauthorizedPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unauthorized Page</title>
        <meta
          name="description"
          content="Unauthorized page which signals that you do not have the right permissions to access the page"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You are unauthorized to see the resource!
        </h1>
        <h1 className={styles.description}>403 Forbidden</h1>

        <div className={styles.grid}>
          <Link href={ROUTES.HOME}>
            <div className={styles.button}>Go to Home Page</div>
          </Link>

          <Link href={ROUTES.SIGN_IN}>
            <div className={styles.button}>Sign In</div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UnauthorizedPage;
