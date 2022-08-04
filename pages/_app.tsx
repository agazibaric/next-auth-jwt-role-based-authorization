import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Auth } from "../components";
import "../styles/globals.css";
import { AuthComponent } from "../types";

export type CustomAppProps = AppProps & {
  Component: AuthComponent;
};

function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  const { auth } = Component;

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {auth ? (
        <Auth auth={auth}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default App;
