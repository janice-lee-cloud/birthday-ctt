"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import {
  constellationConnections,
  constellationStars,
  type ConstellationStar,
} from "@/data/constellation";
import { useApp } from "@/context/AppContext";

export default function LoveConstellation() {
  const [activeStar, setActiveStar] = useState<ConstellationStar | null>(null);
  const [unlocked, setUnlocked] = useState<number[]>([]);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const { playClick, playSparkleSound } = useApp();

  const starMap = useMemo(
    () => Object.fromEntries(constellationStars.map((s) => [s.id, s])),
    [],
  );

  const handleStarClick = (star: ConstellationStar) => {
    playClick();
    playSparkleSound();
    setActiveStar(star);
    if (!unlocked.includes(star.id)) {
      setUnlocked((prev) => [...prev, star.id]);
      const id = Date.now();
      setFloatingHearts((prev) => [...prev, { id, x: star.x, y: star.y }]);
      setTimeout(() => {
        setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
      }, 2500);
    }
  };

  const closeMessage = () => {
    playClick();
    setActiveStar(null);
  };

  return (
    <SectionWrapper id="love-constellation">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-lavender to-rose-pink bg-clip-text text-transparent">
            Love Constellation
          </span>
        </h2>
        <p className="mt-3 text-center text-sm text-white/50">
          Tap a star to unlock its message
        </p>

        <div className="relative mx-auto mt-12 aspect-square max-w-lg rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_0_80px_rgba(196,181,253,0.08)] backdrop-blur-md md:p-8">
          {/* SVG lines must not block star clicks */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {constellationConnections.map(([a, b]) => {
              const sa = starMap[a];
              const sb = starMap[b];
              if (!sa || !sb) return null;
              const lit = unlocked.includes(a) && unlocked.includes(b);
              return (
                <motion.line
                  key={`${a}-${b}`}
                  x1={sa.x}
                  y1={sa.y}
                  x2={sb.x}
                  y2={sb.y}
                  stroke={lit ? "#F472B6" : "rgba(255,255,255,0.15)"}
                  strokeWidth={lit ? 0.5 : 0.25}
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: lit ? [0.6, 1, 0.6] : 0.35,
                  }}
                  transition={{ duration: 2, repeat: lit ? Infinity : 0 }}
                />
              );
            })}
          </svg>

          {constellationStars.map((star) => (
            <motion.button
              key={star.id}
              type="button"
              data-no-hearts
              className="absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-14 md:w-14"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                handleStarClick(star);
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              aria-label={`Star: ${star.equation}`}
            >
              <motion.span
                className="relative flex h-5 w-5 items-center justify-center md:h-6 md:w-6"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(255,182,193,0.6)",
                    "0 0 24px rgba(244,114,182,1)",
                    "0 0 10px rgba(255,182,193,0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="absolute h-full w-full rounded-full bg-white" />
                {unlocked.includes(star.id) && (
                  <motion.span
                    className="absolute -inset-4 rounded-full border border-rose-pink/50"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.span>
            </motion.button>
          ))}

          <AnimatePresence>
            {floatingHearts.map((h) => (
              <motion.span
                key={h.id}
                className="pointer-events-none absolute z-10 text-xl"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -60 }}
                exit={{ opacity: 0 }}
              >
                💕
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {!activeStar && (
          <p className="mt-8 text-center text-sm text-white/40">Select a star above ✨</p>
        )}
      </div>

      {/* Message modal — always visible on tap */}
      <AnimatePresence>
        {activeStar && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMessage}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="star-message-title"
              className="relative w-full max-w-lg rounded-2xl border border-rose-pink/40 bg-gradient-to-br from-[#1a1018] to-[#0f0a12] p-6 shadow-[0_0_60px_rgba(244,114,182,0.35)] backdrop-blur-xl sm:p-8"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                data-no-hearts
                onClick={closeMessage}
                className="absolute right-4 top-4 text-white/50 transition hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
              <p id="star-message-title" className="font-mono text-sm text-rose-pink pr-8">
                {activeStar.equation}
              </p>
              <p className="mt-4 font-display text-base leading-relaxed text-white/95 md:text-lg">
                {activeStar.message}
              </p>
              <button
                type="button"
                data-no-hearts
                onClick={closeMessage}
                className="mt-6 w-full rounded-full border border-rose-pink/30 py-3 text-sm text-soft-pink transition hover:bg-rose-pink/10"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
