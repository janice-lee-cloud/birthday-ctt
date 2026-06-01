"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { letterContent, letterTitle } from "@/data/letter";
import { useApp } from "@/context/AppContext";

export default function LetterExperience() {
  const [opened, setOpened] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const { playClick, playSparkleSound } = useApp();

  const openLetter = useCallback(() => {
    playClick();
    playSparkleSound();
    setOpened(true);
  }, [playClick, playSparkleSound]);

  useEffect(() => {
    if (!opened) {
      setDisplayedText("");
      setTypingDone(false);
      return;
    }
    setDisplayedText("");
    setTypingDone(false);
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayedText(letterContent.slice(0, index));
      if (index >= letterContent.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [opened, letterContent]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-5 py-16">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            className="relative w-full max-w-md cursor-pointer"
            onClick={openLetter}
          >
            <motion.div
              className="absolute -inset-6 rounded-3xl blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,182,193,0.25) 0%, transparent 70%)",
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative rounded-xl bg-gradient-to-br from-[#f5e6d3] to-[#dcc4a8] p-2 shadow-2xl">
              <div className="aspect-[5/4] rounded-lg bg-[#faf3e8] p-8">
                <div
                  className="absolute inset-x-2 top-2 h-1/2 rounded-t-lg"
                  style={{
                    background: "linear-gradient(180deg, #edd5c0, #f5ebe0)",
                    clipPath: "polygon(0 0, 100% 0, 50% 85%)",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-pink to-[#9f1239] shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">❤️</span>
                  </motion.div>
                  <p className="mt-8 font-handwriting text-xl text-[#5c4033]">{letterTitle}</p>
                  <p className="mt-4 text-sm text-[#5c4033]/60">Tap to open</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 40, scaleY: 0.3 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl origin-top"
          >
            <div
              className="relative rounded-sm p-8 shadow-[0_40px_100px_rgba(0,0,0,0.5)] md:p-12"
              style={{
                background:
                  "linear-gradient(165deg, #faf6ee 0%, #f0e4d0 40%, #e8dcc8 100%)",
                boxShadow: "inset 0 0 80px rgba(139, 90, 60, 0.06)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              <h1 className="font-handwriting text-2xl text-[#4a3728] md:text-3xl">
                {letterTitle} ❤️
              </h1>
              <div className="mt-8 whitespace-pre-wrap font-handwriting text-lg leading-relaxed text-[#4a3728]/90 md:text-xl md:leading-loose">
                {displayedText}
                {!typingDone && (
                  <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-rose-pink" />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
