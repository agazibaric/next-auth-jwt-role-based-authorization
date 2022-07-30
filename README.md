This is an example project that using [Next.js](https://nextjs.org/) with [NextAuth](https://next-auth.js.org/) to provide custom authorization with role based protected routes.

Each page can be protected by assigning such property to it:

```js
SomePage.auth = {
  role: ROLES.USER,
  unauthorized: ROUTES.LOGIN,
  loading: <Loading />,
};
```

`SomePage` can only be access by someone who has the role `ROLES.USER`. If it's not authorized redirect it to a route specified by `unauthorized` property. While the session is loading show `<Loading>` component. 

## Getting Started

First, install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser where you will see the home page with four routes you can go to: [Login](http://localhost:3000/login), [Logout](http://localhost:3000/logout), [User](http://localhost:3000/user), [Admin](http://localhost:3000/admin).

`Login` page will allow you to authenticate the user and create session.

`Logout` page will clear up the session.

`User` page can only access someone who has `USER` role. Otherwise it's redirected to the `Login` page.

`Admin` page can only access someone who has `ADMIN` role. Otherwise it's redirected to the `Login` page.

The session that will be created on `Login` page is mocked and has only `USER` role. Feel free to change it and test the functionality.
