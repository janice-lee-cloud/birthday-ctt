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
    try {
      playClick();
      playSparkleSound();
    } catch {
      /* audio optional */
    }
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
  }, [opened]);

  return (
    <div className="relative z-30 flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-20">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button
            key="envelope"
            type="button"
            data-no-hearts
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={openLetter}
            className="relative w-full max-w-md cursor-pointer border-0 bg-transparent p-0 text-left"
            aria-label="Open letter"
          >
            <motion.div
              className="pointer-events-none absolute -inset-6 rounded-3xl blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,182,193,0.25) 0%, transparent 70%)",
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative rounded-xl bg-gradient-to-br from-[#f5e6d3] to-[#dcc4a8] p-2 shadow-2xl">
              <div className="relative aspect-[5/4] rounded-lg bg-[#faf3e8] p-8">
                <div
                  className="pointer-events-none absolute inset-x-2 top-2 h-1/2 rounded-t-lg"
                  style={{
                    background: "linear-gradient(180deg, #edd5c0, #f5ebe0)",
                    clipPath: "polygon(0 0, 100% 0, 50% 85%)",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-pink to-[#9f1239] shadow-lg">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <p className="mt-8 font-handwriting text-xl text-[#5c4033]">{letterTitle}</p>
                  <p className="mt-4 text-sm text-[#5c4033]/60">Tap to open</p>
                </div>
              </div>
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl"
          >
            <div
              className="relative min-h-[320px] rounded-sm p-8 md:p-12"
              style={{
                background:
                  "linear-gradient(165deg, #faf6ee 0%, #f0e4d0 40%, #e8dcc8 100%)",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.5), inset 0 0 80px rgba(139, 90, 60, 0.06)",
              }}
            >
              <h1 className="font-handwriting text-2xl text-[#4a3728] md:text-3xl">
                {letterTitle} ❤️
              </h1>
              <div className="mt-8 min-h-[200px] whitespace-pre-wrap font-handwriting text-lg leading-relaxed text-[#4a3728] md:text-xl md:leading-loose">
                {displayedText || "\u00a0"}
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
