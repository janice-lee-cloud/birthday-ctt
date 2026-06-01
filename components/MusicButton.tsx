"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiMusicalNote, HiPause, HiPlay } from "react-icons/hi2";
import { musicSrc } from "@/data/music";
import { assetPath } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

const MUSIC_SRC = assetPath(musicSrc);

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const { playClick } = useApp();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onCanPlay = () => {
      setReady(true);
      setError(null);
    };
    const onError = () => {
      setReady(false);
      setPlaying(false);
      setError(
        "Music file missing or invalid. Check public/music/ and data/music.ts",
      );
    };
    const onEnded = () => setPlaying(false);

    audio.addEventListener("canplaythrough", onCanPlay);
    audio.addEventListener("error", onError);
    audio.addEventListener("ended", onEnded);

    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = useCallback(async () => {
    playClick();
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    setError(null);
    audio.volume = 0.7;

    try {
      if (!ready) {
        audio.load();
      }
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      setError(
        "Could not play music. Add your .mp3 to public/music/ and set the path in data/music.ts, then refresh.",
      );
    }
  }, [playing, playClick, ready]);

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
        playsInline
      />

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 right-4 z-[90] max-w-[240px] rounded-xl border border-rose-pink/40 bg-black/90 px-4 py-3 text-xs leading-relaxed text-white/90 shadow-lg backdrop-blur-md"
          >
            {error}
            <button
              type="button"
              data-no-hearts
              className="mt-2 block text-rose-pink underline"
              onClick={() => setError(null)}
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        data-no-hearts
        onClick={toggle}
        className={`fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full border bg-white/10 text-white shadow-[0_0_30px_rgba(244,114,182,0.35)] backdrop-blur-xl transition-colors hover:bg-white/20 ${
          playing ? "border-rose-pink/60" : "border-white/20"
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <HiPause className="h-6 w-6" /> : <HiPlay className="h-6 w-6 ml-0.5" />}
        <HiMusicalNote className="absolute -right-1 -top-1 h-4 w-4 text-rose-pink opacity-80" />
      </motion.button>
    </>
  );
}
