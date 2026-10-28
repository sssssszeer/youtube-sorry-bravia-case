"use client";

import React, { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Before Fault", href: "#before" },
    { label: "When Fault Appears", href: "#fault" },
    { label: "Technician Visit", href: "#technician" },
    { label: "If Refused", href: "#refused" },
    { label: "Key Numbers", href: "#numbers" },
  ];

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] transition-all">
      <div className="max-w-[1180px] h-full mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo left */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:rounded-md"
          aria-label="Claim Ready Home"
        >
          <div className="w-8 h-8 rounded-[8px] bg-[#087A58] flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
            CR
          </div>
          <span className="font-sans font-extrabold text-[19px] tracking-[-0.035em] text-[#0D1117] group-hover:text-[#087A58] transition-colors">
            CLAIM READY
          </span>
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#363C47] hover:text-[#087A58] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Dark Button */}
        <div className="flex items-center gap-3">
          <a
            href="#checklist-action"
            className="inline-flex items-center justify-center bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium leading-none rounded-full px-5 py-[10px] min-h-[40px] transition-colors shadow-sm"
          >
            Get Checklist
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-[#363C47] hover:text-[#087A58] min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E7EAEF] px-5 py-4 shadow-raised animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-[15px] font-medium text-[#363C47] hover:bg-[#EEFAF5] hover:text-[#087A58] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
