"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <span className="text-xs font-medium tracking-widest uppercase text-primary">
        {label}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
