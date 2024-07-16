import React from 'react';
import '../app/styles/reset.css';
import '../app/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
