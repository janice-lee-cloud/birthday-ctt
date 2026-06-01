"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { letterTitle } from "@/data/letter";
import { assetPath } from "@/lib/utils";

const LETTER_URL = assetPath("/letter/");

export default function Envelope() {
  return (
    <SectionWrapper id="open-letter" className="pb-36">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-soft-pink to-white bg-clip-text text-transparent">
            A Special Letter
          </span>
        </h2>

        <a
          href={LETTER_URL}
          className="group relative mx-auto mt-16 block w-full max-w-sm touch-manipulation"
          aria-label="Go to letter page"
        >
          <div
            className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl transition-opacity group-active:opacity-80"
            style={{
              background: "radial-gradient(circle, rgba(255,182,193,0.35) 0%, transparent 70%)",
            }}
          />
          <motion.div
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#f5e6d3] to-[#e8d4bc] p-1 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-[4/3] rounded-md bg-gradient-to-br from-[#faf3e8] to-[#edd9c4]">
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top"
                style={{
                  background: "linear-gradient(180deg, #e8cfc0 0%, #f0ddd0 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
              <div className="absolute left-1/2 top-[42%] z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rose-pink to-[#9f1239] shadow-lg">
                <span className="text-xl text-white">❤️</span>
              </div>
              <p className="absolute bottom-6 left-0 right-0 font-handwriting text-lg text-[#5c4033]/90">
                {letterTitle} ❤️
              </p>
            </div>
          </motion.div>
        </a>

        <a
          href={LETTER_URL}
          className="touch-manipulation mt-10 inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md active:scale-[0.98] active:bg-white/20"
        >
          Open My Letter →
        </a>
      </div>
    </SectionWrapper>
  );
}
