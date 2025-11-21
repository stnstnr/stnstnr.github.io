// === src/components/Navbar/Navbar.js ===
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/games" className={styles.link}>Games</Link>
      <Link to="/labs" className={styles.link}>Labs</Link>
      <Link to="/contact" className={styles.link}>Compliance</Link>
    </nav>
  );
}
