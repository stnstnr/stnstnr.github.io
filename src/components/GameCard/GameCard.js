import TiltedCard from "./TiltedCard";

export default function GameCard({ title, image, status }) {
  return (
    <TiltedCard>
      <div style={{ width: "260px", textAlign: "center" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.15)"
          }}
        />
        <h3 style={{ marginTop: "14px" }}>{title}</h3>
        <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>{status}</p>
      </div>
    </TiltedCard>
  );
}
