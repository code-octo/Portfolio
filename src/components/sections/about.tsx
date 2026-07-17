"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutContent, education } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Who I Am"
          description="A bit about my journey and what drives me."
        />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="md:col-span-3 space-y-4">
            {aboutContent.story.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-text-secondary leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass gradient-border">
              <Image
                src={aboutContent.photo}
                alt="Ashfak Seinudeen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-primary mb-10"
          >
            Education
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {i < education.length - 1 && (
                  <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border" />
                )}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h4 className="text-lg font-semibold text-text-primary">
                      {edu.school}
                    </h4>
                    {edu.period && (
                      <span className="text-xs text-text-muted">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">{edu.degree}</p>
                  {edu.year && (
                    <p className="text-xs text-text-muted mt-1">{edu.year}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
