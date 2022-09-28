This project is based on an official [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I add some libraries and pre-configred that will help to start the project with Next.js.

Any contribution to improve , fixing mistakes or add some new features for this project are welcome.

## Included

- Next.js 12 ([`Document`](https://nextjs.org/docs/getting-started)).
- React 18 ([`Document`](https://reactjs.org/docs/getting-started.html)).
- TailwindCSS 3([`Document`](https://tailwindcss.com/docs/installation)).
- Docker-compose pre-configured ([`Document`](https://docs.docker.com/compose/)).
- Jest ([`Document`](https://jestjs.io/docs/api)).
- Testing library ([`Document`](https://testing-library.com/docs/)) with react ([`Document`](https://testing-library.com/docs/react-testing-library/intro)) and jsdom ([`Document`](https://testing-library.com/docs/ecosystem-jest-dom/))extended.
- Preconfigured linting with ESLint.
- Proconfigured editor settings for vscode.
- Written in Typescipt.

# Getting Started

First, install the dependencies,

```bash
npm install
# or
yarn
```

and then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

You can start editing the page by modifying files in `/pages` like `pages/index.tsx`. The page auto-updates as you edit the file. if you create a new `*.ts or *.tsx` files in `/pages` Next.js will handle routing automatically ([`See more`](https://nextjs.org/docs/routing/introduction)).

## APIs

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Testing

We'll use Jest and Testing Library for doing some unit tets. I wrote 2 difference configs for Jest to seperate front-end and back-end tests.

## frontend test

for front-end we'll set the name of test file with normal Jest test file naming pattern like `*.test.tsx` or `*.spec.tsx`.

As we know that by default Next.js threat all files with `.js, .jsx, .ts, .tsx` that placed in `/pages` directory as a page, So to prevent Nextjs from processing our test files I decide to write tests for files in `/pages` to `<rootDir>/__test__` instead to keep file structure in `/pages` clean, easy to read and also prevent an error while building the project.

and here's how to perform front-end test:

```bash
npm run test
# or
yarn test
```

note: if you want to place test files alongside the files in `/pages` you need to change default setting in `next.config.js` follow this [`document.`](https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory)

## backend test

for back-end code we'll add `.server` to the name of testing file like `*.server.test.ts` or `*.server.spec.ts` this will use `node` as testing environment instead of `jsdom` that used for front-end testing.

```bash
npm run test:server
# or
yarn test:server
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deployment

## Docker Compose

I created some configs for developing and production build use Docker compose.

you can create and run Docker containers by

```bash
npm run docker-dev:up
# or
yarn docker-dev:up
```

or this, for production.

```bash
npm run docker-prod:up
# or
yarn docker-prod:up
```

I write 3 seperates `docker-compose` file.

- `docker-compose.yml` main docker-compose settings you can customize as you want.
- `docker-compose.dev.yml` docker-compose setting for development purpose.
- `docker-compose.prod.yml` docker-compose setting for production.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
