import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES } from "../../const";
import { isAuthorized } from "../../helpers";
import { AuthProps } from "../../types";

interface Props {
  children: JSX.Element;
  auth: AuthProps;
}

export const Auth = ({ children, auth }: Props) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const hasUser = !!session?.user;
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!hasUser || !isAuthorized(session, auth.role)) {
      router.push(auth.unauthorized);
    }
  }, [loading, hasUser, router, session, auth]);

  if (loading || !hasUser) {
    return auth.loading;
  }

  return children;
};
