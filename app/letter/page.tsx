"use client";

import ExperienceShell from "@/components/ExperienceShell";
import LetterExperience from "@/components/LetterExperience";
import { assetPath } from "@/lib/utils";

export default function LetterPage() {
  return (
    <ExperienceShell>
      <div className="fixed left-4 top-4 z-50 safe-top">
        <a
          href={assetPath("/")}
          className="touch-manipulation inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-md active:bg-white/20"
        >
          ← Back
        </a>
      </div>
      <LetterExperience />
    </ExperienceShell>
  );
}
