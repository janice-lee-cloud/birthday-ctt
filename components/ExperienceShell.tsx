"use client";

import AmbientSparkles from "@/components/AmbientSparkles";
import FloatingHearts from "@/components/FloatingHearts";
import MusicButton from "@/components/MusicButton";
import ParticleField from "@/components/ParticleField";
import SoundToggle from "@/components/SoundToggle";
import StarfieldBackground from "@/components/StarfieldBackground";
import type { ReactNode } from "react";

export default function ExperienceShell({ children }: { children: ReactNode }) {
  return (
    <>
      <StarfieldBackground />
      <ParticleField />
      <AmbientSparkles />
      <FloatingHearts />
      <MusicButton />
      <SoundToggle />
      <main className="relative z-10 min-h-screen">{children}</main>
    </>
  );
}
