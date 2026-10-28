"use client";

import React from "react";

export function Ticker() {
  const items = [
    "CLAIM READY",
    "A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM",
    "KEEP YOURS, AND ASK FOR THEIRS IN WRITING",
    "15 VERIFIED STEPS",
    "DECIDED ON FACTS, IN WRITING",
    "4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG",
    "1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN",
    "CONSUMER RIGHTS & EVIDENCE ARCHIVE",
  ];

  return (
    <div
      className="w-full bg-[#EEFAF5] border-b border-[#B9E6D6] py-3 overflow-hidden select-none"
      aria-label="Important warranty rules ticker"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render twice for continuous infinite scroll loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-5">
            <span className="font-mono text-[10px] font-medium text-[#065F43] uppercase tracking-[0.16em]">
              {text}
            </span>
            <span className="ml-10 text-[#087A58] opacity-40 font-mono text-[10px]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
