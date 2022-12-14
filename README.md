This is an example project that using [Next.js](https://nextjs.org/) with [NextAuth](https://next-auth.js.org/) to provide custom authorization with role based protected routes via Next.js middleware.

## Getting Started

First, install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser where you will see the home page with four routes you can go to: [Sign In](http://localhost:3000/signIn), [Sign Out](http://localhost:3000/signOut), [User](http://localhost:3000/user), [Admin](http://localhost:3000/admin).

`Sign In` page will allow you to authenticate the user and create session with chosen role.

`Sign Out` page will clear up the session.

`User` page can only access someone who has `USER` role. Otherwise it's redirected to the `Unauthorized` page.

`Admin` page can only access someone who has `ADMIN` role. Otherwise it's redirected to the `Unauthorized` page.
