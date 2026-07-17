"use client";

import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with{" "}
            <span className="text-text-secondary">Next.js</span>,{" "}
            <span className="text-text-secondary">TypeScript</span>,{" "}
            <span className="text-text-secondary">Tailwind</span>, and{" "}
            <span className="text-text-secondary">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
