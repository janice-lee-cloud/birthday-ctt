"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { letterContent, letterTitle } from "@/data/letter";

export default function LetterExperience() {
  const [opened, setOpened] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const openingRef = useRef(false);

  useEffect(() => {
    if (!opened) {
      setDisplayedText("");
      setTypingDone(false);
      return;
    }

    setDisplayedText("");
    setTypingDone(false);
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedText(letterContent.slice(0, index));
      if (index >= letterContent.length) {
        window.clearInterval(interval);
        setTypingDone(true);
      }
    }, 28);

    return () => window.clearInterval(interval);
  }, [opened]);

  const openLetter = useCallback(() => {
    if (openingRef.current || opened) return;
    openingRef.current = true;
    setOpened(true);

    window.setTimeout(() => {
      document.getElementById("letter-paper")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [opened]);

  if (!opened) {
    return (
      <div className="relative z-30 flex min-h-[100dvh] w-full items-center justify-center px-5 pb-28 pt-20">
        <button
          type="button"
          onClick={openLetter}
          onTouchEnd={(e) => {
            e.preventDefault();
            openLetter();
          }}
          className="touch-manipulation group relative w-full max-w-md cursor-pointer border-0 bg-transparent p-0 text-left [-webkit-tap-highlight-color:transparent]"
          aria-label="Open letter"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-3xl opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,182,193,0.35) 0%, transparent 70%)",
            }}
          />
          <div className="relative rounded-xl bg-gradient-to-br from-[#f5e6d3] to-[#dcc4a8] p-2 shadow-2xl active:scale-[0.98]">
            <div className="relative aspect-[5/4] rounded-lg bg-[#faf3e8] p-8">
              <div
                className="pointer-events-none absolute inset-x-2 top-2 h-1/2 rounded-t-lg"
                style={{
                  background: "linear-gradient(180deg, #edd5c0, #f5ebe0)",
                  clipPath: "polygon(0 0, 100% 0, 50% 85%)",
                }}
              />
              <div className="relative z-10 flex h-full min-h-[180px] flex-col items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-pink to-[#9f1239] shadow-lg">
                  <span className="text-2xl">❤️</span>
                </div>
                <p className="mt-8 font-handwriting text-xl text-[#5c4033]">{letterTitle}</p>
                <p className="mt-4 text-sm font-medium text-[#5c4033]/70">Tap to open</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-30 w-full px-5 pb-32 pt-20">
      <div id="letter-paper" className="mx-auto w-full max-w-2xl" style={{ animation: "fadeIn 0.5s ease-out" }}>
        <div
          className="relative min-h-[360px] rounded-sm p-8 md:p-12"
          style={{
            background:
              "linear-gradient(165deg, #faf6ee 0%, #f0e4d0 40%, #e8dcc8 100%)",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.55), inset 0 0 80px rgba(139, 90, 60, 0.06)",
          }}
        >
          <h1 className="font-handwriting text-2xl text-[#4a3728] md:text-3xl">
            {letterTitle} ❤️
          </h1>
          <div className="mt-8 min-h-[240px] whitespace-pre-wrap font-handwriting text-lg leading-relaxed text-[#4a3728] md:text-xl md:leading-loose">
            {displayedText}
            {!typingDone && (
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-rose-pink" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
