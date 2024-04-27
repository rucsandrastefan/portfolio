import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timerId;
    const handleMouseMove = (e) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // Adjust debounce time as needed
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timerId);
    };
  }, []);

  return mousePosition;
}
