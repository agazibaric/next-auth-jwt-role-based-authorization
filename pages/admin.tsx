import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const AdminPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Page</title>
        <meta
          name="description"
          content="Admin page that is protected by the admin role"
        />
      </Head>

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

export default AdminPage;
