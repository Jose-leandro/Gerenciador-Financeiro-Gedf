import './globals.css'
import './reset.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerenciador Financeiro Gedf',
  description: 'Desenvolvido por José leandro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/img/logo.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



