import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import Head from "next/head";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const SignOutPage: NextPage = () => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: ROUTES.HOME,
    })
      .then(() => console.log("signed out"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Out Page</title>
        <meta
          name="description"
          content="Sign out page which clears the session"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sign Out Page</h1>
        <h1 className={styles.description}>
          Click on a button to clear up the session
        </h1>

        <div className={styles.button} onClick={handleSignOut}>
          Sign Out
        </div>
      </main>
    </div>
  );
};

export default SignOutPage;
