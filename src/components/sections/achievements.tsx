"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { achievements, achievementsExtra } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Achievements"
          title="Quick Facts"
          description="A snapshot of my journey so far."
        />

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {achievements.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Extra achievements as tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {achievementsExtra.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full glass text-sm text-text-secondary border border-border/50"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
