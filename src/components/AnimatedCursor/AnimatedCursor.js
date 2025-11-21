import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = 1;
    };

    const hide = () => {
      cursor.style.opacity = 0;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "16px",
        height: "16px",
        border: "2px solid #bb00ff",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        mixBlendMode: "difference",
        boxShadow: "0 0 10px #bb00ff",
        zIndex: 999999,
        /* 👇 key change: no smoothing */
        transition: "opacity 0.15s ease-out"
      }}
    />
  );
}
