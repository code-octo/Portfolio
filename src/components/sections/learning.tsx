"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { learningRoadmap } from "@/lib/data";
import { BookOpen } from "lucide-react";

export function Learning() {
  return (
    <section id="learning" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Learning"
          title="Currently Learning"
          description="Technologies and concepts I'm actively exploring to grow as an engineer."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {learningRoadmap.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-5 text-center group hover:bg-surface-elevated/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
