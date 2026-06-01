"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function ParticleField() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
      })),
    [],
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      style={{ x: springX, y: springY }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255,182,193,0.8) 0%, rgba(244,114,182,0) 70%)`,
            boxShadow: "0 0 12px rgba(244, 114, 182, 0.4)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + (p.id % 4),
            repeat: Infinity,
            delay: p.id * 0.15,
          }}
        />
      ))}
    </motion.div>
  );
}
