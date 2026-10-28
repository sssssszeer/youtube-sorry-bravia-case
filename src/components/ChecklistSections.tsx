"use client";

import React, { useState, useEffect } from "react";
import { PillLabel } from "./PillLabel";

interface StepItem {
  id: number;
  title: string;
  body: string;
  category: string;
  tag: string;
}

const beforeSteps: StepItem[] = [
  {
    id: 1,
    title: "Keep the invoice.",
    body: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
    category: "BEFORE ANYTHING GOES WRONG",
    tag: "PURCHASE RECORD",
  },
  {
    id: 2,
    title: "Register the product.",
    body: "Many brands ask you to register on their website or app; some add extra warranty when you do.",
    category: "BEFORE ANYTHING GOES WRONG",
    tag: "REGISTRATION",
  },
  {
    id: 3,
    title: "Read the warranty card once.",
    body: "Note how long it lasts, what it covers, and what it excludes.",
    category: "BEFORE ANYTHING GOES WRONG",
    tag: "POLICY TERMS",
  },
  {
    id: 4,
    title: "Record the condition.",
    body: "Take a few dated photos of the product once it is installed or unboxed.",
    category: "BEFORE ANYTHING GOES WRONG",
    tag: "BASELINE EVIDENCE",
  },
];

const faultSteps: StepItem[] = [
  {
    id: 5,
    title: "Record the fault.",
    body: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
    category: "WHEN THE FAULT APPEARS",
    tag: "TIME-STAMPED PROOF",
  },
  {
    id: 6,
    title: "Raise the complaint in writing.",
    body: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
    category: "WHEN THE FAULT APPEARS",
    tag: "WRITTEN NOTICE",
  },
  {
    id: 7,
    title: "Note every reference number.",
    body: "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
    category: "WHEN THE FAULT APPEARS",
    tag: "TICKET TRACKING",
  },
];

const visitSteps: StepItem[] = [
  {
    id: 8,
    title: "Ask for the job sheet.",
    body: "Ask the technician for a copy of the visit report or job sheet before they leave.",
    category: "WHEN A TECHNICIAN VISITS",
    tag: "VISIT REPORT",
  },
  {
    id: 9,
    title: "Ask what was tested.",
    body: "Ask which test or instrument was used to reach the diagnosis.",
    category: "WHEN A TECHNICIAN VISITS",
    tag: "DIAGNOSTIC METHOD",
  },
  {
    id: 10,
    title: "Take your own photos.",
    body: "Photograph the product and anything the technician points to, during the visit.",
    category: "WHEN A TECHNICIAN VISITS",
    tag: "INSPECTION PHOTOS",
  },
];

const refusedSteps: StepItem[] = [
  {
    id: 11,
    title: "Ask for the reason in writing.",
    body: "Request a written explanation that names the exact cause and the evidence for it.",
    category: "IF THE CLAIM IS REFUSED",
    tag: "FORMAL REASONING",
  },
  {
    id: 12,
    title: "Ask for the technical report.",
    body: "If the refusal rests on an inspection, ask for that inspection report.",
    category: "IF THE CLAIM IS REFUSED",
    tag: "TECHNICAL EVIDENCE",
  },
  {
    id: 13,
    title: "Escalate inside the company.",
    body: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
    category: "IF THE CLAIM IS REFUSED",
    tag: "ESCALATION TIER",
  },
  {
    id: 14,
    title: "Keep it factual.",
    body: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
    category: "IF THE CLAIM IS REFUSED",
    tag: "FACTUAL DOSSIER",
  },
  {
    id: 15,
    title: "Know your consumer helpline.",
    body: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
    category: "IF THE CLAIM IS REFUSED",
    tag: "REGULATORY ACCESS",
  },
];

