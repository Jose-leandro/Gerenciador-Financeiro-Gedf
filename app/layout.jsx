import React from 'react';
import './styles/globals.css';
import './styles/reset.css';
import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import DOMPurify from 'dompurify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gerenciador Financeiro Gedf',
  description: 'Desenvolvido por José leandro',
};

function RootLayout({ children }) {

  const sanitizedChildren = React.Children.map(children, child => {
    if (typeof child === 'string') {
      return DOMPurify.sanitize(child);
    }
    return child;
  });
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/img/logo.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>{sanitizedChildren}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
