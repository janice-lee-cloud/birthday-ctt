"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

interface Heart {
  id: number;
  x: number;
  y: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const { playSparkleSound, playClick } = useApp();

  const spawnHeart = useCallback(
    (x: number, y: number) => {
      const id = Date.now() + Math.random();
      setHearts((prev) => [...prev.slice(-20), { id, x, y }]);
      playSparkleSound();
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 2000);
    },
    [playSparkleSound],
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [data-no-hearts]")) return;
      spawnHeart(e.clientX - 8, e.clientY - 8);
      playClick();
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [spawnHeart, playClick]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute text-lg"
            style={{ left: heart.x, top: heart.y }}
            initial={{ opacity: 1, scale: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -80 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
