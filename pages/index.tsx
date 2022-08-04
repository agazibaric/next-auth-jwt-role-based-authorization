import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuth Role Protected Routes</title>
        <meta
          name="description"
          content="NextAuth jwt authorization with role protected routes"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextAuth with Role Protected Routes</h1>
        <p className={styles.description}>Select Route</p>
        <div className={styles.grid}>
          <Card
            title="Sign In"
            subtitle="Authenticate user to create session"
            route="signIn"
          />
          <Card title="Logout" subtitle="Clear up session" route="logout" />
          <Card
            title="User Page"
            subtitle="Only user role has access to it"
            route="user"
          />
          <Card
            title="Admin Page"
            subtitle="Only admin role has access to it"
            route="admin"
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default HomePage;
