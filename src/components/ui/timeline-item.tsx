"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  step: string;
  description: string;
  index: number;
}

export function TimelineItem({ step, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Line */}
      <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border group-last:hidden" />

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
      </div>

      {/* Step number */}
      <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1 block">
        Step {index + 1}
      </span>

      <h3 className="text-lg font-semibold text-text-primary mb-2">{step}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
