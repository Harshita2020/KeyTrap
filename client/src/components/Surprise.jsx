import { useEffect, useRef } from "react";
import { KEY_MAP } from "../utils/keyMap";

export default function Surprise() {
  const audioRefs = useRef({});

  // Build audio refs for each key
  useEffect(() => {
    KEY_MAP.forEach((k) => {
      audioRefs.current[k.id] = new Audio(k.sound);
    });
  }, []);

  const playSound = (key) => {
    const audio = audioRefs.current[key];
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyDown = (event) => {
    const pressed = event.key.toUpperCase();
    playSound(pressed);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>🎹 Play the Keys</h1>

      <div style={{ display: "flex", gap: 12 }}>
        {KEY_MAP.map((k) => (
          <button
            key={k.id}
            style={{
              background: k.color,
              padding: "20px 26px",
              fontSize: 18,
              fontWeight: "bold",
            }}
            onClick={() => playSound(k.id)}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
