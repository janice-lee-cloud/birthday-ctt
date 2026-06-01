"use client";

import ExperienceShell from "@/components/ExperienceShell";
import LetterExperience from "@/components/LetterExperience";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { assetPath } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LetterPage() {
  return (
    <ExperienceShell>
      <PageTransition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed left-5 top-5 z-50"
        >
          <Link
            href={assetPath("/")}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/20"
          >
            ← Back
          </Link>
        </motion.div>
        <LetterExperience />
      </PageTransition>
    </ExperienceShell>
  );
}
