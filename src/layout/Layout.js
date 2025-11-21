// === src/components/Layout.js ===
import Header from "./Header";
import Footer from "./Footer";
import AnimatedCursor from "./AnimatedCursor";
import BackgroundLayer from "./BackgroundLayer";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>

      {/* Background + Cursor (they should sit under everything) */}
      <AnimatedCursor />
      <BackgroundLayer />

      {/* Header should not be inside any centered container */}
      <Header />

      {/* Main content wrapper */}
      <main
        style={{
          paddingTop: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </main>

      {/* Footer stays full-width below */}
      <Footer />
    </div>
  );
}
