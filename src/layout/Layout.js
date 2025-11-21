// === src/layout/Layout.js ===
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AnimatedCursor from "../components/AnimatedCursor/AnimatedCursor";
import BackgroundLayer from "../components/BackgroundLayer/BackgroundLayer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <AnimatedCursor />
      <BackgroundLayer />

      <Header />

      <main className={styles.main}>
        <div className={styles.heroContainer}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
