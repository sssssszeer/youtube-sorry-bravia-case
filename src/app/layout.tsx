import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLAIM READY — Warranty Claim Checklist",
  description: "A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#363C47] selection:bg-[#DCF3EA] selection:text-[#065F43]">
        {children}
      </body>
    </html>
  );
}
