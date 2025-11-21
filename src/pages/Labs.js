import "../styles/PageContainer.css";
import ContentBox from "../components/ContentBox";

export default function Labs() {
  return (
    <div className="page-container">
      <ContentBox>
        <h2 style={{ color: "var(--accent)" }}>Research Laboratory</h2>
        <p>Unauthorized access will be logged.</p>
        <p style={{ opacity: 0.6 }}>
          STATUS: Experimental systems pending activation.
        </p>
      </ContentBox>
    </div>
  );
}
