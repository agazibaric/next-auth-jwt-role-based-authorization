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
    <main className={styles.main}>
      <h1 className={styles.title}>
        NextAuth JWT Authorization with role based protection
      </h1>

      <div className={styles.container} onClick={handleLogin}>
        login
      </div>
    </main>
  );
};

export default LoginPage;
