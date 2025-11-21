import "../styles/PageContainer.css";
import GameCard from "../components/GameCard";
import ContentBox from "../components/ContentBox";

const games = [
  {
    title: "Elevator",
    image: "/elevator.png",
    status: "In Development"
  },
  {
    title: "Apocalypse",
    image: "/apocalypse.png",
    status: "Prototype Stage"
  }
];

export default function Games() {
  return (
    <div className="page-container">
      <ContentBox>
        <h2 style={{ color: "var(--accent)", marginBottom: "12px" }}>
          Asset Registry
        </h2>

        <p style={{ opacity: 0.7, marginBottom: "30px" }}>
          Active builds currently under evaluation.
        </p>

        {/* FIX APPLIED HERE */}
        <div
          style={{
            width: "100%",               // full use of container
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {games.map((a, i) => (
            <GameCard key={i} {...a} />
          ))}
        </div>
        {/* END FIX */}
      </ContentBox>
    </div>
  );
}
