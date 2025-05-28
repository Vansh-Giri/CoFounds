import { useState, useEffect } from "react";

// Usage: const text = useTypewriter("Hiring is", show, 60);
export default function useTypewriter(fullText, animate, speed = 60) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!animate) {
      setDisplayed("");
      return;
    }
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [fullText, animate, speed]);

  return displayed;
}
