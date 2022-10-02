import type { NextPage } from 'next';
import Head from 'next/head';
import { GoMarkGithub } from 'react-icons/go';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
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
          <h1 className="text-6xl font-bold text-slate-700">
            Next.js Starter Kit
          </h1>
          <p className="py-2 text-3xl text-slate-400">
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
        Implemented by{' '}
        <a href="https://github.com/ninearif" className="text-slate-600">
          <GoMarkGithub className="mr-1 inline-block" />
          <b className="underline">Arif.w</b>
        </a>
      </footer>
    </div>
  );
};

export default Home;
