"use client";

import ExperienceShell from "@/components/ExperienceShell";
import LetterExperience from "@/components/LetterExperience";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

export default function LetterPage() {
  return (
    <ExperienceShell>
      <PageTransition>
        <div className="fixed left-5 top-5 z-50">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/20"
          >
            ← Back
          </Link>
        </div>
        <LetterExperience />
      </PageTransition>
    </ExperienceShell>
  );
}
