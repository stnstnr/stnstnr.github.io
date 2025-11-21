export default function ContentBox({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "720px",   // <-- UNIFY PANEL WIDTH
        margin: "0 auto",
        background: "rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "14px",
        padding: "50px 40px",
        boxShadow: "0 0 25px rgba(150,0,255,0.3)",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
