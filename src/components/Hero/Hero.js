// === src/components/Hero/Hero.js ===
import { motion } from "framer-motion";
import BootSequence from "../BootSequence/BootSequence";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroPage}>
      <motion.img
        src="/logo-transparent.png"
        alt="Stronghold Software Logo"
        className={styles.heroLogo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className={styles.bootWrapper}>
        <BootSequence />
      </div>
    </div>
  );
}
