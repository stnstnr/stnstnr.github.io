import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/games">Games</Link>
      <Link to="/labs">Labs</Link>
      <Link to="/contact">Compliance</Link>
    </nav>
  );
}
