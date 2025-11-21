import { useEffect, useState } from "react";

export default function Typewriter({
  steps = ["Initializing systems...", "Systems online."],
  speed = 65,
  delayBetween = 800
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval;

    const type = () => {
      interval = setInterval(() => {
        setDisplayText(steps[lineIndex].slice(0, i + 1));
        i++;

        if (i === steps[lineIndex].length) {
          clearInterval(interval);

          setTimeout(() => {
            // Trigger glitch ONLY when transitioning to next line
            if (lineIndex < steps.length - 1) {
              setGlitchActive(true);

              setTimeout(() => {
                setGlitchActive(false);
                setLineIndex(lineIndex + 1);
                setDisplayText("");
              }, 250);
            }
          }, delayBetween);
        }
      }, speed);
    };

    type();
    return () => clearInterval(interval);
  }, [lineIndex]);


  return (
    <p
      className={glitchActive ? "glitch" : ""}
      data-text={displayText}
      style={{
        color: "var(--accent)",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "1.3rem",
        marginTop: "20px",
        textShadow: "0 0 8px var(--accent)",
        animation: glitchActive ? "glitchFlash 0.25s linear" : "none"
      }}
    >
      › {displayText}
      <span
        style={{
          display: "inline-block",
          width: "12px",
          background: "var(--accent)",
          marginLeft: "5px",
          animation: "blink 1s infinite"
        }}
      ></span>
    </p>
  );
}
