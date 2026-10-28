import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472] text-[13.5px] leading-[1.5]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Three Columns from DESIGN.md (about, pages, contact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-[#E7EAEF]">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-[6px] bg-[#087A58] flex items-center justify-center text-white font-mono font-bold text-[10px]">
                CR
              </div>
              <span className="font-sans font-extrabold text-[16px] tracking-[-0.035em] text-[#0D1117]">
                CLAIM READY
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[#5B6472] mb-3">
              A calm, factual, and independent checklist for consumers filing warranty claims on appliances, phones, televisions, and electronics.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#087A58] font-semibold">
              EVIDENCE-FIRST STANDARD
            </span>
          </div>

          {/* Column 2: Pages / Sections */}
          <div>
            <h5 className="font-mono text-[11px] font-semibold text-[#0D1117] uppercase tracking-[0.16em] mb-4">
              SECTIONS & ARCHIVE
            </h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#before" className="hover:text-[#087A58] transition-colors">
                  01. Before Anything Goes Wrong (Steps 1–4)
                </a>
              </li>
              <li>
                <a href="#fault" className="hover:text-[#087A58] transition-colors">
                  02. When the Fault Appears (Steps 5–7)
                </a>
              </li>
              <li>
                <a href="#technician" className="hover:text-[#087A58] transition-colors">
                  03. When a Technician Visits (Steps 8–10)
                </a>
              </li>
              <li>
                <a href="#refused" className="hover:text-[#087A58] transition-colors">
                  04. If the Claim Is Refused (Steps 11–15)
                </a>
              </li>
              <li>
                <a href="#numbers" className="hover:text-[#087A58] transition-colors">
                  05. Key Numbers & Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact / Helplines */}
          <div>
            <h5 className="font-mono text-[11px] font-semibold text-[#0D1117] uppercase tracking-[0.16em] mb-4">
              CONSUMER ASSISTANCE
            </h5>
            <p className="text-[13.5px] leading-[1.6] text-[#5B6472] mb-3">
              When brands fail to act, consult your national consumer protection helpline or statutory trading standards authority.
            </p>
            <div className="p-3 rounded-[10px] bg-white border border-[#E7EAEF] text-[12px] font-mono text-[#363C47]">
              <span>RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Line / FOOTER NOTE from content.txt */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] leading-[1.6] text-[#5B6472] max-w-3xl">
            <strong className="text-[#0D1117] font-semibold">FOOTER NOTE:</strong> Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </p>

          <div className="font-mono text-[11px] text-[#697382] shrink-0">
            &copy; {new Date().getFullYear()} CLAIM READY &bull; OPEN RESOURCE
          </div>
        </div>
      </div>
    </footer>
  );
}
