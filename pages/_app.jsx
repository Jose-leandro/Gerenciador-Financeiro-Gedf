import React, { ReactDOM, useEffect } from 'react';
import '../app/styles/reset.css';
import '../app/styles/globals.css';
import useAxe from '../hooks/useAxe';


export default function MyApp({ Component, pageProps }) {
  useAxe();

  return (
    <Component {...pageProps} />
  );
}
