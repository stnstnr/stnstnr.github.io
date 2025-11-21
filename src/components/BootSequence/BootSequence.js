import { useEffect, useState, useRef } from "react";

const stepsDefault = [
  "[INIT] StrongholdOS // Bootloader v1.2",
  "> Mounting filesystem... done",
  "> Spoofing identity... complete",
  "> Bypassing checksum... succeed",
  "> Deploying payload... ███████████████████ 100%",
  "Connection stabilized.",
  "Welcome back, operator.",
  "> SYSTEM: ONLINE"
];

export default function BootSequence({
  steps = stepsDefault,
  speed = 20,
  delayBetween = 400,
  glitchDuration = 220
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [displayLines, setDisplayLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const [width, setWidth] = useState(null);

  // Hidden element for measurement
  const measureRef = useRef(null);

  useEffect(() => {
    if (measureRef.current && width === null) {
      setWidth(measureRef.current.offsetWidth + 32); // padding comfort
    }
  }, [measureRef.current]);

  useEffect(() => {
    let i = 0;
    let interval;

    const currentStep = steps[stepIndex];
    if (!currentStep) return;

    const type = () => {
      interval = setInterval(() => {
        setCurrentText(currentStep.slice(0, i + 1));
        i++;

        if (i >= currentStep.length) {
          clearInterval(interval);

          setTimeout(() => {
            const isLast = stepIndex === steps.length - 1;

            if (!isLast) {
              setGlitchActive(true);

              setTimeout(() => {
                setGlitchActive(false);
                setDisplayLines(prev => [...prev, currentStep]);
                setCurrentText("");
                setStepIndex(prev => prev + 1);
              }, glitchDuration);
            } else {
              setDisplayLines(prev => [...prev, currentStep]);
              setCurrentText("");
            }
          }, delayBetween);
        }
      }, speed);
    };

    type();

    return () => clearInterval(interval);
  }, [stepIndex, steps, speed, delayBetween, glitchDuration]);


  const allLines = [...displayLines];
  if (currentText) allLines.push(currentText);

  return (
    <>
      {/* Hidden line used to calculate width */}
      <div
        ref={measureRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.95rem"
        }}
      >
        {steps.reduce((a, b) => (a.length > b.length ? a : b))}
      </div>

      {/* Visible terminal */}
      <div
        style={{
          marginTop: "24px",
          textAlign: "left",
          display: "inline-block",
          width: width ? `${width}px` : "auto",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.95rem",
          color: "#d8d8d8",
          background: "rgba(0, 0, 0, 0.35)",
          padding: "14px 18px",
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 16px rgba(187,0,255,0.25)",
          transition: "width 0.35s ease"
        }}
      >
        {allLines.map((line, idx) => {
          const isLast = idx === allLines.length - 1;
          const isSystemLine = line.startsWith("> SYSTEM");

          return (
            <div
              key={idx}
              className={glitchActive && isLast ? "glitch" : ""}
              data-text={line}
              style={{
                whiteSpace: "pre",
                color: isSystemLine ? "var(--accent)" : "#d8d8d8",
                marginBottom: "2px",
                animation:
                  glitchActive && isLast ? "glitchFlash 0.25s linear" : "none"
              }}
            >
              {line}
              {isLast && (
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    marginLeft: "4px",
                    background: "var(--accent)",
                    animation: "blink 1s infinite"
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
