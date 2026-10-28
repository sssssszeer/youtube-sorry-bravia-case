import React from "react";

interface PillLabelProps {
  children: React.ReactNode;
  showDot?: boolean;
  className?: string;
}

export function PillLabel({ children, showDot = true, className = "" }: PillLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full px-3.5 py-1.5 select-none ${className}`}
    >
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
