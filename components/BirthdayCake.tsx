"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { playCelebration } from "@/lib/sounds";
import { useApp } from "@/context/AppContext";

export default function BirthdayCake() {
  const [candleOut, setCandleOut] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const { soundEnabled, playClick } = useApp();

  const blowCandle = useCallback(() => {
    if (candleOut) return;
    playClick();
    setCandleOut(true);
  }, [candleOut, playClick]);

  useEffect(() => {
    if (candleOut && !celebrating) {
      setCelebrating(true);
      playCelebration(soundEnabled);
      const t = setTimeout(() => setShowSystem(true), 1200);
      return () => clearTimeout(t);
    }
  }, [candleOut, celebrating, soundEnabled]);

  return (
    <SectionWrapper id="birthday-cake">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-soft-pink to-rose-pink bg-clip-text text-transparent">
            Make a Wish
          </span>
        </h2>
        <p className="mt-3 text-sm text-white/50">Tap the candle to blow it out</p>

        <div className="relative mx-auto mt-14 w-full max-w-sm">
          {/* Single candle */}
          <div className="relative z-10 flex justify-center pb-2">
            <button
              type="button"
              data-no-hearts
              onClick={blowCandle}
              disabled={candleOut}
              className="flex flex-col items-center disabled:cursor-default"
              aria-label="Blow out birthday candle"
            >
              {!candleOut ? (
                <motion.div
                  className="h-10 w-3 origin-bottom rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-yellow-100"
                  animate={{ scaleY: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 0.12, repeat: Infinity }}
                  style={{ boxShadow: "0 0 16px rgba(255, 200, 100, 0.9)" }}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0.9, scale: 1 }}
                  animate={{ opacity: 0, y: -24, scale: 1.5 }}
                  className="h-12 w-8 rounded-full bg-white/25 blur-md"
                />
              )}
              <div className="mt-1 h-14 w-1 rounded-full bg-gradient-to-b from-amber-50 to-amber-200/70" />
            </button>
          </div>

          {/* Big 3-tier cake */}
          <div className="relative mx-auto w-full">
            <div className="mx-auto h-6 w-[95%] rounded-[50%] bg-rose-pink/30 blur-md" />

            {/* Top tier */}
            <div className="relative mx-auto w-[55%] rounded-t-2xl bg-gradient-to-b from-[#6b3450] via-[#8b4460] to-[#5c2a42] px-4 pb-5 pt-8 shadow-[inset_0_4px_20px_rgba(255,255,255,0.12)]">
              <div className="absolute inset-x-3 top-3 h-1.5 rounded-full bg-white/15" />
              <p className="font-handwriting text-2xl text-soft-pink">25</p>
            </div>

            {/* Middle tier */}
            <div className="relative -mt-1 mx-auto w-[72%] rounded-t-2xl bg-gradient-to-b from-[#5c2a42] via-[#4a2238] to-[#3d2030] px-4 py-6 shadow-[inset_0_4px_16px_rgba(255,255,255,0.08)]">
              <div className="flex justify-center gap-2">
                {["🩷", "✨", "🩷"].map((emoji, i) => (
                  <span key={i} className="text-sm opacity-80">
                    {emoji}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom tier */}
            <div className="relative -mt-1 mx-auto w-[92%] rounded-t-3xl bg-gradient-to-b from-[#3d2030] via-[#2a1520] to-[#1a0d12] px-6 py-10 shadow-[0_40px_80px_rgba(244,114,182,0.3)]">
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2.5 w-2.5 rounded-full bg-rose-pink/50"
                    style={{ opacity: 0.35 + (i % 3) * 0.2 }}
                  />
                ))}
              </div>
              <p className="mt-6 font-handwriting text-xl text-soft-pink/80">
                Happy Birthday, Duck Duck B
              </p>
            </div>

            <div className="mx-auto -mt-1 h-5 w-full max-w-[98%] rounded-[50%] bg-[#12080c] shadow-2xl" />
          </div>
        </div>

        <AnimatePresence>
          {celebrating && (
            <>
              <Confetti />
              <Fireworks />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                onClick={() => showSystem && setCelebrating(false)}
                role="presentation"
              >
                <div className="px-6 text-center">
                  <motion.h3
                    className="text-2xl font-bold text-white md:text-4xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    🎉 HAPPY 25TH BIRTHDAY 🎉
                  </motion.h3>

                  {showSystem && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-10 rounded-2xl border border-lavender/30 bg-white/5 p-6 text-left font-mono text-sm backdrop-blur-xl md:text-base"
                    >
                      <p className="text-lavender">SYSTEM MESSAGE</p>
                      <p className="mt-4 text-white/80">Wish granted...</p>
                      <p className="mt-2 text-rose-pink">
                        Duck Duck B has officially reached Level 25.
                      </p>
                      <p className="mt-4 text-white/70">Skills Unlocked:</p>
                      <ul className="mt-2 space-y-1 text-soft-pink">
                        <li>✓ Kindness</li>
                        <li>✓ Intelligence</li>
                        <li>✓ Handsomeness</li>
                        <li>✓ Being Loved by Janice</li>
                      </ul>
                      <p className="mt-6 text-white">
                        Status:{" "}
                        <span className="text-rose-pink">
                          Birthday Successfully Celebrated ❤️
                        </span>
                      </p>
                    </motion.div>
                  )}
                  {showSystem && (
                    <p className="mt-8 text-xs text-white/40">Tap anywhere to continue</p>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ["#FFB6C1", "#F472B6", "#C4B5FD", "#FFFFFF"][i % 4],
        delay: Math.random() * 0.5,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[85] overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-2 w-2 rounded-sm"
          style={{ left: `${p.x}%`, backgroundColor: p.color }}
          initial={{ top: "-5%", rotate: 0 }}
          animate={{ top: "105%", rotate: 720 }}
          transition={{ duration: 3 + Math.random(), delay: p.delay }}
        />
      ))}
    </div>
  );
}

function Fireworks() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[82]">
      {[20, 50, 80].map((x, i) => (
        <motion.div
          key={x}
          className="absolute h-32 w-32 rounded-full"
          style={{
            left: `${x}%`,
            top: "30%",
            background: "radial-gradient(circle, rgba(244,114,182,0.4) 0%, transparent 70%)",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 2.5, 3], opacity: [1, 0.6, 0] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl"
          style={{ left: `${10 + i * 7}%`, top: `${20 + (i % 5) * 10}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -100 }}
          transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </div>
  );
}
