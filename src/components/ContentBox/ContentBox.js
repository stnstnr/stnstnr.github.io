// === src/components/ContentBox/ContentBox.js ===
import styles from "./ContentBox.module.css";

export default function ContentBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}
