// === src/components/Typewriter/Typewriter.js ===
import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

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
  }, [lineIndex, steps, speed, delayBetween]);

  return (
    <p
      className={`${styles.line} ${glitchActive ? "glitch" : ""}`}
      data-text={displayText}
    >
      › {displayText}
      <span className={styles.cursor}></span>
    </p>
  );
}
