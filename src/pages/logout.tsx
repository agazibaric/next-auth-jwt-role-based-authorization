import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { ROUTES } from "../const";
import styles from "../styles/Home.module.css";

const LogoutPage: NextPage = () => {
  const handleLogout = () => {
    signOut({
      callbackUrl: ROUTES.HOME,
    })
      .then(() => console.log("signed out"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Logout Page</h1>
        <h1 className={styles.description}>
          Click on a button to clear up the session
        </h1>

        <div className={styles.button} onClick={handleLogout}>
          Logout
        </div>
      </main>
    </div>
  );
};

export default LogoutPage;
