"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function StarfieldBackground() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 4,
    }));
  }, []);

  const constellations = useMemo(
    () => [
      "M10,80 Q30,40 50,60 T90,30",
      "M5,30 Q40,10 70,35 T95,70",
      "M20,90 Q50,70 80,85",
    ],
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-night" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(244, 114, 182, 0.15), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(196, 181, 253, 0.12), transparent 50%)",
        }}
      />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow:
              star.size > 1.5
                ? "0 0 6px rgba(255, 182, 193, 0.8)"
                : undefined,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        preserveAspectRatio="none"
      >
        {constellations.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#constellationGrad)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 8, delay: i * 2, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        <defs>
          <linearGradient id="constellationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6C1" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
