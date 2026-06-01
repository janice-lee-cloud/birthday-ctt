"use client";

import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { memories } from "@/data/memories";
import { useApp } from "@/context/AppContext";
import { assetPath } from "@/lib/utils";

export default function MemoryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { playClick } = useApp();

  const handleTouchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = handleTouchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setActiveIndex((prev) => {
        if (diff > 0) return Math.min(prev + 1, memories.length - 1);
        return Math.max(prev - 1, 0);
      });
      playClick();
    }
  };

  const scrollPolaroid = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= memories.length) return prev;
        playClick();
        return next;
      });
    },
    [playClick],
  );

  return (
    <SectionWrapper id="memory-universe">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-center text-3xl font-semibold text-white md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-soft-pink to-lavender bg-clip-text text-transparent">
            Memory Universe
          </span>
        </motion.h2>
        <p className="mt-3 text-center text-sm text-white/50">
          Memories drifting through space — tap or swipe on mobile
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 hidden h-[520px] max-w-4xl md:block"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {memories.map((memory, index) => (
            <PolaroidCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>

        <div
          className="relative mt-12 md:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: memories[activeIndex].rotation }}
            className="mx-auto w-[min(100%,280px)]"
          >
            <PolaroidCard memory={memories[activeIndex]} index={activeIndex} mobile />
          </motion.div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              data-no-hearts
              onClick={() => scrollPolaroid(-1)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
              disabled={activeIndex === 0}
            >
              ←
            </button>
            <span className="text-xs text-white/40">
              {activeIndex + 1} / {memories.length}
            </span>
            <button
              type="button"
              data-no-hearts
              onClick={() => scrollPolaroid(1)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
              disabled={activeIndex === memories.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const FALLBACKS: Record<string, string[]> = {
  ".jpg": [".JPG", ".jpeg", ".JPEG", ".png", ".PNG", ".svg"],
  ".JPG": [".jpg", ".jpeg", ".png", ".svg"],
  ".png": [".PNG", ".jpg", ".JPG", ".svg"],
  ".svg": [".jpg", ".JPG", ".png"],
};

function PolaroidCard({
  memory,
  index,
  mobile = false,
}: {
  memory: (typeof memories)[0];
  index: number;
  mobile?: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const [src, setSrc] = useState(assetPath(memory.image));
  const fallbacksRef = useRef<string[]>([]);

  const handleImageError = () => {
    if (fallbacksRef.current.length === 0) {
      const ext = memory.image.match(/\.[^.]+$/)?.[0] ?? "";
      const base = memory.image.slice(0, -ext.length);
      fallbacksRef.current = (FALLBACKS[ext] ?? [".svg"]).map((e) => assetPath(`${base}${e}`));
    }
    const next = fallbacksRef.current.shift();
    if (next) {
      setSrc(next);
      return;
    }
    setImgError(true);
  };

  return (
    <motion.div
      className={
        mobile
          ? "relative"
          : "absolute w-[160px] cursor-pointer md:w-[180px] lg:w-[200px]"
      }
      style={
        mobile
          ? undefined
          : {
              left: `${memory.x}%`,
              top: `${memory.y}%`,
              zIndex: memory.zIndex,
              rotate: memory.rotation,
            }
      }
      animate={
        mobile
          ? undefined
          : {
              y: [0, -10, 0],
              rotate: [memory.rotation, memory.rotation + 2, memory.rotation],
            }
      }
      transition={{
        duration: 5 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08, zIndex: 50, rotate: 0 }}
    >
      <div className="rounded-sm bg-white p-2 pb-10 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(244,114,182,0.15)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-night via-rose-pink/20 to-lavender/30">
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={memory.caption}
              className="absolute inset-0 h-full w-full object-cover"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="text-3xl">📷</span>
              <span className="text-xs text-white/60">
                Add {memory.image} to public/memories/
              </span>
            </div>
          )}
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center font-handwriting text-sm text-night/80">
          {memory.caption}
        </p>
      </div>
    </motion.div>
  );
}
