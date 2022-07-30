import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { createNextAuthUser } from "../../../helpers";
import { authService } from "../../../services";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      Credentials({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials = { email: "", password: "" }) => {
          try {
            const { email, password } = credentials;
            const loginResponse = await authService.login(email, password);

            if (loginResponse) {
              return createNextAuthUser(loginResponse);
            }

            return null;
          } catch (err) {
            throw new Error(`Failed to login ${JSON.stringify({ err })}`);
          }
        },
      }),
    ],

    callbacks: {
      // Getting the result from authorize function
      jwt: ({ token, user }) => {
        if (user) {
          // Add needed properties to the token object which will be passed to session function
          token.accessToken = user.token;
          token.authorities = user.authorities;
        }

        return token;
      },

      // Getting the result from jwt function
      session: ({ session, token }) => {
        // Create custom session object from token object
        session.accessToken = token.accessToken;
        session.authorities = token.authorities;

        return session;
      },
    },

    session: {
      strategy: "jwt",
    },
  });
