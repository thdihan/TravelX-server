# TravelX - Server

-   About: This is a backend part of a TravelX
-   Language and Frameworks: Typescript + Express JS

## How to install and Run?

At first clone/download the repo. Then make a `.env` file with these values

```js
NODE_ENV = development
PORT = 5001
DATABASE_URL =
BBCRYPT_SALT_ROUNDS =
DEFAULT_PASS=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
STORE_ID=
SIGNATURE_KEY =
PAYMENT_URL =
```

Then run this code to install all node packages `pnpm i`. If everything is ok then you are ready to run.
Just run this command `pnpm start:dev` to run in development mode or if you want production mode then build first then run with these command :

```js
pnpm run build
pnpm run start:prod
```
