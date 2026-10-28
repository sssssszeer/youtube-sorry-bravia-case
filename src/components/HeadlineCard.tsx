import React from "react";

export function HeadlineCard() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-[#0D1117] p-8 sm:p-10 md:p-12 shadow-raised border border-white/10 scanline-pattern">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="font-mono text-[10px] md:text-[11px] font-semibold text-[#34D399] uppercase tracking-[0.16em]">
            THE IDEA IN ONE LINE
          </span>
        </div>
        <p className="font-mono text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[1.4] tracking-tight text-[#34D399] text-balance">
          &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
        </p>
        <div className="pt-2 flex items-center justify-between border-t border-white/10 text-white/50 font-mono text-[11px]">
          <span>RECORD RULE // SEC 01</span>
          <span>EVIDENCE PRECEDENCE: WRITTEN</span>
        </div>
      </div>
    </div>
  );
}
