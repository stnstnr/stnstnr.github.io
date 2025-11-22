// === src/components/Header/Header.js ===
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoContainer}>
          <img
            src="/logo-shield-trans.png"
            alt="Stronghold Software"
            className={styles.logo}
          />
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
