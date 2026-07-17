"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";
import { engineeringProcess } from "@/lib/data";

export function EngineeringProcess() {
  return (
    <section id="process" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Process"
          title="Engineering Process"
          description="How I approach building software — from idea to deployment."
        />

        <div className="max-w-2xl mx-auto">
          {engineeringProcess.map((step, i) => (
            <TimelineItem
              key={step.step}
              step={step.step}
              description={step.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
