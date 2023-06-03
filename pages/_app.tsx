import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { GitUserContextProvider } from '../contexts/GitUserContext/GitUserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GitUserContextProvider>
      <Component {...pageProps} />
    </GitUserContextProvider>
  );
}

export default MyApp;
