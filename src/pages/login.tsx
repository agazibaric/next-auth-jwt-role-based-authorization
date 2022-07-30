import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const LoginPage: NextPage = () => {
  const handleLogin = () => {
    signIn("credentials", {
      email: "user",
      password: "password",
      callbackUrl: ROUTES.HOME,
    })
      .then(() => console.log("signed in"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>
        <h1 className={styles.description}>
          By clicking on the button the session will be created.
        </h1>

        <div className={styles.button} onClick={handleLogin}>
          Login
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
