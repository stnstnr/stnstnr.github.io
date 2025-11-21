// === src/components/GameCard/GameCard.js ===
import TiltedCard from "../TiltedCard/TiltedCard";
import styles from "./GameCard.module.css";

export default function GameCard({ title, image, status }) {
  return (
    <TiltedCard>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.status}>{status}</p>
      </div>
    </TiltedCard>
  );
}
