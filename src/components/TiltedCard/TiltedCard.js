import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

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
    <div ref={tiltRef} style={{ width: "fit-content", margin: "auto" }}>
      {children}
    </div>
  );
}
