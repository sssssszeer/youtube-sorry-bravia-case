"use client";

import React, { useState } from "react";
import { PillLabel } from "./PillLabel";

export function CallToActionSection() {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent">("idle");

  const checklistText = `CLAIM READY — A free checklist for anyone about to file a warranty claim.

THE IDEA IN ONE LINE:
"A warranty claim is decided on records. Keep yours, and ask for theirs in writing."

WHO THIS IS FOR:
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS:
- 15 steps in the checklist.
- 4 records to keep before anything goes wrong.
- 1 rule: if it is not in writing, it did not happen.

FOOTER NOTE:
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

  const handleDownload = () => {
    const blob = new Blob([checklistText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "claim-ready-checklist.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Claim Ready — Warranty Claim Checklist",
          text: "A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // ignore
      }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailStatus("sent");
      setTimeout(() => setEmailStatus("idle"), 4000);
      setEmail("");
    }
  };

  return (
    <section id="checklist-action" className="py-20 md:py-32 bg-white border-b border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="flex flex-col items-start mb-12">
          <PillLabel className="mb-4">
            NEXT STEPS &bull; BE PREPARED
          </PillLabel>

          <h2 className="text-[31px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
            CALL TO ACTION
          </h2>

          <p className="text-[17.5px] sm:text-[20px] leading-[1.72] text-[#5B6472] max-w-2xl">
            Protect your rights before the conversation turns into a dispute. Keep this checklist ready right alongside your receipts.
          </p>
        </div>

        {/* 2-Column Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Action 1: Download the checklist */}
          <div className="bg-[#FBFCFD] rounded-[18px] border border-[#E7EAEF] p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-[#087A58] bg-[#EEFAF5] px-3 py-1 rounded-full border border-[#B9E6D6]">
                  OFFLINE COPY
                </span>
                <span className="font-mono text-[11px] text-[#5B6472]">TXT / PDF READY</span>
              </div>

              <h3 className="text-[24px] sm:text-[27px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.15] mb-4">
                Download the checklist and keep it with your invoices.
              </h3>

              <p className="text-[16px] leading-[1.72] text-[#363C47] mb-8">
                Keep an offline document stored directly in your receipts folder or cloud drive. If your appliance, phone, or TV malfunctions, you will have all 15 verification steps immediately on hand.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7EAEF] flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold leading-none rounded-full px-7 py-[14px] min-h-[44px] shadow-raised hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Checklist (.txt)</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold leading-none rounded-full px-5 py-[14px] min-h-[44px] transition-colors"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          {/* Action 2: Share it with a friend */}
          <div className="bg-[#FBFCFD] rounded-[18px] border border-[#E7EAEF] p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-[#065F43] bg-[#EEFAF5] px-3 py-1 rounded-full border border-[#B9E6D6]">
                  SPREAD AWARENESS
                </span>
                <span className="font-mono text-[11px] text-[#5B6472]">COMMUNITY RESOURCE</span>
              </div>

              <h3 className="text-[24px] sm:text-[27px] font-extrabold text-[#0D1117] tracking-[-0.025em] leading-[1.15] mb-4">
                Share it with a friend who just bought something expensive.
              </h3>

              <p className="text-[16px] leading-[1.72] text-[#363C47] mb-8">
                Most people only look for warranty guidance after their claim has already been dismissed. Helping someone store the initial 4 records today saves weeks of frustrating appeals later.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7EAEF] flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold leading-none rounded-full px-7 py-[14px] min-h-[44px] shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[#087A58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{copied ? "Link Copied to Clipboard!" : "Share Link With a Friend"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Input Component matching DESIGN.md specs */}
        <div className="rounded-[18px] bg-[#F7F8FA] border border-[#E7EAEF] p-8 sm:p-10">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.16em] text-[#5B6472] block mb-2">
              QUICK DISPATCH
            </span>
            <h4 className="text-[20px] font-extrabold text-[#0D1117] tracking-tight mb-2">
              Send a direct copy to your inbox
            </h4>
            <p className="text-[14.5px] text-[#5B6472] mb-6">
              Keep a permanent search record in your email so you can pull up this checklist whenever you need it.
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="user-email" className="block text-[13.5px] font-semibold text-[#0D1117] mb-1.5 sr-only">
                  Email Address
                </label>
                <input
                  id="user-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email (e.g. name@domain.com)"
                  required
                  className="w-full h-[44px] px-[14px] bg-[#F2F4F7] text-[#0D1117] placeholder-[#697382] text-[15px] rounded-[12px] border border-[#D6DBE3] shadow-input transition-all"
                />
              </div>
              <button
                type="submit"
                className="h-[44px] px-6 bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium rounded-full transition-colors shrink-0"
              >
                Send Checklist
              </button>
            </form>

            {emailStatus === "sent" && (
              <p className="mt-3 text-[13.5px] text-[#087A58] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                Checklist dispatched! Keep it saved in your warranty folder.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
