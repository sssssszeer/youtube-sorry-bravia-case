import React from "react";

export function KeyNumbersSection() {
  return (
    <section id="numbers" className="py-20 md:py-36 bg-[#0D1117] text-white relative overflow-hidden">
      {/* Background glow or subtle tech grid */}
      <div className="absolute inset-0 scanline-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 md:px-10 relative z-10">
        {/* Section header stack: pill -> headline -> lead */}
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#34D399] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>METRICS & CORE PRINCIPLE</span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-white tracking-[-0.035em] leading-[1.06] mb-5">
            KEY NUMBERS FOR THE PAGE
          </h2>

          <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-white/80 max-w-3xl">
            Consumer claims succeed when personal frustration is converted into structured documentation. Three figures define the entire system.
          </p>
        </div>

        {/* Stat Grid: 3 cells joined by 1px hairline gaps inside one rounded card */}
        <div className="rounded-[18px] overflow-hidden border border-white/15 bg-white/10 grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-raised">
          {/* Cell 1: 15 */}
          <div className="bg-[#0D1117] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#131922] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-white/50">
                  TOTAL CHECKLIST
                </span>
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <div className="font-sans text-[48px] sm:text-[56px] font-extrabold tracking-[-0.035em] text-white leading-none tnum mb-4">
                15
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[15.5px] sm:text-[17px] font-medium text-white/90 leading-snug">
                steps in the checklist.
              </p>
              <span className="text-[13px] text-white/60 mt-1 block">
                Structured across 4 key operational stages.
              </span>
            </div>
          </div>

          {/* Cell 2: 4 */}
          <div className="bg-[#0D1117] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#131922] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-white/50">
                  PREVENTATIVE FILE
                </span>
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <div className="font-sans text-[48px] sm:text-[56px] font-extrabold tracking-[-0.035em] text-white leading-none tnum mb-4">
                4
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[15.5px] sm:text-[17px] font-medium text-white/90 leading-snug">
                records to keep before anything goes wrong.
              </p>
              <span className="text-[13px] text-white/60 mt-1 block">
                Invoice, registration, warranty card, and condition photos.
              </span>
            </div>
          </div>

          {/* Cell 3 (HOT CELL): 1 */}
          <div className="bg-[#0D1117] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#131922] transition-colors relative overflow-hidden">
            {/* Emerald glow accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#34D399]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-[#34D399]">
                  FOUNDATIONAL RULE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#34D399]" />
              </div>
              <div className="font-sans text-[48px] sm:text-[56px] font-extrabold tracking-[-0.035em] text-[#34D399] leading-none tnum mb-4">
                1
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[15.5px] sm:text-[17px] font-medium text-white leading-snug">
                rule: <span className="text-[#34D399] font-bold">if it is not in writing, it did not happen.</span>
              </p>
              <span className="text-[13px] text-white/60 mt-1 block">
                The golden standard for consumer forum adjudication.
              </span>
            </div>
          </div>
        </div>

        {/* Editorial statement beneath numbers */}
        <div className="mt-12 p-6 sm:p-8 rounded-[18px] bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#34D399]/20 flex items-center justify-center text-[#34D399] font-mono text-sm font-bold shrink-0">
              OK
            </div>
            <p className="text-[14.5px] text-white/80 leading-relaxed">
              Every document you collect transforms a subjective disagreement into an objective legal record.
            </p>
          </div>
          <a
            href="#checklist-action"
            className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#34D399]/90 text-[#0D1117] font-semibold text-[14px] px-5 py-2.5 rounded-full transition-all shrink-0 min-h-[40px]"
          >
            <span>Take Action Now</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
