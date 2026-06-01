"use client";

import BirthdayCake from "@/components/BirthdayCake";
import Envelope from "@/components/Envelope";
import ExperienceShell from "@/components/ExperienceShell";
import Hero from "@/components/Hero";
import LoveConstellation from "@/components/LoveConstellation";
import MemoryGallery from "@/components/MemoryGallery";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
  return (
    <ExperienceShell>
      <PageTransition>
        <Hero />
        <MemoryGallery />
        <LoveConstellation />
        <BirthdayCake />
        <Envelope />
      </PageTransition>
    </ExperienceShell>
  );
}
