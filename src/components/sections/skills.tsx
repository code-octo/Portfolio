"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillCard } from "@/components/ui/skill-card";
import { techStack } from "@/lib/data";

export function Skills() {
  const categories = Object.entries(techStack);

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technical Skills"
          description="Technologies I work with and my comfort level with each."
        />

        <div className="space-y-12">
          {categories.map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.05 }}
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-5">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {(skillList as Array<{ name: string; level: number }>).map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
