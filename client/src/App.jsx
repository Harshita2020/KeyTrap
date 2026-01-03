import { useRef } from "react";
import keySound from "./assets/audio/kick.wav";

export default function App() {
  const key = useRef(null);

  return (
    <div style={{ padding: 40 }}>
      <h1>Play the Key</h1>

      <button
        onClick={() => {
          key.current.currentTime = 0;
          key.current.play();
        }}
      >
        Press Me
      </button>

      <audio ref={key} src={keySound} />
    </div>
  );
}
