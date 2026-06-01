"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AmbientSparkles() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute h-1 w-1"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: s.delay,
          }}
        >
          <span className="block h-full w-full bg-soft-pink shadow-[0_0_8px_#FFB6C1]" />
        </motion.div>
      ))}
    </div>
  );
}
