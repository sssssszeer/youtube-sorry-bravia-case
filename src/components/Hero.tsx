"use client";

import React from "react";
import { PillLabel } from "./PillLabel";

interface HeroProps {
  onDownloadClick?: () => void;
  onShareClick?: () => void;
}

export function Hero({ onDownloadClick, onShareClick }: HeroProps) {
  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy (~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <PillLabel className="mb-4">
              CONSUMER GUIDE &bull; ZERO COST
            </PillLabel>

            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5 text-balance">
              CLAIM READY
            </h1>

            <p className="text-[22px] sm:text-[26px] font-bold text-[#087A58] tracking-[-0.02em] leading-[1.25] mb-6">
              A free checklist for anyone about to file a warranty claim.
            </p>

            <div className="mb-6 p-4 rounded-[14px] bg-[#F7F8FA] border border-[#E7EAEF] w-full">
              <span className="font-mono text-[10px] font-medium text-[#5B6472] uppercase tracking-[0.16em] block mb-1">
                WHO THIS IS FOR
              </span>
              <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#363C47]">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#checklist-action"
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold leading-none rounded-full px-7 py-[14px] min-h-[44px] shadow-raised hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Download Free Checklist</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#checklist-action"
                onClick={onShareClick}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold leading-none rounded-full px-7 py-[14px] min-h-[44px] transition-colors"
              >
                Share It With a Friend
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[#5B6472] text-[13.5px]">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#087A58]" />
                15 actionable steps
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#087A58]" />
                100% Free & Open
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#087A58]" />
                Consumer Rights Standard
              </span>
            </div>
          </div>

          {/* Right Column: Visual Document Card (~42%) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Document Card following DESIGN.md */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] shadow-card p-6 sm:p-7 relative overflow-hidden transition-all hover:shadow-raised hover:-translate-y-0.5 duration-200">
                {/* Header of document card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
                    <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-[#065F43]">
                      OFFICIAL CASE RECORD
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#5B6472]">
                    DOC ID: CR-2026-90
                  </span>
                </div>

                {/* Quoted line */}
                <div className="bg-[#FBFCFD] rounded-[12px] p-4 border border-[#E7EAEF] mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472] block mb-1">
                    PRIMARY PRINCIPLE
                  </span>
                  <p className="text-[15px] font-medium text-[#0D1117] leading-relaxed italic">
                    &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                  </p>
                </div>

                {/* Evidence checklist preview inside card */}
                <div className="space-y-2.5 mb-5 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-2.5 rounded-[8px] bg-[#EEFAF5] border border-[#B9E6D6]/60 text-[#065F43]">
                    <span className="font-semibold">01. Original Tax Invoice</span>
                    <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-[#087A58] text-white">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-[8px] bg-[#F7F8FA] border border-[#E7EAEF] text-[#363C47]">
                    <span>02. Dated Photo of Fault</span>
                    <span className="text-[#5B6472] text-[9px]">Timestamped</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-[8px] bg-[#F7F8FA] border border-[#E7EAEF] text-[#363C47]">
                    <span>03. Written Job Sheet</span>
                    <span className="text-[#5B6472] text-[9px]">Signed copy</span>
                  </div>
                </div>

                {/* Footer of document card */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E7EAEF] text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B6472]">
                      STANDARDS: ISO/IEC 17025
                    </span>
                  </div>
                  <a
                    href="#before"
                    className="text-[#087A58] hover:text-[#066748] font-semibold text-[13px] flex items-center gap-1"
                  >
                    View Source &rarr;
                  </a>
                </div>
              </div>

              {/* Decorative background depth card */}
              <div className="absolute -bottom-3 -right-3 left-3 h-full -z-10 rounded-[18px] bg-[#EEFAF5] border border-[#B9E6D6]/50 opacity-60 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
