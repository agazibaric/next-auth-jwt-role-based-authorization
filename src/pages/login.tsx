import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const LoginPage: NextPage = () => {
  const handleLogin = (email = "", password = "") => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: ROUTES.HOME,
    })
      .then(() => console.log("signed in"))
      .catch((err) => console.log(err));
  };

  const handleLoginAsUser = () => {
    handleLogin("user@email.com", "password");
  };

  const handleLoginAsAdmin = () => {
    handleLogin("admin@email.com", "admin");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>
        <h1 className={styles.description}>
          By clicking on a button the session will be created with chosen role.
        </h1>

        <div className={styles.grid}>
          <div className={styles.button} onClick={handleLoginAsUser}>
            Login as USER
          </div>

          <div className={styles.button} onClick={handleLoginAsAdmin}>
            Login as ADMIN
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
