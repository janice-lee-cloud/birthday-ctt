"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const { playClick } = useApp();

  const scrollToMemories = () => {
    playClick();
    document.getElementById("memory-universe")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6">
      <NeuralNetwork />

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="mb-6 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["✨", "💖", "✨"].map((spark, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="text-sm"
            >
              {spark}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="block bg-gradient-to-br from-white via-soft-pink to-lavender bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(244,114,182,0.4)]"
          >
            Happy 25th Birthday,
          </motion.span>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mt-2 block bg-gradient-to-r from-rose-pink via-soft-pink to-lavender bg-clip-text text-transparent"
          >
            CTT ❤️
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-lg text-soft-pink/90 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          For my favourite Duck Duck BB
        </motion.p>

        <motion.p
          className="mt-3 text-sm tracking-widest text-white/40 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Made with love by Janice
        </motion.p>

        <motion.button
          type="button"
          onClick={scrollToMemories}
          className="group mt-12 rounded-full border border-rose-pink/40 bg-gradient-to-r from-rose-pink/20 to-lavender/20 px-8 py-4 text-sm font-medium text-white shadow-[0_0_40px_rgba(244,114,182,0.25)] backdrop-blur-md transition-all hover:border-rose-pink/70 hover:shadow-[0_0_60px_rgba(244,114,182,0.4)] md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="bg-gradient-to-r from-white to-soft-pink bg-clip-text text-transparent">
            Begin Your Birthday Journey →
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <motion.div
            className="mx-auto h-2 w-1 rounded-full bg-rose-pink"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
