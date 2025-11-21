import ContentBox from "../components/ContentBox/ContentBox";
import GameCard from "../components/GameCard/GameCard";

import styles from "./Games.module.css";
import "../styles/PageContainer.css";

const games = [
  { title: "Elevator", image: "/elevator.png", status: "In Development" },
  { title: "Apocalypse", image: "/apocalypse.png", status: "Prototype Stage" }
];

export default function Games() {
  return (
    <div className="page-container">
      <ContentBox>
        <h2 className={styles.title}>Asset Registry</h2>
        <p className={styles.subtitle}>
          Active builds currently under evaluation.
        </p>

        <div className={styles.gameList}>
          {games.map((g, i) => (
            <GameCard key={i} {...g} />
          ))}
        </div>
      </ContentBox>
    </div>
  );
}
