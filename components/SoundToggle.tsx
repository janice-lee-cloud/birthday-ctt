"use client";

import { motion } from "framer-motion";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useApp } from "@/context/AppContext";

export default function SoundToggle() {
  const { soundEnabled, toggleSound, playClick } = useApp();

  return (
    <motion.button
      type="button"
      data-no-hearts
      onClick={() => {
        toggleSound();
        playClick();
      }}
      className="fixed bottom-6 right-20 z-[90] flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 backdrop-blur-xl max-md:bottom-5 max-md:right-[4.5rem]"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle sound effects"
    >
      {soundEnabled ? (
        <HiSpeakerWave className="h-5 w-5 text-soft-pink" />
      ) : (
        <HiSpeakerXMark className="h-5 w-5 text-white/50" />
      )}
    </motion.button>
  );
}
