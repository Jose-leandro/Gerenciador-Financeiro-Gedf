import Header from "./components/header"
import styles from '../../src/Sass/page.module.sass'
import Footer from "./components/footer"
import Main from "./components/main/main"

export default function Page() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <Main />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
