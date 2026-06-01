"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { letterTitle } from "@/data/letter";
import { useApp } from "@/context/AppContext";

export default function Envelope() {
  const { playClick } = useApp();

  return (
    <SectionWrapper id="open-letter" className="pb-32">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-soft-pink to-white bg-clip-text text-transparent">
            A Special Letter
          </span>
        </h2>

        <motion.div
          className="relative mx-auto mt-16 w-full max-w-sm"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(255,182,193,0.35) 0%, transparent 70%)",
            }}
          />

          {/* Envelope body */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#f5e6d3] to-[#e8d4bc] p-1 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[4/3] rounded-md bg-gradient-to-br from-[#faf3e8] to-[#edd9c4]">
              {/* Flap */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top"
                style={{
                  background: "linear-gradient(180deg, #e8cfc0 0%, #f0ddd0 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
              {/* Wax seal */}
              <motion.div
                className="absolute left-1/2 top-[42%] z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rose-pink to-[#9f1239] shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(244,114,182,0.5)",
                    "0 0 40px rgba(244,114,182,0.8)",
                    "0 0 20px rgba(244,114,182,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xl text-white">❤️</span>
              </motion.div>
              <p className="absolute bottom-6 left-0 right-0 font-handwriting text-lg text-[#5c4033]/90">
                {letterTitle} ❤️
              </p>
            </div>
          </div>
        </motion.div>

        <Link
          href="/letter/"
          onClick={() => playClick()}
          className="mt-12 inline-block"
        >
          <motion.span
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur-md md:text-base"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(244,114,182,0.35)" }}
            whileTap={{ scale: 0.98 }}
          >
            Open My Letter →
          </motion.span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
