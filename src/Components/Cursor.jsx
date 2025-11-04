import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/cursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-ring"
        animate={{ x: position.x - 15, y: position.y - 15 }} // Offset to center (30px ring)
        transition={{ type: "spring", stiffness: 200, damping: 150 }}
      />
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 4, y: position.y - 4 }} // Offset to center (8px dot)
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </>
  );
}
