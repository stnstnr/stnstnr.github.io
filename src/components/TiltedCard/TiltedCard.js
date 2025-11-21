// === src/components/TiltedCard/TiltedCard.js ===
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./TiltedCard.module.css";

export default function TiltedCard({ children, options }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3,
        ...options,
      });
    }
  }, [options]);

  return (
    <div ref={tiltRef} className={styles.wrapper}>
      {children}
    </div>
  );
}
