import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const SignInPage: NextPage = () => {
  const handleSignIn = (email = "", password = "") => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: ROUTES.HOME,
    })
      .then(() => console.log("signed in"))
      .catch((err) => console.log(err));
  };

  const handleSignInAsUser = () => {
    handleSignIn("user@email.com", "password");
  };

  const handleSignInAsAdmin = () => {
    handleSignIn("admin@email.com", "admin");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In Page</title>
        <meta name="description" content="Sign in page which creates session" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sign In Page</h1>
        <h1 className={styles.descriptivon}>
          By clicking on a button the session will be created with chosen role.
        </h1>

        <div className={styles.grid}>
          <div className={styles.button} onClick={handleSignInAsUser}>
            Sign in as USER
          </div>

          <div className={styles.button} onClick={handleSignInAsAdmin}>
            Sign in as ADMIN
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
