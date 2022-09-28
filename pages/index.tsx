import type { NextPage } from 'next';
import Head from 'next/head';
import { GoMarkGithub } from 'react-icons/go';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center flex-col">
      <Head>
        <title>Next.js Starter Kit</title>
        <meta
          name="description"
          content="Implemented by arif (https://github.com/ninearif)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-grow items-center">
        <div className="py-8 text-center">
          <h1 className="text-slate-700 text-6xl font-bold">
            Next.js Starter Kit
          </h1>
          <p className="text-3xl text-slate-400 py-2">
            with pre-configured{' '}
            <a
              href="https://tailwindcss.com/"
              className="font-semibold text-slate-500"
            >
              TailwindCSS
            </a>
            ,{' '}
            <a
              href="https://jestjs.io/"
              className="font-semibold  text-slate-500"
            >
              Jest
            </a>
            {' and '}
            <a
              href="https://testing-library.com/"
              className="font-semibold  text-slate-500"
            >
              Testing Library
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="flex-none py-6 text-slate-500">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Implemented by{' '}
          <a href="https://github.com/ninearif" className="text-slate-600">
            <GoMarkGithub className="inline-block mr-1" />
            <b className="underline">Arif.w</b>
          </a>
        </a>
      </footer>
    </div>
  );
};

export default Home;
