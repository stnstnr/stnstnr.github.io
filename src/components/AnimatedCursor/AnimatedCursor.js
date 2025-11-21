// === src/components/AnimatedCursor/AnimatedCursor.js ===
import { useEffect, useRef } from "react";
import styles from "./AnimatedCursor.module.css";

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

  return <div ref={cursorRef} className={styles.cursor} />;
}
