import type { GetServerSidePropsContext, NextPage } from "next";
import { Session, unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Loading } from "../components";
import { ROLES, ROUTES } from "../const";
import { isAuthorized } from "../helpers";
import styles from "../styles/Home.module.css";
import { AuthComponent } from "../types";
import { authOptions } from "./api/auth/[...nextauth]";

const UserPage: NextPage & AuthComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Congrats, you are USER!</h1>
        <h1 className={styles.description}>Only USER role can see this.</h1>

        <Link href={ROUTES.HOME} className={styles.button}>
          Go to Home Page
        </Link>
      </main>
    </div>
  );
};

export default UserPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  console.log("session", session);
  const hasUser = !!session?.user;
  if (!hasUser || !isAuthorized(session, ROLES.USER)) {
    context.res.writeHead(302, { Location: ROUTES.UNAUTHORIZED });
    context.res.end();
  }
}
