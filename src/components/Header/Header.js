import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";

export default function Header() {
  return (
    <header
      style={{
        height: "90px",  // FIXED HEIGHT
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >
      <Link to="/" className="logo-container">
        <img
          src="/logo.png"
          alt="Stronghold Software"
          style={{
            width: "55px",
            filter: "drop-shadow(0 0 10px var(--accent))"
          }}
        />
      </Link>

      <Navbar />
    </header>
  );
}
