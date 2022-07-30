import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Auth } from "../components";
import "../styles/globals.css";
import { AuthComponent } from "../types";

export type CustomAppProps = AppProps & {
  Component: AuthComponent;
};

function App({ Component, pageProps }: CustomAppProps) {
  const { auth } = Component;

  return (
    <SessionProvider session={pageProps.session}>
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