export function ChecklistSections() {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("claim_ready_checked_steps");
      if (saved) {
        setCheckedSteps(JSON.parse(saved));
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const toggleStep = (id: number) => {
    setCheckedSteps((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("claim_ready_checked_steps", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;

  return (
    <div className="w-full">
      {/* Interactive Progress tracker banner */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-[#E7EAEF] py-3 shadow-sm">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#065F43] font-semibold bg-[#EEFAF5] px-2.5 py-1 rounded-full border border-[#B9E6D6]">
              CHECKLIST PROGRESS
            </span>
            <span className="text-[#363C47] font-semibold">
              <span className="text-[#087A58] text-sm font-bold">{completedCount}</span> / 15 steps verified
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-36 h-2 bg-[#F2F4F7] rounded-full overflow-hidden border border-[#E7EAEF]">
              <div
                className="h-full bg-[#087A58] transition-all duration-300 rounded-full"
                style={{ width: `${(completedCount / 15) * 100}%` }}
              />
            </div>
            {completedCount > 0 && (
              <button
                onClick={() => {
                  setCheckedSteps({});
                  try {
                    localStorage.removeItem("claim_ready_checked_steps");
                  } catch {}
                }}
                className="text-[11px] text-[#5B6472] hover:text-[#D61F26] underline font-mono"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: BEFORE ANYTHING GOES WRONG (Muted Gray Section) */}
      {/* ========================================================================= */}
      <section id="before" className="py-20 md:py-32 bg-[#F7F8FA] border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Section header stack: label -> 16px -> headline -> 20px -> lead */}
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <PillLabel className="mb-4">
              STAGE 01 &bull; PREPARATION
            </PillLabel>

            <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
              BEFORE ANYTHING GOES WRONG
            </h2>

            <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-[#5B6472] max-w-3xl">
              4 records to keep before anything goes wrong. Establishing documentation before a breakdown occurs removes any doubt about ownership, warranty duration, and pre-existing condition.
            </p>
          </div>

          {/* Hairline Grid of 4 Cards */}
          <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] shadow-card">
            {beforeSteps.map((step) => {
              const isChecked = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
                    isChecked ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58]">
                        {step.tag}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-[#087A58] border-[#087A58] text-white"
                            : "border-[#D6DBE3] bg-white text-transparent"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="font-mono text-[28px] font-extrabold text-[#0D1117] mb-2 tnum">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    <h3 className="text-[20px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.2] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[15.5px] leading-[1.65] text-[#363C47]">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex items-center justify-between text-[11px] font-mono text-[#5B6472]">
                    <span>STATUS</span>
                    <span className={isChecked ? "text-[#087A58] font-bold" : "text-[#5B6472]"}>
                      {isChecked ? "COMPLETED" : "TAP TO VERIFY"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHEN THE FAULT APPEARS (White Section) */}
      {/* ========================================================================= */}
      <section id="fault" className="py-20 md:py-32 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <PillLabel className="mb-4">
              STAGE 02 &bull; FIRST RESPONSE
            </PillLabel>

            <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
              WHEN THE FAULT APPEARS
            </h2>

            <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-[#5B6472] max-w-3xl">
              Create an unshakeable timestamped trail immediately. Phone calls vanish into thin air; tickets and written records exist forever.
            </p>
          </div>

          {/* Hairline Grid of 3 Cards */}
          <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-card">
            {faultSteps.map((step) => {
              const isChecked = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-8 sm:p-9 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
                    isChecked ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58]">
                        {step.tag}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-[#087A58] border-[#087A58] text-white"
                            : "border-[#D6DBE3] bg-white text-transparent"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="font-mono text-[30px] font-extrabold text-[#0D1117] mb-2 tnum">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    <h3 className="text-[22px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.2] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[16px] leading-[1.65] text-[#363C47]">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex items-center justify-between text-[11px] font-mono text-[#5B6472]">
                    <span>RECORD METHOD</span>
                    <span className={isChecked ? "text-[#087A58] font-bold" : "text-[#5B6472]"}>
                      {isChecked ? "VERIFIED IN WRITING" : "TAP TO RECORD"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHEN A TECHNICIAN VISITS (Muted Gray Section) */}
      {/* ========================================================================= */}
      <section id="technician" className="py-20 md:py-32 bg-[#F7F8FA] border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <PillLabel className="mb-4">
              STAGE 03 &bull; IN-PERSON INSPECTION
            </PillLabel>

            <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
              WHEN A TECHNICIAN VISITS
            </h2>

            <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-[#5B6472] max-w-3xl">
              Never accept verbal reassurances that don&apos;t appear on the signed service sheet. What gets written during the visit becomes the official basis of the claim.
            </p>
          </div>

          {/* Hairline Grid of 3 Cards */}
          <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-card">
            {visitSteps.map((step) => {
              const isChecked = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-8 sm:p-9 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
                    isChecked ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58]">
                        {step.tag}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-[#087A58] border-[#087A58] text-white"
                            : "border-[#D6DBE3] bg-white text-transparent"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="font-mono text-[30px] font-extrabold text-[#0D1117] mb-2 tnum">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    <h3 className="text-[22px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.2] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[16px] leading-[1.65] text-[#363C47]">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex items-center justify-between text-[11px] font-mono text-[#5B6472]">
                    <span>VISIT PROOF</span>
                    <span className={isChecked ? "text-[#087A58] font-bold" : "text-[#5B6472]"}>
                      {isChecked ? "OBTAINED" : "TAP TO CONFIRM"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: IF THE CLAIM IS REFUSED (White Section + Callout Card) */}
      {/* ========================================================================= */}
      <section id="refused" className="py-20 md:py-32 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <PillLabel className="mb-4">
              STAGE 04 &bull; DISPUTE & ESCALATION
            </PillLabel>

            <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
              IF THE CLAIM IS REFUSED
            </h2>

            <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-[#5B6472] max-w-3xl">
              A refusal is merely the beginning of the formal evidence stage. Demand specific written technical grounds, escalate hierarchically, and engage statutory helplines.
            </p>
          </div>

          {/* Hairline Grid of 5 Cards */}
          <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] shadow-card mb-10">
            {refusedSteps.map((step) => {
              const isChecked = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
                    isChecked ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58]">
                        {step.tag}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-[#087A58] border-[#087A58] text-white"
                            : "border-[#D6DBE3] bg-white text-transparent"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="font-mono text-[28px] font-extrabold text-[#0D1117] mb-2 tnum">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    <h3 className="text-[20px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.2] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[15.5px] leading-[1.65] text-[#363C47]">
                      {step.body}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7EAEF] flex items-center justify-between text-[11px] font-mono text-[#5B6472]">
                    <span>DEFENSE ACTION</span>
                    <span className={isChecked ? "text-[#087A58] font-bold" : "text-[#5B6472]"}>
                      {isChecked ? "LOCKED IN RECORD" : "TAP TO MARK"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout Card (From DESIGN.md: card-callout) */}
          <div className="rounded-[18px] bg-[#EEFAF5] border border-[#B9E6D6] p-7 md:p-9 shadow-card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#087A58] text-white flex items-center justify-center shrink-0 shadow-sm font-mono font-bold text-lg">
                &sect;
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] font-semibold text-[#065F43] uppercase tracking-[0.16em] block mb-1">
                  CRITICAL CONSUMER FORUM PRINCIPLE
                </span>
                <p className="text-[17.5px] sm:text-[19px] font-semibold text-[#065F43] leading-relaxed">
                  &ldquo;Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
