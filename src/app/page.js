import Header from "./header"
import styles from '../Sass/page.module.sass'
import Footer from "./footer"
import Main from "./main/main"

export default function Page() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
