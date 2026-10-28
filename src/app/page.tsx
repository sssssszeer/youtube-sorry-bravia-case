"use client";

import React from "react";
import { Ticker } from "@/components/Ticker";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeadlineCard } from "@/components/HeadlineCard";
import { ChecklistSections } from "@/components/ChecklistSections";
import { KeyNumbersSection } from "@/components/KeyNumbersSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const scrollToCTA = () => {
    const el = document.getElementById("checklist-action");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#363C47]">
      {/* 1. Ticker strip at top */}
      <Ticker />

      {/* 2. Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onDownloadClick={scrollToCTA}
          onShareClick={scrollToCTA}
        />

        {/* 4. Headline Card (Top of page feature) */}
        <div className="pb-16 md:pb-24 bg-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            <HeadlineCard />
          </div>
        </div>

        {/* 5. Four Core Checklist Stages (Alternating Muted / White) */}
        <ChecklistSections />

        {/* 6. Key Numbers (Dark Ink Section) */}
        <KeyNumbersSection />

        {/* 7. Call To Action Section */}
        <CallToActionSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
